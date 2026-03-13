/* This program tests the block scope */

let name = "okugo";

{
    let age = 24;
    console.log("name: " + name);
}

{
    let age = 30;
    console.log("age: " + age);
}

console.log("age: " + age);