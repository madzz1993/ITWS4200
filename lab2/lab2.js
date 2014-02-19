$(document).ready(function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getWeather);
	}else {
		alert("Geolocation is not supported by this browser");
	}
	function getWeather(position) {
		var lat=position.coords.latitude;
		var longitude=position.coords.longitude;
		var url= 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + longitude +  "&units=imperial&callback=?";
		$.getJSON(url, function(data) {
			var output = "";
			output += '<h1>' +data.main.temp+ '</h1>';
			output += '<h2>' +data.name+ '</h2>';
			output += '<h3>' +data.weather[0].description + '</h3>';
			output += '<h4> Wind: ' +data.wind.speed+ 'mps </h4>';
			output += '<h4> Humidity: ' +data.main.humidity+ '% </h4>';

		$('#details').html(output);
		});
	}			
});