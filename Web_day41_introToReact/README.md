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

   ## 37-2 Template String, Arrow Function, Spread Operator

**Essential JavaScript Concepts: Template Strings, Arrow Functions, Spread Operator**

1. **Template Strings**:
   - Template strings, also known as template literals, provide a more concise and readable way to create strings in JavaScript.
   - They are enclosed by backticks (` `) instead of single or double quotes.
   - Template strings support interpolation, allowing you to embed expressions or variables within the string using `${}` syntax.
   - Useful for creating dynamic strings, multi-line strings, and formatting text.

   ```javascript
   const name = "John";
   const greeting = `Hello, ${name}!`;
   console.log(greeting); // Output: Hello, John!
   ```

2. **Arrow Functions**:
   - Arrow functions are a more concise syntax for writing JavaScript functions, introduced in ES6.
   - They provide a shorter syntax compared to traditional function expressions.
   - Arrow functions do not have their own `this` context; instead, they inherit `this` from the surrounding lexical scope.
   - Useful for writing anonymous functions, callbacks, and concise one-liners.

   ```javascript
   // Traditional function expression
   const add = function (a, b) {
       return a + b;
   };

   // Arrow function
   const multiply = (a, b) => a * b;

   console.log(add(2, 3)); // Output: 5
   console.log(multiply(2, 3)); // Output: 6
   ```

3. **Spread Operator**:
   - The spread operator (`...`) allows an iterable, such as an array or object, to be expanded into individual elements.
   - It can be used in function calls, array literals, object literals, and more.
   - Spread operator makes it easy to clone arrays/objects, concatenate arrays, and pass multiple arguments to functions.
   - Useful for manipulating arrays/objects and simplifying code.

   ```javascript
   // Array spread
   const arr1 = [1, 2, 3];
   const arr2 = [4, 5, 6];
   const combinedArray = [...arr1, ...arr2];
   console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

   // Object spread
   const obj1 = { name: 'John' };
   const obj2 = { age: 30 };
   const combinedObject = { ...obj1, ...obj2 };
   console.log(combinedObject); // Output: { name: 'John', age: 30 }
   ```

Understanding and utilizing template strings, arrow functions, and the spread operator are essential for writing modern JavaScript code efficiently and concisely. These concepts are widely used in JavaScript frameworks like React and Angular, so mastering them will greatly enhance your development skills.

## 37-3 Array Methods (Map, ForEach, Filter And Find )

**Array Methods: `map`, `forEach`, `filter`, and `find`**

1. **`map` Method**:
   - The `map` method creates a new array by applying a function to each element of the original array.
   - It doesn't modify the original array; instead, it returns a new array with the results of applying the provided function to each element.
   - Useful for transforming each element of an array without mutating the original array.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const doubledNumbers = numbers.map(num => num * 2);
   console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
   ```

2. **`forEach` Method**:
   - The `forEach` method executes a provided function once for each array element.
   - Unlike the `map` method, `forEach` doesn't return a new array; instead, it simply iterates over each element.
   - Useful for performing an action on each element of an array.

   ```javascript
   const colors = ['red', 'green', 'blue'];
   colors.forEach(color => console.log(color)); // Output: red, green, blue
   ```

3. **`filter` Method**:
   - The `filter` method creates a new array with all elements that pass a test implemented by the provided function.
   - It returns a new array containing only the elements for which the callback function returns `true`.
   - Useful for filtering out elements based on specific criteria.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const evenNumbers = numbers.filter(num => num % 2 === 0);
   console.log(evenNumbers); // Output: [2, 4]
   ```

4. **`find` Method**:
   - The `find` method returns the first element in the array that satisfies the provided testing function.
   - It returns `undefined` if no element satisfies the condition.
   - Useful for finding the first occurrence of an element in an array.

   ```javascript
   const users = [
       { id: 1, name: 'John' },
       { id: 2, name: 'Jane' },
       { id: 3, name: 'Doe' }
   ];
   const user = users.find(user => user.id === 2);
   console.log(user); // Output: { id: 2, name: 'Jane' }
   ```

These array methods (`map`, `forEach`, `filter`, and `find`) are powerful tools for working with arrays in JavaScript. Understanding how and when to use each method will significantly enhance your ability to manipulate and process data in arrays effectively.

