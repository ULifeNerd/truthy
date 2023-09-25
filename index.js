//given a certain value, the expected print should result in a certain output.  
// if the input is "I am a string" the expected print should be true.  
//if the value is false the expected pring should be "the boolean value false is falsy"
//if the value is null the expected pring should be "the null value is falsy"
//if the value is undefined, the expected print should be "undefined is falsy"
//if the value if value is 0 the expected print should be "the number 0 is falsy"
//if the value is "" the expected print should be "The empty string is falsy (the only falsy string)"

//appoarch 
// take the value, and check in and if-state if the value generates a certain output.  

const valuetoTest = null;

if (valuetoTest ){
    console.log(true);

} else if (valuetoTest === false) {
   console.log("The boolean value false is falsy");
} else if (valuetoTest === null) {
    console.log("the null value is falsy")

} else if (valuetoTest === undefined){
    console.log("undefined is falsy")

} else if (valuetoTest === 0) {
    console.log("the numner is 0 falsy (the only falsy number")

} else if (valuetoTest == "") {
    console.log ("The empty string is falsy (the only falsy string)")
} 

//Define two variables: num1 and num2, and set their values.
//Calculate the sum of num1 and num2, store it in a variable called "combination."
//Use conditional statements to compare the value of "combination" to different conditions and print corresponding messages:
//If "combination" is greater than 100: Print "combination is greater than 100."
//Else if "combination" is greater than 0:Print "combination is greater than 0."
//Else if "combination" is equal to 0:Print "combination is equal to 0."
//Else if "combination" is less than 0 and greater than or equal to -1000:Print "combination is a negative number."

//approach
//Test the code with different values of num1 and num2 to ensure it works as expected.


const num1 = -5;
const num2 = 0;

const combination = num1 + num2; 

if (combination > 100) {
    console.log(combination + " is greater than 100");

} else if (combination > 0) { 
    console.log(combination + " is greater than 0");

} else if (combination === 0) {
    console.log(combination + " is equal to 0");

} else if (combination < 0 && combination >= -1000) {

    console.log(combination + " is a negative number");
} 


//Define a function called checkGreaterThanOrEqual that takes two parameters: num1 and num2.

//Inside the function:
//Check if both num1 and num2 are greater than or equal to 5.
//If both conditions are met, print "true."
//Otherwise, print "false."


//approach
//Test the function with different pairs of num1 and num2 values to ensure it produces the expected results.

const nums1 = 0;
const nums2 = 0;

const mySum = num1 + num2; 

if (mySum >= 5 && num2 >= 5) {
    console.log(true);
} else {
    console.log (false);
}


//define the values to test. 

//approach

// Compare the pairs and print true if at least one is truthy

const param1A = "cat";
const param1B = "cat";
const param2A = 6;
const param2B = "6";


if ((param1A === param1B || param2A === param2B) && (param1A || param1B || param2A || param2B)) {
    console.log(true);
} else {
    console.log(false);
}