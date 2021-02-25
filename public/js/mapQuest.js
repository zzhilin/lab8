function initMap() {
	// add your code here
	L.mapquest.key = 'vPajY8xT4xWi3BiihozMBL10F8v0TaX7';
	var map = L.mapquest.map('map', {
		center: [ 32.87868246659994, -117.23589673139391 ],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});
	L.marker([ 32.87868246659994, -117.23589673139391 ]).addTo(map);
}
