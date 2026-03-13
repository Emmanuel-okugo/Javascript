/*
The year is 2099... we can now take a vacation on the moon or Mars! 🚀



Create a weight conversion program that:

Takes your weight on Earth.
Converts it to your weight on either the moon or Mars.
To calculate your weight on Mars:


destination_weight=earth_weight×0.38

The output of the program should look like this:

Your weight on Earth is 210 pounds.
Your weight on Mars is 79.8 pounds.
*/


// declaring and initializing variables
const earth_weight =  70;
let destination_weight;

// calculating weight on mars
destination_weight = earth_weight * 0.38;

// printing weight
console.log("Your weight on Earth is " + earth_weight + " pounds.");
console.log("Your weight on Mars is " + destination_weight + " pounds.");