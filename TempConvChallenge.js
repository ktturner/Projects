//Create variable to hold generated number
var temp;
//Create variable to hold generated number converted to whole number between 0 - 100
var RandomFahrenheitTemp = Math.random(temp) * 100;
//Round the generated temerature to nearest 100th
RandomFahrenheitTemp = Math.round(RandomFahrenheitTemp*100/100);
//Convert generated temp from Fahrenheit to Celsius
var RandomFahrenheitTempConvertCelsius = (RandomFahrenheitTemp-32) / 1.8;
//Round new Celsius temp to nearest 100th
RandomFahrenheitTempConvertCelsius = Math.round(RandomFahrenheitTempConvertCelsius*100)/100
//Display current temp in Fahrenheit and Celsius
document.write('It is '+ RandomFahrenheitTemp +'\&degF today. That\'s ' + RandomFahrenheitTempConvertCelsius + '\&degC.')
