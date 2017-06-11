
function mostrarMapa(Lat,Lon,div) {  
	var latlngInicial = new google.maps.LatLng(Lat, Lon); 	
    var opciones = {            
		zoom: 5,
		center: latlngInicial,
		mapTypeId: google.maps.MapTypeId.ROADMAP        
	};                   
	mapa = new google.maps.Map(document.getElementById(div), opciones);   
	marcador = new google.maps.Marker({            
		position: latlngInicial,
		map: mapa,
		draggable: true,
		title: "Mi punto!!"        
	});
	google.maps.event.addListener(marcador, 'dragend', function(event) {
		posicionLat = event.latLng.lat();
		posicionLon =  event.latLng.lng();								
	});
};

$(document).ready(function() {	
	posicionLat = -0.180653;
	posicionLon = -78.467834;
	mostrarMapa(posicionLat,posicionLon,"divMapa");		   
});