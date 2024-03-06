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

## 37-4 Array And Object Destructuring

**Array and Object Destructuring in JavaScript**

1. **Array Destructuring**:
   - Array destructuring allows you to extract values from arrays and assign them to variables in a concise way.
   - It enables you to unpack values from arrays into separate variables using a syntax similar to array literals.
   - Useful for extracting multiple values from arrays quickly and cleanly.

   ```javascript
   const numbers = [1, 2, 3];
   const [first, second, third] = numbers;
   console.log(first); // Output: 1
   console.log(second); // Output: 2
   console.log(third); // Output: 3
   ```

2. **Object Destructuring**:
   - Object destructuring allows you to extract properties from objects and assign them to variables with the same names.
   - It provides a convenient way to extract multiple properties from objects and assign them to variables in a single expression.
   - Useful for unpacking data from objects and working with them more easily.

   ```javascript
   const person = { name: 'John', age: 30 };
   const { name, age } = person;
   console.log(name); // Output: John
   console.log(age); // Output: 30
   ```

3. **Array Destructuring with Rest**:
   - You can use the rest operator (`...`) in array destructuring to gather the remaining elements of an array into a new array.
   - This is useful when you want to extract a few elements from an array and collect the rest into a separate array.
   - Useful for handling variable-length arrays or extracting a subset of elements.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const [first, second, ...rest] = numbers;
   console.log(first); // Output: 1
   console.log(second); // Output: 2
   console.log(rest); // Output: [3, 4, 5]
   ```

4. **Object Destructuring with Default Values**:
   - You can provide default values in object destructuring to handle cases where a property may be undefined or absent.
   - If the property is not found in the object, the default value will be used instead.
   - Useful for handling optional properties or providing fallback values.

   ```javascript
   const person = { name: 'John' };
   const { name, age = 25 } = person;
   console.log(name); // Output: John
   console.log(age); // Output: 25 (default value)
   ```

Array and object destructuring are powerful features in JavaScript that allow for more concise and expressive code. They simplify the process of working with arrays and objects by providing a convenient way to extract values and properties into variables. Mastering destructuring can greatly enhance your ability to manipulate and handle data in JavaScript applications.

## 37-5 JSON, Fetch, Keys, Values, Array Add Or Remove Using Dots

**Working with JSON, Fetch API, Object Keys/Values, and Array Manipulation in JavaScript**

1. **JSON (JavaScript Object Notation)**:
   - JSON is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.
   - It consists of key-value pairs and arrays and is commonly used for transmitting data between a server and a web application.
   - Use `JSON.stringify()` to convert JavaScript objects into JSON strings and `JSON.parse()` to parse JSON strings into JavaScript objects.

   ```javascript
   const person = { name: 'John', age: 30 };
   const jsonString = JSON.stringify(person);
   console.log(jsonString); // Output: {"name":"John","age":30}

   const jsonObject = JSON.parse(jsonString);
   console.log(jsonObject.name); // Output: John
   ```

2. **Fetch API**:
   - The Fetch API provides an interface for fetching resources (such as JSON data) asynchronously across the network.
   - It is more powerful and flexible than older techniques like XMLHttpRequest (XHR).
   - Use `fetch()` to make HTTP requests and handle responses using promises.

   ```javascript
   fetch('https://api.example.com/data')
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error('Error:', error));
   ```

3. **Object Keys and Values**:
   - `Object.keys()` returns an array of a given object's own enumerable property names.
   - `Object.values()` returns an array of a given object's own enumerable property values.

   ```javascript
   const obj = { name: 'John', age: 30 };
   const keys = Object.keys(obj);
   const values = Object.values(obj);
   console.log(keys); // Output: ['name', 'age']
   console.log(values); // Output: ['John', 30]
   ```

4. **Array Add or Remove Using Spread Operator**:
   - The spread operator (`...`) can be used to add or remove elements from arrays efficiently.
   - To add elements, spread the original array along with the new elements.
   - To remove elements, spread the original array excluding the elements to be removed.

   ```javascript
   let arr = [1, 2, 3];
   arr = [...arr, 4]; // Adding element
   console.log(arr); // Output: [1, 2, 3, 4]

   arr = arr.filter(item => item !== 2); // Removing element
   console.log(arr); // Output: [1, 3, 4]
   ```

By mastering these techniques, you'll be well-equipped to work with JSON data, make asynchronous requests using the Fetch API, manipulate objects and arrays effectively, and build powerful web applications in JavaScript.

## 37-6 (Advanced) Truthy, Falsy, Ternary Operator, Shortcut And Or

**Advanced JavaScript Concepts: Truthy, Falsy, Ternary Operator, Short-circuiting with Logical Operators**

1. **Truthy and Falsy Values**:
   - In JavaScript, values that are considered falsy are `false`, `0`, `''` (empty string), `null`, `undefined`, and `NaN`.
   - All other values are considered truthy.
   - Understanding truthy and falsy values is crucial for writing concise and effective conditional logic in JavaScript.

   ```javascript
   if ('hello') {
       console.log('Truthy!'); // Output: Truthy!
   }

   if (0) {
       console.log('Falsy!');
   } else {
       console.log('Falsy!'); // Output: Falsy!
   }
   ```

2. **Ternary Operator**:
   - The ternary operator (`condition ? exprIfTrue : exprIfFalse`) is a concise way to write conditional statements.
   - It evaluates the condition and returns `exprIfTrue` if the condition is true, otherwise it returns `exprIfFalse`.
   - Useful for writing simple if-else statements in a single line.

   ```javascript
   const num = 10;
   const result = num > 0 ? 'Positive' : 'Negative';
   console.log(result); // Output: Positive
   ```

3. **Short-circuiting with Logical Operators**:
   - JavaScript's logical operators (`&&`, `||`) can be used for short-circuiting, which means they evaluate expressions from left to right and stop as soon as the result is determined.
   - In the case of `&&`, if the first operand is falsy, the result will be the falsy value; otherwise, the result will be the value of the second operand.
   - In the case of `||`, if the first operand is truthy, the result will be the truthy value; otherwise, the result will be the value of the second operand.

   ```javascript
   const value1 = 0;
   const value2 = 10;
   const result1 = value1 || 'Default'; // Using || to provide a default value
   const result2 = value2 && 'Success'; // Using && to perform an action conditionally
   console.log(result1); // Output: Default
   console.log(result2); // Output: Success
   ```

Understanding truthy and falsy values, using the ternary operator, and employing short-circuiting with logical operators are advanced JavaScript concepts that can significantly improve the readability and efficiency of your code. Mastering these techniques will make you a more proficient JavaScript developer.

## 37-7 Explore Localstorage And Session Storage With JSON

**Exploring Local Storage and Session Storage with JSON in JavaScript**

1. **Local Storage**:
   - Local Storage provides a way to store key-value pairs in a web browser with no expiration date.
   - Data stored in Local Storage persists even after the browser is closed and reopened.
   - Use `localStorage.setItem(key, value)` to store data and `localStorage.getItem(key)` to retrieve data.
   - Data in Local Storage is scoped to the origin (protocol, host, and port) of the page.
   
   ```javascript
   // Storing data in Local Storage
   const data = { name: 'John', age: 30 };
   localStorage.setItem('userData', JSON.stringify(data));

   // Retrieving data from Local Storage
   const retrievedData = JSON.parse(localStorage.getItem('userData'));
   console.log(retrievedData); // Output: { name: 'John', age: 30 }
   ```

2. **Session Storage**:
   - Session Storage is similar to Local Storage but has a lifespan tied to the duration of the page session.
   - Data stored in Session Storage persists only as long as the browser tab or window is open.
   - Use `sessionStorage.setItem(key, value)` and `sessionStorage.getItem(key)` for storing and retrieving data, respectively.
   - Like Local Storage, data in Session Storage is scoped to the origin of the page.

   ```javascript
   // Storing data in Session Storage
   const data = { name: 'Jane', age: 25 };
   sessionStorage.setItem('userData', JSON.stringify(data));

   // Retrieving data from Session Storage
   const retrievedData = JSON.parse(sessionStorage.getItem('userData'));
   console.log(retrievedData); // Output: { name: 'Jane', age: 25 }
   ```

3. **Using JSON with Storage**:
   - Since Local Storage and Session Storage only accept string key-value pairs, JSON is commonly used for storing structured data.
   - Use `JSON.stringify()` to convert JavaScript objects into JSON strings before storing in Storage.
   - Use `JSON.parse()` to parse JSON strings back into JavaScript objects when retrieving from Storage.

   ```javascript
   const userData = { name: 'Alice', age: 35 };

   // Storing data in Local Storage
   localStorage.setItem('userData', JSON.stringify(userData));

   // Retrieving and parsing data from Local Storage
   const retrievedData = JSON.parse(localStorage.getItem('userData'));
   console.log(retrievedData); // Output: { name: 'Alice', age: 35 }
   ```

Local Storage and Session Storage are valuable tools for persisting data in web applications, and using JSON with them allows for storing and retrieving structured data easily. These storage mechanisms are commonly used for caching user preferences, session data, or other application state in client-side JavaScript.

