// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

let consume = (a, b, callback) => callback(a, b);


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

let add = (num1, num2) => num1 + num2;
let multiply = (num1, num2) => num1 * num2;
let greeting = (str1, str2) => `Hello ${str1} ${str2}, nice to meet you!`;

/* Step 3: Check your work by un-commenting the following calls to consume(): */

//The functions are supposed to return, not log the results, so I added console.log here to check the work.

console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Functions look outward for context. That is to say, whatever scope a function is created in, it has access to (and outside of that, etc). 
// Since nestedFunction is declared in the myFunction scope, after const internal is first declared there, nestedFunction has access to internal. 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();