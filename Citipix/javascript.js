


$(document).ready(function() {


var cities = ["nyc","sf","la","atx","syd"];
for (var i = 0; i < cities.length; i++) 
  $("#city-type").append('<option>' + cities(i) + '</option>');
}

  $('#city-type').change(function() {
   var city = $('city-type').val();


   if(city == 'NYC'){
      $('body').attr('class','nyc');

   else if(city == 'SF'){
      $('body').attr('class','sf');
      

    else if(city == 'ATX'){
      $('body').attr('class','atx');  

    else if(city == 'LA'){
      $('body').attr('class','la');

    else if(city == 'SYD'){
      $('body').attr('class','syd');
  }


