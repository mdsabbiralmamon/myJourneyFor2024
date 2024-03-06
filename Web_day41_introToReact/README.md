## 37-1 Six JavaScript Fundamentals That You Need To Know

1. **Variables Declaration using `let` and `const`**: In JavaScript, you can declare variables using `let` and `const`. `let` is used to declare variables that can be reassigned, while `const` is used for variables whose values cannot be reassigned once set.

   ```javascript
   let variable1 = 5;
   const constant1 = 10;
   ```

2. **Basic Conditions/Multiple Conditions**: You can use basic conditions like `if`, `else if`, and `else` for decision making in JavaScript. Additionally, you can use logical operators (`&&`, `||`, `!`) to form multiple conditions.

   ```javascript
   let num = 10;
   if (num > 0) {
       console.log("Positive");
   } else if (num < 0) {
       console.log("Negative");
   } else {
       console.log("Zero");
   }
   ```

3. **Arrays**: Arrays in JavaScript are used to store multiple values in a single variable. You can declare an array, access elements by index, get its length, and add elements using `push()`.

   ```javascript
   let arr = [1, 2, 3, 4, 5];
   console.log(arr[0]); // Accessing element by index
   console.log(arr.length); // Length of the array
   arr.push(6); // Adding an element to the end of the array
   ```

4. **Loops**: JavaScript provides several types of loops such as `for`, `for...of`, and `while` for iterating over arrays or performing repetitive tasks.

   ```javascript
   // Using for loop
   for (let i = 0; i < 5; i++) {
       console.log(i);
   }

   // Using for...of loop
   let arr = [1, 2, 3, 4, 5];
   for (let element of arr) {
       console.log(element);
   }

   // Using while loop
   let i = 0;
   while (i < 5) {
       console.log(i);
       i++;
   }
   ```

5. **Functions**: Functions in JavaScript allow you to encapsulate a block of code for reuse. You can define functions using the `function` keyword or arrow functions (`=>`). Functions can take parameters, execute code, and return values.

   ```javascript
   // Function declaration
   function add(a, b) {
       return a + b;
   }

   // Arrow function
   const multiply = (a, b) => a * b;

   console.log(add(2, 3));
   console.log(multiply(2, 3));
   ```

6. **Objects**: Objects in JavaScript are collections of key-value pairs. You can declare objects, access properties using dot notation or bracket notation (especially useful when property names are stored in variables), and add or modify properties dynamically.

   ```javascript
   let person = {
       name: "John",
       age: 30,
       address: {
           city: "New York",
           country: "USA"
       }
   };

   console.log(person.name); // Accessing property using dot notation
   console.log(person['age']); // Accessing property using bracket notation
   let propertyName = 'address';
   console.log(person[propertyName].city); // Accessing property using variable
   ```

   