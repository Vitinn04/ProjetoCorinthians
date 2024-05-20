var map = L.map('map').setView([-23.545531, -46.473373], 16);
var layer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {});
layer.addTo(map);

var neoQuimicaMapa = L.marker([-23.545531, -46.473373]);
neoQuimicaMapa.addTo(map);

var parqueSãoJorgeMapa = L.marker([-23.52667, -46.56833]);
parqueSãoJorgeMapa.addTo(map);

var drJoaquimGrava = L.marker([-23.49167, -46.50833]);
drJoaquimGrava.addTo(map);

var yokohama = L.marker([35.50999, 139.60638]);
yokohama.addTo(map);

function setViewNeoQuimica() {
    map.setView([-23.545531, -46.473373], 16);
}

function setViewParqueSaoJorge() {
    map.setView([-23.52667, -46.56833], 16);
}

function setViewDrJoaquimGrava() {
    map.setView([-23.49167, -46.50833], 16);
}

function setViewYokohama() {
    map.setView([35.50999, 139.60638], 16);
}
