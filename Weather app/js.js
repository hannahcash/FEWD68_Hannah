http://api.openweathermap.org/data/2.5/weather?q=<CITYNAME>

$(function () {





	$("#weather-form").submit(function (e) {
		e.preventDefault();

		var city = $("#city-field").val();

		console.log("The city is " + city);

		var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + encodeURIComponent(city) + "&cnt=4&mode=json";

		console.log("The url is " + url);

		$.ajax({
			url: url,
			dataType: "jsonp",
			success: function (data) {
				console.log(data);

				var list = data.list;

				processList(list);
			}
		});



		function processList(list) {
			console.log(list);

			var weatherData = [];

			for (var i = 0; i < list.length; i++) {

				var weatherDataObject = {
					minTemp: kelvinToFahrenheit(list[i].temp.min).toFixed(0),
					maxTemp: kelvinToFahrenheit(list[i].temp.max).toFixed(0),
					dayOut: i,
					dayName: getDayName(i)
				};

				weatherData.push(weatherDataObject);
			}

			console.log("The new weather data array ", weatherData);

			createForecastElements(weatherData);
		}


		function getDayName(dayOut) {
			var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			var currentDate = new Date();

			var date = new Date(currentDate);
			date.setDate(currentDate.getDate() + dayOut);

			return dayNames[date.getDay()];
		}


		function createForecastElements(weatherData) {
			console.log("Weather data", weatherData);

			$("#forecast").html("");

			for (var i = 0; i < weatherData.length; i++) {
				$("#forecast").append("" + 
					"<div class='day-weather'>" +
						"<div class='day'>" + weatherData[i].dayName + "</div>" +
						"<div class='min-temp'>" + weatherData[i].minTemp + "</div>" +
						"<div class='max-temp'>" + weatherData[i].maxTemp + "</div>" +
					"</div>");	
			}
			// $("#forecast")

		}

 