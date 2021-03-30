// -------------------------------------- //
// --- Munddi App - Google Map ---------- //

// NE: 'Lat: -21.7996 Lon: -44.8562'
// SW: 'Lat: -24.5814 Lon: -49.1860'

let marker;
let storeList  = [];
let urlRequest = 'https://munddi.com/dev/pdvs?ne_lat=10&ne_lng=-30&sw_lat=-30&sw_lng=-70';

// --- Leaflet Map Render Function ------ //
var map = L.map(document.querySelector('section.app-google-map'), {
	center  	: [ -23.185, -44.821 ],
    zoom		: 8 ,
});

// --- Leaflet Tile Layer Add ----------- //
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);

// --- Munddi Stores Request ------------ //
fetch(urlRequest)
	.then((resp) => resp.json())
	.then(function(data) {
		let r = data.data;
		for (let i=0; i < r.length; i++) {
			marker = new L.marker([
				r[i].lat,
				r[i].lng
			]).addTo(map)
			.on('mousedown',onClick);
		};
	})
	.catch(function(error) { console.log(error) });

// --- Marker Click Function ------------ //
function onClick (e) {
	let data = e.latlng;
	let url = `https://www.google.com/maps/search/?api=1&query=${data.lat},${data.lng}`;

	return window.location = url;
};