
$(function () {
	$("#weather-form").submit(function (e) {
		e.preventDefault();

		var city = $("#city-field").val();

		console.log("The city is " + city);

		var url = "api.openweathermap.org/data/2.5/weather?q={city name}"

;

		console.log("The url is " + url);

		$.ajax({
			url: url,
			dataType: "jsonp",
			success: function (data) {
				console.log(data); }
});
		});

})

 