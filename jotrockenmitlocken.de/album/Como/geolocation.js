
var mymap = L.map('mapid').setView([46.025345, 9.263727], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 16,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiY2F0YWdseXBoaXMxMiIsImEiOiJjazR1ZnV5bDgwZGx2M2dvOHV1MHM1MjY1In0.HK56k6UQakSOyfGylPE42g'
}).addTo(mymap);

var marker = L.marker([46.025345, 9.263727]).addTo(mymap);
marker.bindPopup("<b>Hier liegt der Comer See!</b><br>").openPopup();

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
        
function zeichnePosition(position) {
    var marker_position = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap);
    marker_position.bindPopup("<b>Hier bist du aktuell :)<br>").openPopup();
    /**
     * line between current position and comer sea
     */
    var polygon = L.polygon([
        [position.coords.latitude, position.coords.longitude],
        [46.025345, 9.263727],
    ]).addTo(mymap);
}

function zeigeFehler(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "Benutzer lehnte Standortabfrage ab."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Standortdaten sind nicht verfügbar."
            break;
        case error.TIMEOUT:
            x.innerHTML = "Die Standortabfrage dauerte zu lange (Time-out)."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "unbekannter Fehler."
            break;
    }
}

var button = document.getElementById('Geopositioning');
button.addEventListener('click', ermittlePosition);

function ermittlePosition() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(zeichnePosition, zeigeFehler, options);
    }
}