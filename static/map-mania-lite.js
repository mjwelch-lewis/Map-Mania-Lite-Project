var gMap;

function initMap() {
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3});


    var marker = new google.maps.Marker({position: {lat: 45.3306, lng: -91.4918}, map: gMap});

    var marker2 = new google.maps.Marker({position: {lat: 36.3932, lng: 25.4615}, map: gMap});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

    var infoWindow = new google.maps.InfoWindow({content: 'Santorini, Greece'});
    marker2.addListener('click', function() {
        infoWindow.open(gMap, marker2);
    });
}

function initApplication() {
    console.log('Map Mania Lite - Starting!');
}