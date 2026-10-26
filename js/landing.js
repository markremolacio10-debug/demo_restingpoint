/* ============================================================
   RestingPoint — landing.js (static, view-only version of Login.js)

   UPDATED (this version):
   - Removed everything that needs a backend: CSRF token, postJSON(), login /
     admin / register / OTP / display-name forms, password toggles, safeRedirect()
   - Added openDemo(): every Log in / Staff / Create account button now opens a
     "Demo only, not available online" modal
   - Kept as-is: live route numbers + sample directions, landmark photo carousel,
     nav scroll state, reveal-on-scroll, section rail, rp:modal event
   ============================================================ */
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {

        // ── Element references ──────────────────────────────────
        var overlay   = document.getElementById('modalOverlay');
        var container = document.getElementById('modalContainer');
        var closeBtn  = document.getElementById('modalClose');
        var demoTitle = document.getElementById('demoTitle');
        var lastFocus = null;   // element to give focus back to when the modal closes

        var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // ── Helpers ─────────────────────────────────────────────

        /** Shorthand for document.getElementById. */
        function $(id) { return document.getElementById(id); }

        /** Adds a listener to an element by id, and quietly skips it if the id is missing. */
        function on(id, evt, fn) { var el = $(id); if (el) el.addEventListener(evt, fn); }

        // ============================================================
        //  DEMO-ONLY MODAL
        // ============================================================

        /**
         * Opens the "Demo only" modal.
         * @param {string} title  Heading to show, e.g. "Log in" or "Staff login".
         * Also tells hero3d.js (via rp:modal) to pause while the modal covers the page.
         */
        function openDemo(title) {
            lastFocus = document.activeElement;
            if (demoTitle) demoTitle.textContent = title + ': demo only';
            overlay.classList.add('active');
            overlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            window.dispatchEvent(new CustomEvent('rp:modal', { detail: { open: true } }));

            // Move keyboard focus into the dialog (the close button is first).
            setTimeout(function () { if (closeBtn) closeBtn.focus({ preventScroll: true }); }, 60);
        }

        /** Closes the modal, resumes the 3D hero and returns focus to the button that opened it. */
        function closeModal() {
            overlay.classList.remove('active');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            window.dispatchEvent(new CustomEvent('rp:modal', { detail: { open: false } }));
            if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
        }

        // Every button that used to open a login/register/staff panel now opens the demo popup.
        on('enterBtn',   'click', function () { openDemo('Log in or create an account'); });
        on('navLogin',   'click', function () { openDemo('Log in'); });
        on('navStaff',   'click', function () { openDemo('Staff login'); });
        on('tierSignup', 'click', function () { openDemo('Create an account'); });
        on('tierStaff',  'click', function () { openDemo('Staff login'); });

        // Close: X button, "Close" button, click on the dark backdrop, or Escape.
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        on('demoClose', 'click', closeModal);
        overlay.addEventListener('click', function (e) { if (e.target === overlay) closeModal(); });

        // Escape closes the modal; Tab is kept inside the dialog (focus trap).
        document.addEventListener('keydown', function (e) {
            if (!overlay.classList.contains('active')) return;
            if (e.key === 'Escape') { closeModal(); return; }
            if (e.key !== 'Tab') return;

            var f = container.querySelectorAll('a[href], button:not([disabled])');
            var visible = Array.prototype.filter.call(f, function (el) { return el.offsetParent !== null; });
            if (!visible.length) return;
            var first = visible[0];
            var last  = visible[visible.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        });

        // ============================================================
        //  LIVE ROUTE NUMBERS + SAMPLE DIRECTIONS (unchanged)
        // ============================================================

        /** Formats a number for display: kind 'm' -> "1,234 m", 'min' -> "12 min". */
        function fmt(val, kind) {
            if (kind === 'm')   return Number(val).toLocaleString('en-US') + ' m';
            if (kind === 'min') return val + ' min';
            return String(val);
        }

        /**
         * Fills every [data-route] element with the numbers hero3d.js computed from the
         * park's road data, and builds the "Sample directions" list.
         * Safe to run before or after the 3D script loads. Uses textContent only.
         */
        function applyRoute(r) {
            if (!r) return;
            document.querySelectorAll('[data-route]').forEach(function (el) {
                var key = el.getAttribute('data-route');
                if (r[key] !== undefined) el.textContent = fmt(r[key], el.getAttribute('data-fmt'));
            });

            var list = $('dirList');
            if (list && r.steps && r.steps.length) {
                list.textContent = '';
                var steps = r.steps.slice(0, 6);
                steps.forEach(function (st, i) {
                    var li = document.createElement('li');
                    li.className = 'dir-step';
                    var b = document.createElement('b');
                    b.textContent = (i === 0 ? 'Start on ' : 'Continue on ') + st.street;
                    var sp = document.createElement('span');
                    sp.textContent = st.dist + ' m';
                    li.appendChild(b); li.appendChild(sp);
                    list.appendChild(li);
                });
                var end = document.createElement('li');
                end.className = 'dir-step dir-end';
                var eb = document.createElement('b');
                eb.textContent = 'Arrive at your destination';
                end.appendChild(eb);
                list.appendChild(end);
            }
        }
        if (window.__rpRoute) applyRoute(window.__rpRoute);
        window.addEventListener('rp:route', function (e) { applyRoute(e.detail); });

        // ============================================================
        //  LANDMARK PHOTO CAROUSEL (unchanged)
        //  Endless auto-scroll, eases to a stop on hover, drag/swipe with momentum,
        //  centre card grows, real Pause button. Stops while off-screen, in a hidden
        //  tab, or behind the modal.
        // ============================================================
        (function photoCarousel() {
            var root  = $('photoCarousel');
            var track = $('photoTrack');
            var pauseBtn = $('photoPause');
            if (!root || !track) return;

            // Clone the cards once so the track can loop seamlessly.
            var originals = Array.prototype.slice.call(track.children);
            originals.forEach(function (card) {
                var c = card.cloneNode(true);
                c.setAttribute('aria-hidden', 'true');
                track.appendChild(c);
            });
            var cards = Array.prototype.slice.call(track.children);

            var SPEED = 46;                 // px per second
            var x = 0, loopW = 0;
            var cur = SPEED;                // eased current speed
            var userPaused = false, hovering = false, dragging = false;
            var inView = true, hiddenTab = false, modalOpen = false;
            var startX = 0, startOffset = 0, lastX = 0, lastT = 0, flick = 0;
            var raf = 0, last = 0, running = false;

            /** Measures the width of one full set of cards (the loop length). */
            function measure() {
                loopW = cards[originals.length].offsetLeft - cards[0].offsetLeft;
            }
            /** Keeps the track offset inside one loop so it never runs out of cards. */
            function wrap() {
                if (!loopW) return;
                while (x > 0) x -= loopW;
                while (x <= -loopW) x += loopW;
            }
            /** Scales and fades each card based on how close it is to the centre. */
            function focusFx() {
                var r = root.getBoundingClientRect();
                var mid = r.left + r.width / 2;
                var half = r.width / 2 || 1;
                cards.forEach(function (c) {
                    var cr = c.getBoundingClientRect();
                    var d = Math.min(1, Math.abs(cr.left + cr.width / 2 - mid) / half);
                    var k = 1 - d * d;
                    c.style.transform = 'scale(' + (0.94 + 0.09 * k).toFixed(3) + ')';
                    c.style.opacity = (0.55 + 0.45 * k).toFixed(3);
                });
            }
            /** Writes the current offset to the track and updates the card effects. */
            function apply() {
                wrap();
                track.style.transform = 'translate3d(' + x.toFixed(1) + 'px,0,0)';
                focusFx();
            }
            /** True when the carousel should be animating. */
            function shouldRun() { return inView && !hiddenTab && !modalOpen; }

            /** One animation frame: eases speed, adds drag momentum, redraws. */
            function tick(now) {
                raf = requestAnimationFrame(tick);
                var dt = Math.min((now - last) / 1000, 0.05);
                last = now;
                if (!dragging) {
                    var target = (userPaused || hovering || reduceMotion) ? 0 : SPEED;
                    cur += (target - cur) * Math.min(1, dt * 4);
                    x -= cur * dt;
                    x += flick * dt;                       // momentum from a drag
                    flick *= Math.exp(-dt * 3.2);
                    if (Math.abs(flick) < 1) flick = 0;
                }
                apply();
            }
            /** Starts the animation loop if allowed. */
            function start() {
                if (running || !shouldRun()) return;
                running = true; last = performance.now();
                raf = requestAnimationFrame(tick);
            }
            /** Stops the animation loop. */
            function stop() { running = false; cancelAnimationFrame(raf); }
            /** Starts or stops depending on the current visibility state. */
            function sync() { if (shouldRun()) start(); else stop(); }

            // Pointer: hover pause (mouse only) + drag / swipe.
            root.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') hovering = true; });
            root.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') hovering = false; });
            root.addEventListener('pointerdown', function (e) {
                dragging = true; flick = 0;
                startX = lastX = e.clientX; startOffset = x; lastT = performance.now();
                root.classList.add('dragging');
                if (root.setPointerCapture) root.setPointerCapture(e.pointerId);
            });
            root.addEventListener('pointermove', function (e) {
                if (!dragging) return;
                x = startOffset + (e.clientX - startX);
                var now = performance.now();
                var dt = (now - lastT) / 1000;
                if (dt > 0) flick = ((e.clientX - lastX) / dt) * 0.6;
                lastX = e.clientX; lastT = now;
                if (!running) apply();
            });
            /** Ends a drag and caps the flick speed. */
            function endDrag() {
                if (!dragging) return;
                dragging = false;
                root.classList.remove('dragging');
                if (Math.abs(flick) > 900) flick = flick > 0 ? 900 : -900;
                if (!running) apply();
            }
            root.addEventListener('pointerup', endDrag);
            root.addEventListener('pointercancel', endDrag);

            // Pause / Play button.
            if (pauseBtn) {
                pauseBtn.addEventListener('click', function () {
                    userPaused = !userPaused;
                    pauseBtn.textContent = userPaused ? 'Play' : 'Pause';
                    pauseBtn.setAttribute('aria-pressed', userPaused ? 'true' : 'false');
                });
            }

            // Stop animating when off-screen, in a hidden tab, or behind the modal.
            if ('IntersectionObserver' in window) {
                new IntersectionObserver(function (en) { inView = en[0].isIntersecting; sync(); }).observe(root);
            }
            document.addEventListener('visibilitychange', function () { hiddenTab = document.hidden; sync(); });
            window.addEventListener('rp:modal', function (e) { modalOpen = !!(e.detail && e.detail.open); sync(); });
            window.addEventListener('resize', function () { measure(); apply(); });
            window.addEventListener('load', function () { measure(); apply(); });

            measure(); apply(); sync();
        })();

        // ============================================================
        //  PAGE BEHAVIOUR: nav state, reveal-on-scroll, section rail (unchanged)
        // ============================================================

        // Adds the "scrolled" style to the nav once the page moves.
        var nav = $('nav');
        function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 24); }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        // Fades elements in the first time they scroll into view.
        var reveals = document.querySelectorAll('.reveal');
        if ('IntersectionObserver' in window) {
            var revealObs = new IntersectionObserver(function (entries) {
                entries.forEach(function (en) {
                    if (en.isIntersecting) {
                        en.target.classList.add('in');
                        revealObs.unobserve(en.target);
                    }
                });
            }, { threshold: 0.12 });
            reveals.forEach(function (el) { revealObs.observe(el); });
        } else {
            reveals.forEach(function (el) { el.classList.add('in'); });
        }

        // Section rail: highlights the dot for the section in the middle of the screen,
        // in both scroll directions.
        var sections = document.querySelectorAll('[data-rail]');
        var dots     = document.querySelectorAll('.rail-dot');
        if ('IntersectionObserver' in window && sections.length) {
            var live = {};
            var railObs = new IntersectionObserver(function (entries) {
                entries.forEach(function (en) {
                    var idx = parseInt(en.target.getAttribute('data-rail'), 10);
                    if (en.isIntersecting) live[idx] = true; else delete live[idx];
                });
                var keys = Object.keys(live).map(Number);
                var active = keys.length ? Math.min.apply(null, keys) : -1;
                dots.forEach(function (d, i) { d.classList.toggle('active', i === active); });
            }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
            sections.forEach(function (s) { railObs.observe(s); });
        }

        // Everything above ran without throwing: tell the page's safety net we're up.
        window.__rpReady = true;
    });
})();