// ------------------------------------- //
// --- Munddi App - Google Map --------- //

// NE: 'Lat: -21.7996 Lon: -44.8562'
// SW: 'Lat: -24.5814 Lon: -49.1860'

let storeList  = [];
let markerList = [];
let urlRequest = 'https://munddi.com/dev/pdvs?ne_lat=-21.79&ne_lng=-44.85&sw_lat=-24.58&sw_lng=-49.18';

fetch(urlRequest)
	.then((resp) => resp.json())
	.then(function(data) {
		storeList = data.data;
		console.log( data.data )
	})
	.catch(function(error) { console.log(error) });

function initMap() {
	const center = new google.maps.LatLng( -23.185, -47.021 );
	const map = new google.maps.Map(document.querySelector('section.app-google-map'), {
		zoom	  : 8		 	,
		center	  : center		,
		mapTypeId : 'roadmap'	,
	});

	const marker = new google.maps.Marker({
		position: center,
		map: map,
	});

	return storeList.map( (s,i) => {
		markerList[i] = new google.maps.Marker({
			map: map,
			position: {
				lng: Number(s.lng),
				lat: Number(s.lat),
			},
		});
	});
};