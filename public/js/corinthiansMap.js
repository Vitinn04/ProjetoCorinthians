nome_usuario.innerHTML = sessionStorage.NOME_USUARIO;

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

function setViewMap() {
    var idMapa = selectMapa.value;
    if (idMapa == "1") {
        map.setView([-23.545531, -46.473373], 16);
    } else if (idMapa == "2"){
        map.setView([-23.52667, -46.56833], 16);
    } else if (idMapa == "3"){
        map.setView([-23.49167, -46.50833], 16);
    } else if (idMapa == "4"){
        map.setView([35.50999, 139.60638], 16);
    } else if (idMapa == "5"){
        map.setView([-22.09857, -51.41506], 16);
    } else if (idMapa == "6"){
        map.setView([-22.91216, -43.23119], 16);
    }
}
