
L.mapbox.accessToken = 'pk.eyJ1Ijoia2F0aGFyaW5lY2hlbiIsImEiOiI4NmQ4NjQ1MGM1NmIzNGZkYmY2NWI4MWM2ZWUyZmI1YyJ9.hGVYN433o3nTOVrbiPlFqw';

var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([45.510878, -122.670472], 13);

L.marker([45.524164, -122.661409]).addTo(map)
  .bindPopup("<b>Cup and Bar</b><br />Awesome coffee and chocolate place").openPopup();

L.marker([45.541811, -122.696977]).addTo(map)
  .bindPopup("<b>Ristretto Roasters</b><br />Awesome coffee").openPopup();