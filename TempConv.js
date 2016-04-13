//Get a temperature in Celsius 
var Celsius = 0;
//Convert it to Fahrenheit by -32, * 5, /9
var CelsiusToFahrenheit = ((Celsius  * 1.8) +32);
//Rounds converted temp to nearest 100th
CelsiusToFahrenheit = Math.round(CelsiusToFahrenheit*100)/100
//Get a temperature in fahrenheit
var Fahrenheit = 100;
//Convert it to Celsius by *9, /5, then add 32
var FahrenheitToCelsius = (Fahrenheit-32) / 1.8;
//Rounds converted temp to nearest 100th
FahrenheitToCelsius = Math.round(FahrenheitToCelsius*100)/100
document.write (Celsius + '\&deg C is ' + CelsiusToFahrenheit + '\&degF');


document.write(Fahrenheit + '\&degF is ' + FahrenheitToCelsius + '\&degC.');
