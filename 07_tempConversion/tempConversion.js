const convertToCelsius = function(temp) {
  //(F - 32) * (5/9)
  let celsius = ((temp - 32) * (5/9)); 
  round_c = Math.round(celsius * 10) / 10; 
  return round_c;
};

const convertToFahrenheit = function(temp) {
  //F = (9/5) * C + 32
  let fare = ((9/5) * temp) + 32;
  round_f = Math.round(fare * 10) / 10;
  return round_f; 

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
