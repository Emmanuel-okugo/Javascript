/* 
The body mass index (BMI) was created by a Belgian mathematician in the 1850s and it's used by health and nutrition professionals to estimate human body fat in certain populations.

It is computed by taking an individual's weight (mass) in kilograms and dividing it by the square of their height in meters.


bmi= 
height 
2
 
mass
​
 

Create a program that calculates your own BMI.

Author's note: Psst. BMI is an archaic and oversimplified way to measure personal health. It was created by a mathematician – not a doctor! 💡
*/


//declaring and initializing variables
const mass =  70;
const height = 170;
let heightSquared;
let bmi;

//getting height squared
heightSquared = height ** 2;

//getting my BMI
bmi = mass / heightSquared;

//printing result
console.log("My bmi value: " + bmi);