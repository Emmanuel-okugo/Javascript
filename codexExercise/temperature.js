/*
Create a temperature.js program that converts a number from Fahrenheit (°F) to Celsius (°C).

Google the current temperature of Brooklyn, NY (where Codédex is based) in °F.

Use the following formula and write it out in JavaScript:


Celsius= (Fahrenheit−32) / 1.8
​
 

Print out the converted temperature. 🌡️
*/

// declaring and initializing the variables
const fahrenheit = 36;
let celsius;

// calculating the temperature in celsius
celsius = (fahrenheit - 32) / 1.8;

// printing the result
console.log("Temperature in celsius: " + celsius);