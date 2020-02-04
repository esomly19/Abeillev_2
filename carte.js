// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 48.660899;
var lon = 6.154961;
var macarte = null;
// Fonction d'initialisation de la carte

function initMap() {
  // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
  macarte = L.map("map").setView([lat, lon], 11);

  // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
  L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
    // Il est toujours bien de laisser le lien vers la source des données
    attribution:
      'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 15.5,
    maxZoom: 20
  }).addTo(macarte);
  var vous;
  navigator.geolocation.getCurrentPosition(function(position) {
    vous = L.circle([position.coords.latitude, position.coords.longitude], {
      color: "#fcba03",
      fillColor: "#fcba03",
      fillOpacity: 0.5,
      radius: 15
    }).addTo(macarte);
    vous.bindPopup("Vous êtes ici");
  });
  var polygon1 = L.circle([48.662497, 6.153913], {
    color: "#515e73",
    fillColor: "#515e73",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon2 = L.circle([48.662043, 6.154407], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon21 = L.circle([48.66205, 6.154901], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon3 = L.circle([48.661859, 6.154096], {
    color: "#252aba",
    fillColor: "#252aba",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon4 = L.circle([48.661388, 6.153962], {
    color: "#8543cc",
    fillColor: "#8543cc",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon5 = L.circle([48.661696, 6.153441], {
    color: "#8543cc",
    fillColor: "#8543cc",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon6 = L.circle([48.66103, 6.153022], {
    color: "#2a094d",
    fillColor: "#2a094d",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon7 = L.circle([48.660336, 6.152765], {
    color: "#2a094d",
    fillColor: "#2a094d",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon8 = L.circle([48.659843, 6.154466], {
    color: "#4d1709",
    fillColor: "#4d1709",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon9 = L.circle([48.659496, 6.153683], {
    color: "#4d1709",
    fillColor: "##4d1709",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon10 = L.circle([48.660382, 6.154939], {
    color: "#4d1709",
    fillColor: "#4d1709",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon11 = L.circle([48.662755, 6.157256], {
    color: "#4d090a",
    fillColor: "#4d090a",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon111 = L.circle([48.661495, 6.156945], {
    color: "#4d090a",
    fillColor: "#4d090a",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon12 = L.circle([48.65956, 6.155018], {
    color: "#4d090a",
    fillColor: "#4d090a",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon13 = L.circle([48.661984, 6.156366], {
    color: "#34d090a",
    fillColor: "#4d090a",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon14 = L.circle([48.661204, 6.155411], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon15 = L.circle([48.661984, 6.156516], {
    color: "#0a4d09",
    fillColor: "#0a4d09",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon16 = L.circle([48.6629, 6.155765], {
    color: "#44877c",
    fillColor: "#44877c",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon17 = L.circle([48.661558, 6.1554], {
    color: "#876644",
    fillColor: "#876644",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon18 = L.circle([48.659968, 6.154557], {
    color: "#5d8744",
    fillColor: "#5d8744",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  var polygon19 = L.circle([48.65906, 6.156322], {
    color: "#876644",
    fillColor: "#876644",
    fillOpacity: 0.5,
    radius: 15
  }).addTo(macarte);
  polygon1.bindPopup("Les serres tropicales");
  polygon2.bindPopup("Le pinetum");
  polygon21.bindPopup("Le pinetum");
  polygon3.bindPopup("Le jardin au naturel");
  polygon4.bindPopup("Collection historique");
  polygon5.bindPopup("Les obtentions horticoles lorraines");
  polygon6.bindPopup("Le potager ornemental");
  polygon7.bindPopup("Le secteur écologique");
  polygon8.bindPopup("L'apium");
  polygon9.bindPopup("Le verger conservatoire");
  polygon10.bindPopup("La collection systématique");
  polygon11.bindPopup("L'arboretum");
  polygon111.bindPopup("L'arboretum");
  polygon12.bindPopup("Terre de bruyère");
  polygon13.bindPopup("La bambouseraie");
  polygon14.bindPopup("Collection ornementale");
  polygon15.bindPopup("Les plantes médécinales");
  polygon16.bindPopup("La roseraie");
  polygon17.bindPopup("Le parcours des espèces exotiques envahissantes");
  polygon18.bindPopup("L'observatoire des pollens");
  polygon19.bindPopup("La prairie lorraine");
}
