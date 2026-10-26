/* ============================================
   MapView.js – Himlayang Pilipino (Improved)
   ============================================ */

// ============================================
// 1. CEMETERY BOUNDARY
// ============================================
const CEMETERY_BOUNDARY = [
  [14.6790, 121.0486],[14.6790, 121.0497],[14.6790, 121.0510],
  [14.6791, 121.0525],[14.6791, 121.0538],[14.6793, 121.0543],
  [14.6798, 121.0548],[14.6806, 121.0552],[14.6815, 121.0556],
  [14.6825, 121.0559],[14.6835, 121.0560],[14.6843, 121.0558],
  [14.6850, 121.0554],[14.6856, 121.0549],[14.6860, 121.0543],
  [14.6863, 121.0534],[14.6864, 121.0522],[14.6864, 121.0510],
  [14.6863, 121.0500],[14.6860, 121.0494],[14.6856, 121.0489],
  [14.6849, 121.0486],[14.6842, 121.0484],[14.6833, 121.0483],
  [14.6822, 121.0483],[14.6812, 121.0484],[14.6802, 121.0485],
  [14.6795, 121.0486]
];

// ============================================
// 2. GEOJSON DATA
// ============================================
const cemeteryGeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {"type":"Feature","properties":{"@id":"way/23172081","access":"private","highway":"service","name":"Lakandula Street","postal_code":1107},"geometry":{"type":"LineString","coordinates":[[121.052109,14.6834616],[121.0528491,14.6831622]]},"id":"way/23172081"},
    {"type":"Feature","properties":{"@id":"way/23172156","access":"private","highway":"service","name":"Palma Street","postal_code":1107},"geometry":{"type":"LineString","coordinates":[[121.0528325,14.6801188],[121.0532615,14.6798269],[121.053663,14.6795531],[121.0537611,14.679511],[121.0538926,14.6794726]]},"id":"way/23172156"},
    {"type":"Feature","properties":{"@id":"way/23172161","access":"private","highway":"service","name":"Himlayan Avenue","oneway":"yes","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0531003,14.6837586],[121.052879,14.6839923],[121.0525487,14.6843166],[121.0521159,14.6847812],[121.0520349,14.6848681],[121.0518444,14.68509],[121.0516987,14.6852571],[121.0515794,14.6853951],[121.0514852,14.6854927],[121.0513895,14.6855876],[121.0512587,14.6857102],[121.0511101,14.6858466],[121.0510708,14.6858831]]},"id":"way/23172161"},
    {"type":"Feature","properties":{"@id":"way/23172181","access":"private","highway":"service","name":"Lopez-Jaena Street (Road 7)","postal_code":1107},"geometry":{"type":"LineString","coordinates":[[121.0533973,14.6837746],[121.0535238,14.6838061],[121.0541584,14.6839529],[121.0550417,14.6841597]]},"id":"way/23172181"},
    {"type":"Feature","properties":{"@id":"way/23172243","access":"private","highway":"service","name":"Jacinto Avenue","postal_code":1107},"geometry":{"type":"LineString","coordinates":[[121.0503979,14.681592],[121.0501287,14.6817124],[121.0498839,14.6818219],[121.0495952,14.6819517],[121.0492928,14.6820863]]},"id":"way/23172243"},
    {"type":"Feature","properties":{"@id":"way/23172265","access":"private","highway":"service","name":"Felipe Street","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0530158,14.6804959],[121.0528325,14.6801188],[121.0526583,14.6797625],[121.0526246,14.6796985],[121.0526005,14.6796677],[121.0525715,14.6796411]]},"id":"way/23172265"},
    {"type":"Feature","properties":{"@id":"way/23172307","access":"private","highway":"service","name":"Magbanua Street (Road 8)","postal_code":1107},"geometry":{"type":"LineString","coordinates":[[121.052971,14.683417],[121.0528491,14.6831622],[121.0524662,14.6823503],[121.052207,14.6817995]]},"id":"way/23172307"},
    {"type":"Feature","properties":{"@id":"way/23172382","access":"private","highway":"service","name":"G. del Pilar Street (Road 10)","postal_code":1107},"geometry":{"type":"LineString","coordinates":[[121.053526,14.6833525],[121.0551359,14.683742]]},"id":"way/23172382"},
    {"type":"Feature","properties":{"@id":"way/23172465","access":"private","highway":"service","name":"Gabriela Silang Street (Road 9)","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0533238,14.6832157],[121.052862,14.6821679]]},"id":"way/23172465"},
    {"type":"Feature","properties":{"@id":"way/23172517","access":"private","highway":"service","postal_code":1107},"geometry":{"type":"LineString","coordinates":[[121.0506112,14.6820468],[121.0503979,14.681592],[121.0501779,14.6811389],[121.0500833,14.6809403]]},"id":"way/23172517"},
    {"type":"Feature","properties":{"@id":"way/23172536","access":"private","highway":"service","name":"Himlayan Avenue","oneway":"yes","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0534253,14.6832544],[121.0542165,14.6823502]]},"id":"way/23172536"},
    {"type":"Feature","properties":{"@id":"way/28296664","access":"private","highway":"service","name":"Bonifacio Street (Road 2)","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0510687,14.6812866],[121.0514752,14.6821367],[121.0517068,14.6826208],[121.052109,14.6834616],[121.0524917,14.6842617]]},"id":"way/28296664"},
    {"type":"Feature","properties":{"@id":"way/28296665","access":"private","highway":"service","name":"Pugad Lawin Street (Road 5)","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0548799,14.6848773],[121.0549644,14.6845026],[121.0550417,14.6841597],[121.0551359,14.683742],[121.0552768,14.6831169]]},"id":"way/28296665"},
    {"type":"Feature","properties":{"@id":"way/28296666","access":"private","highway":"service","name":"Rizal Street (Road 4)","postal_code":1107},"geometry":{"type":"LineString","coordinates":[[121.0552768,14.6831169],[121.0542926,14.6824048],[121.0542165,14.6823502],[121.0530081,14.6814408]]},"id":"way/28296666"},
    {"type":"Feature","properties":{"@id":"way/28296667","access":"private","highway":"service","name":"G. de Jesus Street (Road 3)","postal_code":1107},"geometry":{"type":"LineString","coordinates":[[121.0530081,14.6814408],[121.052207,14.6817995],[121.0514752,14.6821367]]},"id":"way/28296667"},
    {"type":"Feature","properties":{"@id":"way/28296668","access":"private","highway":"service","name":"Tandang Sora Street (Road 6)","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0525487,14.6843166],[121.0526052,14.6843572],[121.0526687,14.6843874],[121.0527518,14.6844107],[121.0533574,14.6845562],[121.0542312,14.684745],[121.0544604,14.6847924],[121.0546025,14.6848212],[121.0548799,14.6848773]]},"id":"way/28296668"},
    {"type":"Feature","properties":{"@id":"way/129506636","access":"private","highway":"service"},"geometry":{"type":"LineString","coordinates":[[121.0526583,14.6797625],[121.053037,14.6794954]]},"id":"way/129506636"},
    {"type":"Feature","properties":{"@id":"way/129506637","access":"private","highway":"service","name":"Jacinto Avenue","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0503979,14.681592],[121.0510687,14.6812866],[121.0517475,14.6809776],[121.0525558,14.6806095]]},"id":"way/129506637"},
    {"type":"Feature","properties":{"@id":"way/129506638","access":"private","highway":"service"},"geometry":{"type":"LineString","coordinates":[[121.053037,14.6794954],[121.0532615,14.6798269]]},"id":"way/129506638"},
    {"type":"Feature","properties":{"@id":"way/129593184","access":"private","highway":"service"},"geometry":{"type":"LineString","coordinates":[[121.0501525,14.6802892],[121.0502779,14.6805605],[121.0503894,14.6808026]]},"id":"way/129593184"},
    {"type":"Feature","properties":{"@id":"way/129593185","access":"private","highway":"service","postal_code":1107},"geometry":{"type":"LineString","coordinates":[[121.049041,14.6807715],[121.0495952,14.6819517]]},"id":"way/129593185"},
    {"type":"Feature","properties":{"@id":"way/129593186","access":"private","highway":"service","postal_code":1107},"geometry":{"type":"LineString","coordinates":[[121.0500833,14.6809403],[121.0503894,14.6808026],[121.0510676,14.6804975],[121.051433,14.6803331]]},"id":"way/129593186"},
    {"type":"Feature","properties":{"@id":"way/129593187","access":"private","highway":"service","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0499872,14.6806902],[121.0502779,14.6805605],[121.050945,14.6802598]]},"id":"way/129593187"},
    {"type":"Feature","properties":{"@id":"way/138544506","access":"private","highway":"service","junction":"circular","oneway":"yes","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0531003,14.6837586],[121.0530296,14.6836994],[121.0529873,14.6836366],[121.0529626,14.6835655],[121.052957,14.6834908],[121.052971,14.683417],[121.0530235,14.6833219],[121.0531076,14.6832512],[121.0532123,14.6832141],[121.0533238,14.6832157],[121.0533764,14.6832306],[121.0534253,14.6832544],[121.053497,14.6833138],[121.053526,14.6833525],[121.0535639,14.6834441],[121.0535687,14.6835427],[121.0535398,14.6836373],[121.0534805,14.6837176],[121.0533973,14.6837746],[121.0533239,14.6837984],[121.0532466,14.6838037],[121.0531705,14.6837902],[121.0531003,14.6837586]]},"id":"way/138544506"},
    {"type":"Feature","properties":{"@id":"way/143007916","access":"private","highway":"service","postal_code":1107,"source":"GPS"},"geometry":{"type":"LineString","coordinates":[[121.0501525,14.6802892],[121.0495837,14.6802898],[121.0494148,14.6801744],[121.0490352,14.6799357]]},"id":"way/143007916"},
    {"type":"Feature","properties":{"@id":"way/149265905","access":"private","highway":"service","postal_code":1107},"geometry":{"type":"LineString","coordinates":[[121.0492928,14.6820863],[121.0491288,14.6817503],[121.0489362,14.6808177]]},"id":"way/149265905"},
    {"type":"Feature","properties":{"@id":"way/165699878","access":"private","highway":"service","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.050945,14.6802598],[121.0510676,14.6804975]]},"id":"way/165699878"},
    {"type":"Feature","properties":{"@id":"way/165699882","access":"private","highway":"service","postal_code":1107,"source":"GPS"},"geometry":{"type":"LineString","coordinates":[[121.0492565,14.6804416],[121.0493432,14.6806381],[121.0494922,14.6809602],[121.0495857,14.6811659],[121.0496828,14.6813794],[121.0498839,14.6818219]]},"id":"way/165699882"},
    {"type":"Feature","properties":{"@id":"way/165709959","access":"private","highway":"service","name":"Intramuros Street (Road 1)","sidewalk":"no"},"geometry":{"type":"LineString","coordinates":[[121.0517068,14.6826208],[121.0508049,14.6828325],[121.0499063,14.6830537]]},"id":"way/165709959"},
    {"type":"Feature","properties":{"@id":"way/184364788","access":"private","highway":"footway"},"geometry":{"type":"LineString","coordinates":[[121.0499872,14.6806902],[121.0499731,14.6807458],[121.0497303,14.6808541],[121.0494922,14.6809602]]},"id":"way/184364788"},
    {"type":"Feature","properties":{"@id":"way/184364789","access":"private","highway":"footway"},"geometry":{"type":"LineString","coordinates":[[121.0500833,14.6809403],[121.0498247,14.6810575],[121.0495857,14.6811659]]},"id":"way/184364789"},
    {"type":"Feature","properties":{"@id":"way/184364790","access":"private","highway":"footway"},"geometry":{"type":"LineString","coordinates":[[121.0501779,14.6811389],[121.0499205,14.6812639],[121.0496828,14.6813794]]},"id":"way/184364790"},
    {"type":"Feature","properties":{"@id":"way/184364791","access":"private","highway":"footway"},"geometry":{"type":"LineString","coordinates":[[121.0494148,14.6801744],[121.0495827,14.6805361],[121.0497303,14.6808541],[121.0498247,14.6810575],[121.0499205,14.6812639],[121.0501287,14.6817124]]},"id":"way/184364791"},
    {"type":"Feature","properties":{"@id":"way/551671406","access":"private","highway":"service","name":"Lapu-Lapu Street","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.052051,14.6847203],[121.0521159,14.6847812],[121.0522352,14.684893],[121.052267,14.6849348],[121.0522907,14.6849835],[121.0523615,14.6851716],[121.0523864,14.6852241],[121.0524179,14.6852755],[121.052799,14.6858086],[121.0528172,14.6858271],[121.0528387,14.68584],[121.0528662,14.6858468],[121.0529001,14.6858486],[121.053834,14.6858117],[121.053862,14.6858098],[121.0538837,14.6858005],[121.0539018,14.6857849],[121.0539156,14.6857692],[121.0539642,14.685706]]},"id":"way/551671406"},
    {"type":"Feature","properties":{"@id":"way/551671407","access":"private","highway":"footway"},"geometry":{"type":"LineString","coordinates":[[121.0540704,14.6842872],[121.0541584,14.6839529]]},"id":"way/551671407"},
    {"type":"Feature","properties":{"@id":"way/551671408","access":"private","highway":"footway"},"geometry":{"type":"LineString","coordinates":[[121.0545492,14.6844026],[121.0544604,14.6847924]]},"id":"way/551671408"},
    {"type":"Feature","properties":{"@id":"way/551671409","access":"private","highway":"footway"},"geometry":{"type":"LineString","coordinates":[[121.0535181,14.6841541],[121.0540704,14.6842872],[121.0545492,14.6844026],[121.0549644,14.6845026]]},"id":"way/551671409"},
    {"type":"Feature","properties":{"@id":"way/551671410","access":"private","highway":"footway"},"geometry":{"type":"LineString","coordinates":[[121.0534217,14.6842294],[121.0533574,14.6845562]]},"id":"way/551671410"},
    {"type":"Feature","properties":{"@id":"way/551671411","access":"private","highway":"footway"},"geometry":{"type":"LineString","coordinates":[[121.0534607,14.6840601],[121.0535238,14.6838061]]},"id":"way/551671411"},
    {"type":"Feature","properties":{"@id":"way/551671412","access":"private","highway":"footway"},"geometry":{"type":"LineString","coordinates":[[121.052879,14.6839923],[121.0533688,14.6841228]]},"id":"way/551671412"},
    {"type":"Feature","properties":{"@id":"way/551671413","highway":"footway"},"geometry":{"type":"LineString","coordinates":[[121.0533479,14.6842136],[121.0534217,14.6842294],[121.053497,14.6842456],[121.0535181,14.6841541],[121.0535359,14.6840763],[121.0534607,14.6840601],[121.0533868,14.6840443],[121.0533688,14.6841228],[121.0533479,14.6842136]]},"id":"way/551671413"},
    {"type":"Feature","properties":{"@id":"way/560954183","access":"private","highway":"service","name":"Dagohoy Street","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0540271,14.6855954],[121.054047,14.6855125],[121.0542312,14.684745]]},"id":"way/560954183"},
    {"type":"Feature","properties":{"@id":"way/560954186","access":"private","highway":"service","postal_code":1107,"source":"GPS"},"geometry":{"type":"LineString","coordinates":[[121.0497889,14.679518],[121.0494148,14.6801744],[121.0492565,14.6804416]]},"id":"way/560954186"},
    {"type":"Feature","properties":{"@id":"way/560954191","access":"private","highway":"service","postal_code":1107,"source":"GPS"},"geometry":{"type":"LineString","coordinates":[[121.0494174,14.6793103],[121.0497889,14.679518]]},"id":"way/560954191"},
    {"type":"Feature","properties":{"@id":"way/560954194","access":"private","highway":"service","postal_code":1107,"source":"GPS"},"geometry":{"type":"LineString","coordinates":[[121.0490352,14.6799357],[121.0494174,14.6793103]]},"id":"way/560954194"},
    {"type":"Feature","properties":{"@id":"way/560954196","access":"private","highway":"service","postal_code":1107},"geometry":{"type":"LineString","coordinates":[[121.0489362,14.6808177],[121.049041,14.6807715],[121.0493432,14.6806381]]},"id":"way/560954196"},
    {"type":"Feature","properties":{"@id":"way/560954199","access":"private","highway":"service","postal_code":1107},"geometry":{"type":"LineString","coordinates":[[121.051433,14.6803331],[121.0514611,14.6803906],[121.0517475,14.6809776]]},"id":"way/560954199"},
    {"type":"Feature","properties":{"@id":"way/560954203","access":"private","highway":"service","postal_code":1107},"geometry":{"type":"LineString","coordinates":[[121.0525874,14.6806769],[121.0530158,14.6804959]]},"id":"way/560954203"},
    {"type":"Feature","properties":{"@id":"way/560955908","access":"private","highway":"footway"},"geometry":{"type":"LineString","coordinates":[[121.0544171,14.6855863],[121.0546025,14.6848212]]},"id":"way/560955908"},
    {"type":"Feature","properties":{"@id":"way/560955909","access":"private","highway":"footway","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.054047,14.6855125],[121.0544171,14.6855863]]},"id":"way/560955909"},
    {"type":"Feature","properties":{"@id":"way/653332557","access":"private","highway":"footway"},"geometry":{"type":"LineString","coordinates":[[121.0515049,14.6803703],[121.0518426,14.6794965]]},"id":"way/653332557"},
    {"type":"Feature","properties":{"@id":"way/653332558","access":"private","highway":"footway"},"geometry":{"type":"LineString","coordinates":[[121.0514611,14.6803906],[121.0515049,14.6803703],[121.052277,14.680013]]},"id":"way/653332558"},
    {"type":"Feature","properties":{"@id":"way/654280541","access":"private","highway":"service","name":"Himlayan Avenue","oneway":"yes","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0510029,14.685813],[121.0510427,14.6857769],[121.0511884,14.6856448],[121.0513194,14.6855236],[121.0514136,14.6854313],[121.0515052,14.6853374],[121.0516263,14.6852005],[121.051794,14.6850111],[121.0519644,14.6848185],[121.052051,14.6847203],[121.0524917,14.6842617],[121.0530296,14.6836994]]},"id":"way/654280541"},
    {"type":"Feature","properties":{"@id":"way/889396882","access":"private","highway":"service","service":"driveway","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0520349,14.6848681],[121.0519644,14.6848185],[121.0516928,14.6846997],[121.0516651,14.6846637],[121.0516555,14.684639],[121.0516406,14.6845947],[121.0516119,14.6845782],[121.0515608,14.6845659],[121.0512936,14.6845195]]},"id":"way/889396882"},
    {"type":"Feature","properties":{"@id":"way/897827837","access":"private","highway":"service","oneway":"yes"},"geometry":{"type":"LineString","coordinates":[[121.0542926,14.6824048],[121.053497,14.6833138]]},"id":"way/897827837"},
    {"type":"Feature","properties":{"@id":"way/902575121","access":"private","highway":"service","name":"Paterno Street","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0527706,14.6810688],[121.0525874,14.6806769],[121.0525558,14.6806095],[121.052277,14.680013],[121.0522503,14.679956]]},"id":"way/902575121"},
    {"type":"Feature","properties":{"@id":"way/1099004986","highway":"service","name":"Himlayan Road 1","sidewalk":"no"},"geometry":{"type":"LineString","coordinates":[[121.0499063,14.6830537],[121.049864,14.683062]]},"id":"way/1099004986"},
    {"type":"Feature","properties":{"@id":"way/1258481620","access":"private","highway":"service","name":"Gabriela Silang Street (Road 9)","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.052862,14.6821679],[121.0524662,14.6823503]]},"id":"way/1258481620"},
    {"type":"Feature","properties":{"@id":"way/1258481621","access":"private","highway":"service","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0524917,14.6842617],[121.0525487,14.6843166]]},"id":"way/1258481621"},
    {"type":"Feature","properties":{"@id":"way/1258481622","access":"private","highway":"service","name":"Paterno Street","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0514751,14.6816786],[121.0521725,14.6813465],[121.0527706,14.6810688]]},"id":"way/1258481622"},
    {"type":"Feature","properties":{"@id":"way/1258481623","access":"private","highway":"service","junction":"circular","oneway":"yes","surface":"concrete"},"geometry":{"type":"LineString","coordinates":[[121.0539756,14.685601],[121.0539561,14.6856168],[121.0539442,14.6856386],[121.0539415,14.685663],[121.0539485,14.6856867],[121.0539642,14.685706],[121.0539872,14.6857187],[121.0540135,14.6857217],[121.0540389,14.6857145],[121.0540595,14.6856984],[121.0540719,14.6856757],[121.0540742,14.6856502],[121.0540661,14.6856258],[121.0540488,14.6856064],[121.0540271,14.6855954],[121.0539997,14.6855934],[121.0539756,14.685601]]},"id":"way/1258481623"}
  ]
};

// ============================================
// 3. GLOBALS
// ============================================
let map, currentBasemap;
let namedRoadLayer, unnamedRoadLayer, footwayLayer, labelsLayer;
let highlightLayer  = null;
let boundaryLayers  = [];
let searchFocusActive = false;
let toastTimeout    = null;

let namedRoadCount   = 0;
let unnamedRoadCount = 0;
let footwayCount     = 0;

// ============================================
// 4. MAP INITIALIZATION
// ============================================
function initMap() {
  const centerLat = CEMETERY_BOUNDARY.reduce((s, c) => s + c[0], 0) / CEMETERY_BOUNDARY.length;
  const centerLng = CEMETERY_BOUNDARY.reduce((s, c) => s + c[1], 0) / CEMETERY_BOUNDARY.length;

  map = L.map('map', {
    center: [centerLat, centerLng],
    zoom: 17,
    zoomControl: true,
    maxZoom: 22,
    minZoom: 14
  });

  map.zoomControl.setPosition('bottomleft');

  currentBasemap = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { attribution: '© OpenStreetMap contributors', maxZoom: 22 }
  ).addTo(map);

  highlightLayer = L.layerGroup().addTo(map);

  drawBoundary();
  loadGeoJSONLayers();
  map.fitBounds(L.latLngBounds(CEMETERY_BOUNDARY), { padding: [60, 60] });

  // Update dim overlay on any map movement or resize
  map.on('move',    updateDimOverlay);
  map.on('moveend', updateDimOverlay);
  map.on('zoom',    updateDimOverlay);
  map.on('zoomend', updateDimOverlay);
  map.on('resize',  updateDimOverlay);

  // Initial draw after a short delay to let the map fully render
  setTimeout(updateDimOverlay, 100);

  setupEventListeners();
  updateCounts();

  showToast('Himlayang Pilipino – Guest Map View');
}

// ============================================
// 5. BOUNDARY RING
// ============================================
function drawBoundary() {
  // Subtle glow halo
  const glow = L.polygon(CEMETERY_BOUNDARY, {
    fill: false,
    color: '#3b82f6',
    weight: 18,
    opacity: 0.08,
    interactive: false
  }).addTo(map);

  // Crisp boundary ring
  const ring = L.polygon(CEMETERY_BOUNDARY, {
    fill: false,
    color: '#2563eb',
    weight: 2.5,
    opacity: 0.9,
    interactive: false
  }).addTo(map);

  boundaryLayers = [glow, ring];
}

// ============================================
// 6. DIM OVERLAY — OUTSIDE BOUNDARY
//
// Uses the existing #mapDimOverlay div (fixed,
// inset: 0, z-index: 400 – above tiles but below
// UI controls). Rebuilds a single inline SVG with
// an evenodd clip that punches a transparent
// "window" through the dark fill, precisely
// aligned to the current map view on every move.
// ============================================
function updateDimOverlay() {
  const overlayDiv = document.getElementById('mapDimOverlay');
  if (!overlayDiv || !map) return;

  const size = map.getSize();
  const W = size.x;
  const H = size.y;

  // Project each boundary lat/lng to pixel coordinates in the map container
  const pts = CEMETERY_BOUNDARY.map(ll =>
    map.latLngToContainerPoint(L.latLng(ll[0], ll[1]))
  );

  // Build a proper SVG path for the park boundary polygon
  // M x,y L x,y L x,y ... Z
  const parkPath = pts
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    .join(' ') + ' Z';

  // Build the full-screen outer rect path
  const outerPath = `M0,0 L${W},0 L${W},${H} L0,${H} Z`;

  // Combined evenodd path: outer rect first, then park polygon.
  // evenodd rule means the park interior is "subtracted" = transparent hole.
  const clipPath = `${outerPath} ${parkPath}`;

  // Points string for the glow stroke polygon
  const polyPoints = pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

  overlayDiv.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${W}"
    height="${H}"
    style="display:block;pointer-events:none;"
  >
    <!-- Dark overlay covering everything OUTSIDE the park boundary -->
    <path
      d="${clipPath}"
      fill="rgba(5,10,20,0.75)"
      fill-rule="evenodd"
    />
    <!-- Soft blue glow around the boundary edge -->
    <polygon
      points="${polyPoints}"
      fill="none"
      stroke="rgba(96,165,250,0.4)"
      stroke-width="4"
    />
  </svg>`;
}

function hideDimOverlay() {
  const overlayDiv = document.getElementById('mapDimOverlay');
  if (overlayDiv) overlayDiv.innerHTML = '';
}

function showDimOverlay() {
  updateDimOverlay();
}

// ============================================
// 7. GEOJSON LAYERS
// ============================================
function loadGeoJSONLayers() {
  const namedFeatures   = [];
  const unnamedFeatures = [];
  const footwayFeatures = [];

  cemeteryGeoJSON.features.forEach(f => {
    const hw = f.properties.highway || '';
    if (hw === 'footway')     footwayFeatures.push(f);
    else if (f.properties.name) namedFeatures.push(f);
    else                        unnamedFeatures.push(f);
  });

  namedRoadCount   = namedFeatures.length;
  unnamedRoadCount = unnamedFeatures.length;
  footwayCount     = footwayFeatures.length;

  // Named and unnamed roads are hidden by default.
  // They only appear when a viewer searches for a specific road.
  namedRoadLayer = L.geoJSON(
    { type: 'FeatureCollection', features: namedFeatures },
    {
      style: f => getNamedRoadStyle(f),
      onEachFeature: (feature, layer) => bindRoadEvents(layer, feature, getNamedRoadStyle)
    }
  ); // NOT added to map — hidden by default

  unnamedRoadLayer = L.geoJSON(
    { type: 'FeatureCollection', features: unnamedFeatures },
    {
      style: f => getUnnamedRoadStyle(f),
      onEachFeature: (feature, layer) => bindRoadEvents(layer, feature, getUnnamedRoadStyle)
    }
  ); // NOT added to map — hidden by default

  footwayLayer = L.geoJSON(
    { type: 'FeatureCollection', features: footwayFeatures },
    {
      style: () => footwayStyle(),
      onEachFeature: (feature, layer) => {
        layer.on('click',     () => { showRoadInfo(feature); highlightRoad(layer, feature); });
        layer.on('mouseover', () => { if (!layer._highlighted) layer.setStyle({ weight: 4, opacity: 1 }); });
        layer.on('mouseout',  () => { if (!layer._highlighted) layer.setStyle(footwayStyle()); });
      }
    }
  ).addTo(map);

  labelsLayer = L.layerGroup();
  namedFeatures.forEach(feature => {
    const name = feature.properties.name;
    if (!name) return;
    const coords   = feature.geometry.coordinates;
    const midCoord = coords[Math.floor(coords.length / 2)];
    labelsLayer.addLayer(L.marker([midCoord[1], midCoord[0]], {
      icon: L.divIcon({
        className: 'road-label',
        html: name,
        iconSize: [0, 0],
        iconAnchor: [0, 0]
      }),
      interactive: false
    }));
  });
  // Labels also hidden by default (no roads shown = no labels needed)
  // labelsLayer is added to map only when a road is focused via search

  // Sync the layer panel checkboxes to reflect hidden state
  document.getElementById('toggleNamedRoads').checked   = false;
  document.getElementById('toggleUnnamedRoads').checked = false;
  document.getElementById('toggleLabels').checked       = false;
}

function bindRoadEvents(layer, feature, styleFn) {
  layer.on('click', () => { showRoadInfo(feature); highlightRoad(layer, feature); });
  layer.on('mouseover', () => {
    if (!layer._highlighted) layer.setStyle({ weight: 7, opacity: 1 });
  });
  layer.on('mouseout', () => {
    if (!layer._highlighted) layer.setStyle(styleFn(feature));
  });
}

// ============================================
// 8. STYLES
// ============================================
function getNamedRoadStyle(f) {
  const p = f.properties;
  if (p.junction === 'circular') return { color: '#8b5cf6', weight: 4.5, opacity: 0.9, lineJoin: 'round' };
  if (p.oneway   === 'yes')      return { color: '#ef4444', weight: 4.5, opacity: 0.9, lineJoin: 'round' };
  return                                { color: '#1d4ed8', weight: 4.5, opacity: 0.9, lineJoin: 'round' };
}

function getUnnamedRoadStyle(f) {
  const p = f.properties;
  if (p.junction === 'circular') return { color: '#8b5cf6', weight: 3, opacity: 0.75 };
  if (p.oneway   === 'yes')      return { color: '#ef4444', weight: 3, opacity: 0.7 };
  return                                { color: '#94a3b8', weight: 2.5, opacity: 0.7 };
}

function footwayStyle() {
  return { color: '#f59e0b', weight: 2.5, opacity: 0.85, dashArray: '6, 4' };
}

// ============================================
// 9. ROAD INFO PANEL
// ============================================
function showRoadInfo(feature) {
  const p    = feature.properties;
  const name = p.name || 'Unnamed Road';
  const isFootway  = p.highway === 'footway';
  const isOneway   = p.oneway   === 'yes';
  const isCircular = p.junction === 'circular';
  const surface    = p.surface  || 'Not specified';
  const postal     = p.postal_code || '—';
  const access     = p.access   || '—';
  const osmId      = p['@id']   || '—';

  const coords = feature.geometry.coordinates;
  let lengthM  = 0;
  for (let i = 1; i < coords.length; i++) {
    lengthM += haversineDistance(
      coords[i-1][1], coords[i-1][0],
      coords[i][1],   coords[i][0]
    );
  }

  document.getElementById('infoTitle').textContent = name;

  let badges = '';
  if (isFootway)  badges += '<span class="badge badge-footway">Footway</span>';
  else            badges += '<span class="badge badge-road">Service Road</span>';
  if (isOneway)   badges += '<span class="badge badge-oneway">One-way</span>';
  if (isCircular) badges += '<span class="badge badge-circular">Circular</span>';
  if (surface === 'concrete') badges += '<span class="badge badge-concrete">Concrete</span>';

  document.getElementById('infoPanelBody').innerHTML = `
    <div class="info-badges">${badges}</div>

    <div class="info-section">
      <div class="info-section-title">Road Information</div>
      <div class="info-row"><span class="info-row-label">Name</span><span class="info-row-value">${name}</span></div>
      <div class="info-row"><span class="info-row-label">Type</span><span class="info-row-value">${isFootway ? 'Footway / Path' : 'Service Road'}</span></div>
      <div class="info-row"><span class="info-row-label">Surface</span><span class="info-row-value">${surface}</span></div>
      <div class="info-row"><span class="info-row-label">One-way</span><span class="info-row-value">${isOneway ? 'Yes →' : 'No'}</span></div>
      <div class="info-row"><span class="info-row-label">Junction</span><span class="info-row-value">${isCircular ? 'Circular' : 'Standard'}</span></div>
      <div class="info-row"><span class="info-row-label">Access</span><span class="info-row-value">${access}</span></div>
    </div>

    <div class="info-section">
      <div class="info-section-title">Measurements</div>
      <div class="info-row"><span class="info-row-label">Approx. Length</span><span class="info-row-value">${lengthM.toFixed(1)} m</span></div>
      <div class="info-row"><span class="info-row-label">Coordinate Points</span><span class="info-row-value">${coords.length}</span></div>
    </div>

    <div class="info-section">
      <div class="info-section-title">Metadata</div>
      <div class="info-row"><span class="info-row-label">Postal Code</span><span class="info-row-value">${postal}</span></div>
      <div class="info-row"><span class="info-row-label">OSM ID</span><span class="info-row-value" style="font-size:0.74rem">${osmId}</span></div>
    </div>

    <div class="info-upgrade-block">
      <div class="info-upgrade-icon">🔒</div>
      <p>Burial plot details and deceased records are available to registered users only.</p>
      <a href="Login.php">Sign In for Full Access</a>
    </div>
  `;

  const panel = document.getElementById('infoPanel');
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
}

function closeInfoPanel() {
  const panel = document.getElementById('infoPanel');
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  clearHighlight();
}

// ============================================
// 10. HIGHLIGHT
// ============================================
function highlightRoad(layer, feature) {
  clearHighlight();
  const coords = feature.geometry.coordinates.map(c => [c[1], c[0]]);
  highlightLayer.addLayer(
    L.polyline(coords, { color: '#10b981', weight: 9, opacity: 0.5 })
  );
  layer._highlighted = true;
  highlightLayer._activeLayer = layer;
}

function clearHighlight() {
  highlightLayer.clearLayers();
  if (highlightLayer._activeLayer) {
    highlightLayer._activeLayer._highlighted = false;
    highlightLayer._activeLayer = null;
  }
}

// ============================================
// 11. SEARCH
// ============================================
function setupSearch() {
  const wrapper   = document.getElementById('searchWrapper');
  const toggleBtn = document.getElementById('searchToggleBtn');
  const clearBtn  = document.getElementById('searchClearBtn');
  const input     = document.getElementById('searchInput');
  const dropdown  = document.getElementById('searchDropdown');

  const seen  = {};
  const items = [];
  cemeteryGeoJSON.features.forEach(f => {
    if (f.properties.name && !seen[f.properties.name]) {
      seen[f.properties.name] = true;
      items.push({
        name:    f.properties.name,
        type:    f.properties.highway === 'footway' ? 'Footway' : 'Road',
        feature: f
      });
    }
  });

  toggleBtn.addEventListener('click', () => {
    wrapper.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.getElementById('searchExpanded').setAttribute('aria-hidden', 'false');
    setTimeout(() => input.focus(), 240);
  });

  function closeSearch() {
    wrapper.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.getElementById('searchExpanded').setAttribute('aria-hidden', 'true');
    dropdown.classList.remove('active');
    dropdown.innerHTML = '';
    input.value = '';
  }

  clearBtn.addEventListener('click', closeSearch);

  input.addEventListener('input', function () {
    const q = this.value.trim().toLowerCase();
    if (!q) { dropdown.classList.remove('active'); dropdown.innerHTML = ''; return; }

    const matches = items.filter(i => i.name.toLowerCase().includes(q));

    if (!matches.length) {
      dropdown.innerHTML = '<div class="search-no-results">No roads found</div>';
      dropdown.classList.add('active');
      return;
    }

    dropdown.innerHTML = matches.map(item => {
      const icon = item.type === 'Footway' ? '🚶' : '🛣️';
      return `<div class="search-item" data-name="${item.name}">
        <span class="search-item-icon">${icon}</span>
        <span class="search-item-name">${item.name}</span>
        <span class="search-item-type">${item.type}</span>
      </div>`;
    }).join('');

    dropdown.classList.add('active');

    dropdown.querySelectorAll('.search-item').forEach(el => {
      el.addEventListener('click', function () {
        focusOnRoad(this.dataset.name);
        input.value = this.dataset.name;
        dropdown.classList.remove('active');
      });
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrapper')) {
      dropdown.classList.remove('active');
    }
  });
}

function focusOnRoad(name) {
  clearHighlight();

  // Hide all road layers first — only the searched road will be shown
  setLayerVisible(namedRoadLayer,   false);
  setLayerVisible(unnamedRoadLayer, false);
  setLayerVisible(labelsLayer,      false);

  // Build a temporary single-road layer for the matched road
  const matchedFeatures = cemeteryGeoJSON.features.filter(
    f => f.properties.name === name
  );

  const allCoords = [];
  matchedFeatures.forEach(feature => {
    const coords = feature.geometry.coordinates.map(c => [c[1], c[0]]);
    allCoords.push(...coords);
    // Draw the highlighted road in green
    highlightLayer.addLayer(
      L.polyline(coords, { color: '#10b981', weight: 6, opacity: 0.95 })
    );
  });

  if (allCoords.length) {
    map.fitBounds(L.latLngBounds(allCoords), { padding: [100, 100], maxZoom: 19 });
    enterSearchFocus(name);
    showToast('Showing: ' + name);
  }
}

function enterSearchFocus(name) {
  searchFocusActive = true;
  document.getElementById('searchFocusName').textContent = name;
  document.getElementById('searchFocusBar').classList.add('active');
}

function exitSearchFocus() {
  searchFocusActive = false;
  document.getElementById('searchFocusBar').classList.remove('active');
  document.getElementById('searchInput').value = '';
  clearHighlight();

  // Keep roads hidden — return to default clean state
  setLayerVisible(namedRoadLayer,   false);
  setLayerVisible(unnamedRoadLayer, false);
  setLayerVisible(labelsLayer,      false);
  document.getElementById('toggleNamedRoads').checked   = false;
  document.getElementById('toggleUnnamedRoads').checked = false;
  document.getElementById('toggleLabels').checked       = false;

  map.fitBounds(L.latLngBounds(CEMETERY_BOUNDARY), { padding: [60, 60] });
  showToast('Search cleared');
}

// ============================================
// 12. LAYER VISIBILITY
// ============================================
function toggleVisibilityPanel() {
  const panel = document.getElementById('visibilityPanel');
  const isActive = panel.classList.toggle('active');
  panel.setAttribute('aria-hidden', !isActive);
}

function setLayerVisible(layer, visible) {
  if (!layer) return;
  if (visible  && !map.hasLayer(layer)) map.addLayer(layer);
  if (!visible && map.hasLayer(layer))  map.removeLayer(layer);
}

function toggleBoundary(visible) {
  boundaryLayers.forEach(l => {
    if (visible  && !map.hasLayer(l)) map.addLayer(l);
    if (!visible && map.hasLayer(l))  map.removeLayer(l);
  });
  // Also show/hide the dim overlay when boundary is toggled
  if (visible) {
    showDimOverlay();
  } else {
    hideDimOverlay();
  }
}

function showAllLayers() {
  ['toggleBoundary','toggleNamedRoads','toggleUnnamedRoads','toggleFootways','toggleLabels']
    .forEach(id => { document.getElementById(id).checked = true; });
  applyAllToggles();
  showToast('All layers visible');
}

function hideAllLayers() {
  ['toggleBoundary','toggleNamedRoads','toggleUnnamedRoads','toggleFootways','toggleLabels']
    .forEach(id => { document.getElementById(id).checked = false; });
  applyAllToggles();
  showToast('All layers hidden');
}

function applyAllToggles() {
  toggleBoundary(document.getElementById('toggleBoundary').checked);
  setLayerVisible(namedRoadLayer,   document.getElementById('toggleNamedRoads').checked);
  setLayerVisible(unnamedRoadLayer, document.getElementById('toggleUnnamedRoads').checked);
  setLayerVisible(footwayLayer,     document.getElementById('toggleFootways').checked);
  setLayerVisible(labelsLayer,      document.getElementById('toggleLabels').checked);
}

// ============================================
// 13. BASEMAP SWITCHING
// ============================================
function setupBasemapSwitcher() {
  const tiles = {
    osm:       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                  { attribution: '© OpenStreetMap', maxZoom: 22 }),
    satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                  { attribution: '© Esri', maxZoom: 22 }),
    topo:      L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
                  { attribution: '© OpenTopoMap', maxZoom: 22 })
  };

  document.querySelectorAll('input[name="basemap"]').forEach(radio => {
    radio.addEventListener('change', function () {
      map.removeLayer(currentBasemap);
      currentBasemap = tiles[this.value];
      currentBasemap.addTo(map);
      currentBasemap.bringToBack();
      showToast('Basemap: ' + this.value.charAt(0).toUpperCase() + this.value.slice(1));
    });
  });
}

// ============================================
// 14. LOCKED MODAL
// ============================================
function showLockedModal(title, desc) {
  document.getElementById('lockedModalTitle').textContent = title;
  document.getElementById('lockedModalDesc').textContent  = desc;
  const overlay = document.getElementById('lockedModalOverlay');
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
}

function closeLockedModal() {
  const overlay = document.getElementById('lockedModalOverlay');
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
}

// ============================================
// 15. RESET
// ============================================
function resetView() {
  map.fitBounds(L.latLngBounds(CEMETERY_BOUNDARY), { padding: [60, 60] });
  clearHighlight();
  closeInfoPanel();
  exitSearchFocus();
  showAllLayers();
  showToast('Map view reset');
}

// ============================================
// 16. TOAST
// ============================================
function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = message;
  toast.classList.add('show');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================
// 17. UTILITIES
// ============================================
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R    = 6371000;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a    = Math.sin(dLat/2)**2 +
               Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function toRad(deg) { return deg * Math.PI / 180; }

function updateCounts() {
  document.getElementById('namedRoadCount').textContent   = namedRoadCount;
  document.getElementById('unnamedRoadCount').textContent = unnamedRoadCount;
  document.getElementById('footwayCount').textContent     = footwayCount;
}

// ============================================
// 18. EVENT LISTENERS
// ============================================
function setupEventListeners() {
  document.getElementById('resetBtn').addEventListener('click', resetView);
  document.getElementById('visibilityToggleBtn').addEventListener('click', toggleVisibilityPanel);
  document.getElementById('visibilityCloseBtn').addEventListener('click', toggleVisibilityPanel);

  document.getElementById('toggleBoundary').addEventListener('change',    e => toggleBoundary(e.target.checked));
  document.getElementById('toggleNamedRoads').addEventListener('change',  e => setLayerVisible(namedRoadLayer,   e.target.checked));
  document.getElementById('toggleUnnamedRoads').addEventListener('change',e => setLayerVisible(unnamedRoadLayer, e.target.checked));
  document.getElementById('toggleFootways').addEventListener('change',    e => setLayerVisible(footwayLayer,     e.target.checked));
  document.getElementById('toggleLabels').addEventListener('change',      e => setLayerVisible(labelsLayer,      e.target.checked));

  document.getElementById('showAllBtn').addEventListener('click', showAllLayers);
  document.getElementById('hideAllBtn').addEventListener('click', hideAllLayers);

  document.getElementById('infoPanelCloseBtn').addEventListener('click', closeInfoPanel);
  document.getElementById('exitSearchBtn').addEventListener('click', exitSearchFocus);

  document.getElementById('burialPlotBtn').addEventListener('click', () =>
    showLockedModal('Burial Plots', 'View and locate burial plots by section. Sign in to access this feature.')
  );
  document.getElementById('recordsBtn').addEventListener('click', () =>
    showLockedModal('Deceased Records', 'Search records by name, date, or lot number. Sign in to access.')
  );
  document.getElementById('navBtn').addEventListener('click', () =>
    showLockedModal('Navigation', 'Get step-by-step directions within the park. Sign in to access this feature.')
  );

  document.getElementById('lockedModalCancel').addEventListener('click', closeLockedModal);
  document.getElementById('lockedModalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('lockedModalOverlay')) closeLockedModal();
  });

  map.on('click', () => {
    if (document.getElementById('infoPanel').classList.contains('open')) return;
    clearHighlight();
  });

  setupSearch();
  setupBasemapSwitcher();

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeInfoPanel();
      closeLockedModal();
      document.getElementById('searchDropdown').classList.remove('active');
      document.getElementById('visibilityPanel').classList.remove('active');
    }
  });
}

// ============================================
// 19. BOOT
// ============================================
document.addEventListener('DOMContentLoaded', initMap);