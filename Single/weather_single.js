
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Austin,US&units=imperial&APPID=e64ad6bb3e187568a4a6dc2e3d973671')  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
  
	
	document.getElementById("city").innerHTML = data.name;
	document.getElementById("temp").innerHTML = data.main.temp;
	document.getElementById("description").innerHTML = data.weather[0].description;
	document.getElementById("icon").innerHTML = '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png" />';



  })
  .catch(function() {
    // catch any errors
  });
