const convertToCelsius = function(tempInFahrenheit) {
      let resultInCelcius=(tempInFahrenheit-32)/1.8;
      return Math.round(resultInCelcius ,1);
};

//return 0 
const convertToFahrenheit = function(tempInCelcious) {
      let resultInFahrenheit=tempInCelcious*1.8 + 32;
      return Math.round(resultInFahrenheit, 1);
};

//should return 32
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
