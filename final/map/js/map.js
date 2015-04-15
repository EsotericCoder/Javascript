//William Kim
//williamkim1@my.scmccd.edu
//CIS114
//map.js
//this program uses Google Maps API
//12/18/2014



function initialize() {
    var mapOptions = {
    	center: { lat: 37.5654147, lng: -122.3223457},
    	zoom: 17
    };

    /**
 	* Data for the markers consisting of a name, a LatLng and a zIndex for
	 * the order in which these markers should display on top of each
	 * other.
	 */
	var restaurants = [
		['Curry Up Now', 37.566888, -122.323571, 4],
		['Little Sheep Mongolian Hot Pot', 37.565677, -122.323320, 5],
		['Pancho Villa Taqueria', 37.565003, -122.321673, 3],
		['Sushi Sam', 37.565069, -122.322644, 2],
		['Chipotle Mexican Grill', 37.565443, -122.322754, 1]
	];

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        	mapOptions);

    setMarkers(map, restaurants);
};

function setMarkers(map, locations) {
	// Add markers to the map


	for (var i = 0; i < locations.length; i++) {
		var restaurant = locations[i];
		var myLatLng = new google.maps.LatLng(restaurant[1], restaurant[2]);
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: restaurant[0],
			zIndex: restaurant[3]
		});
	}
}

google.maps.event.addDomListener(window, 'load', initialize);