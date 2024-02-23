## Module 32-1 Module Overview, Primitive And Non-Primitive Data Type

### Strongly Typed VS Dynamically Typed

Strongly typed languages and dynamically typed languages represent different approaches to how variables are handled and enforced in a programming language.

1. **Strongly Typed Language**:
   - In a strongly typed language, each variable is bound to a specific data type.
   - Type checking is performed at compile-time, ensuring that types are used consistently and appropriately throughout the code.
   - It offers more strictness and can prevent certain types of errors related to data type mismatches.
   - Examples of strongly typed languages include Java, C#, and Swift.

2. **Dynamically Typed Language**:
   - In a dynamically typed language, variables are not bound to a specific data type during declaration; instead, the data type is inferred at runtime.
   - Type checking is performed at runtime, allowing for more flexibility but potentially leading to runtime errors if types are used inconsistently.
   - It offers more flexibility and concise code but might require more testing to catch certain types of errors.
   - Examples of dynamically typed languages include Python, JavaScript, and Ruby.

Here's a comparison of the two approaches:

| Aspect                  | Strongly Typed Language                                     | Dynamically Typed Language                                  |
|-------------------------|-------------------------------------------------------------|-------------------------------------------------------------|
| Type Declaration        | Explicitly declared data types                               | Type inference or no explicit declaration required           |
| Type Checking           | Done at compile-time                                        | Done at runtime                                             |
| Error Detection         | Can catch certain errors at compile-time                    | Errors may only be caught at runtime                         |
| Flexibility             | More rigid due to strict typing                             | More flexible due to dynamic typing                         |
| Development Speed       | May require more explicit type handling, potentially slower  | Often allows for faster development due to less verbosity    |
| Debugging               | Some errors can be caught early during compilation          | May require runtime debugging for type-related issues       |
| Code Readability        | Type annotations can enhance readability and understanding  | Less cluttered due to lack of explicit type annotations      |

The choice between using a strongly typed or dynamically typed language often depends on factors such as the project requirements, team preferences, and the specific use case. Each approach has its advantages and drawbacks, and the suitability of one over the other can vary depending on the context.

## Primitive VS Non-primitive

In programming, data types classify various types of data that can be used in a program. These data types can be categorized broadly into two main categories: primitive data types and non-primitive (or reference) data types.

1. **Primitive Data Types**:
   - Primitive data types are basic data types that are directly supported by the programming language.
   - They are the building blocks for more complex data structures.
   - They usually represent simple values and are not composed of other types.
   - Examples of primitive data types include integers, floating-point numbers, characters, booleans, and pointers.
   - Primitive data types typically have a fixed size and are stored directly in memory.

2. **Non-Primitive (Reference) Data Types**:
   - Non-primitive data types are also known as reference data types.
   - They are more complex data types that are constructed using primitive data types or other non-primitive data types.
   - Unlike primitive data types, non-primitive data types do not store the actual data values directly; instead, they store references or addresses to where the data is stored.
   - Examples of non-primitive data types include arrays, strings, objects, classes, and interfaces.
   - Non-primitive data types can have variable sizes and structures, depending on the data they represent.

Here's a comparison between primitive and non-primitive data types:

| Aspect                  | Primitive Data Types                                         | Non-Primitive Data Types                                     |
|-------------------------|--------------------------------------------------------------|--------------------------------------------------------------|
| Examples                | int, float, char, boolean                                    | Arrays, Strings, Objects, Classes, Interfaces               |
| Direct Storage          | Stored directly in memory                                    | Store references to data locations                           |
| Size                    | Fixed size                                                   | Variable size                                                |
| Mutability               | Immutable (in some languages)                                 | Mutable                                                      |
| Memory Allocation       | Allocated on the stack or heap depending on the language     | Allocated on the heap (in languages with garbage collection) |

The choice between primitive and non-primitive data types depends on the requirements of the program and the nature of the data being manipulated. Primitive types are often used for simple data storage and manipulation, while non-primitive types are used for more complex data structures and object-oriented programming paradigms.

---

## Module 32-2 Null Vs Undefined, Different Ways You Will Get Undefined

In programming, especially in languages like JavaScript, "null" and "undefined" are two distinct concepts often used to denote absence or non-existence of a value, but they have different meanings and behaviors.

1. **Undefined**:
   - In JavaScript, "undefined" is a primitive value that is automatically assigned to variables that have been declared but not initialized.
   - It represents the absence of a value or an uninitialized variable.
   - Variables can also be explicitly set to undefined.
   - Undefined is also returned when trying to access non-existing properties of an object or when a function doesn't return anything explicitly.

   ```javascript
   let x;
   console.log(x); // Outputs: undefined

   function foo() {}
   console.log(foo()); // Outputs: undefined
   ```

2. **Null**:
   - "Null" is a special value in JavaScript that represents the intentional absence of any object value.
   - It is often used to denote an empty or non-existent value deliberately assigned by the programmer.
   - Unlike "undefined," "null" is explicitly assigned.

   ```javascript
   let y = null;
   console.log(y); // Outputs: null
   ```

Ways to Get "Undefined" in JavaScript:
1. **Declared But Not Initialized**:
   ```javascript
   let x;
   console.log(x); // Outputs: undefined
   ```

2. **Accessing Non-existing Object Properties**:
   ```javascript
   let obj = {};
   console.log(obj.nonExistentProperty); // Outputs: undefined
   ```

3. **Function Without Return Statement**:
   ```javascript
   function foo() {}
   console.log(foo()); // Outputs: undefined
   ```

4. **Implicit Return of Functions**:
   ```javascript
   function bar() {
     // No return statement
   }
   console.log(bar()); // Outputs: undefined
   ```

5. **Non-existing Array Elements**:
   ```javascript
   let arr = [];
   console.log(arr[5]); // Outputs: undefined
   ```

6. **Implicit Return in Arrow Functions**:
   ```javascript
   const baz = () => {};
   console.log(baz()); // Outputs: undefined
   ```

These examples demonstrate various scenarios in JavaScript where "undefined" can be encountered, either through uninitialized variables, accessing non-existing properties, or functions not returning any value.

---

## Module 32-3 Different Truthy And Falsy Values In JavaScript

In JavaScript, truthy and falsy values are used in contexts where a Boolean (true/false) value is expected, such as in conditionals (`if` statements, ternary operators) or as operands of logical operators (`&&`, `||`). 

A **truthy** value is a value that is considered true when evaluated in a Boolean context, while a **falsy** value is a value that is considered false when evaluated in a Boolean context.

Here are the main distinctions between truthy and falsy values in JavaScript:

### Truthy Values:
- Any value that is not explicitly falsy is considered truthy.
- Examples of truthy values include:
  - Non-empty strings (`"hello"`, `"0"`)
  - Non-zero numbers (positive or negative)
  - Arrays or objects (even if they are empty)
  - Functions (even if they are empty)
  - The boolean value `true`

### Falsy Values:
- Falsy values are values that are considered false when evaluated in a Boolean context.
- Examples of falsy values include:
  - The boolean value `false`
  - The number `0` (zero)
  - An empty string `''` or `""`
  - `null`
  - `undefined`
  - `NaN` (Not a Number)

```javascript
// Examples of truthy values
if ("hello") {
  console.log("Truthy"); // Outputs: Truthy
}

if (42) {
  console.log("Truthy"); // Outputs: Truthy
}

if (["a", "b"]) {
  console.log("Truthy"); // Outputs: Truthy
}

// Examples of falsy values
if (false) {
  console.log("Falsy");
} else {
  console.log("Falsy"); // Outputs: Falsy
}

if (0) {
  console.log("Falsy");
} else {
  console.log("Falsy"); // Outputs: Falsy
}

if ('') {
  console.log("Falsy");
} else {
  console.log("Falsy"); // Outputs: Falsy
}
```

Understanding truthy and falsy values is important in JavaScript because it allows for concise and expressive code when dealing with conditionals and logical operations. However, it's crucial to be aware of potential pitfalls, especially when relying on truthy/falsy evaluations for specific checks.

---

## Module 32-4 Double Equal (==) Vs Triple Equal (===), Implicit Conversion

In JavaScript, both the double equal (`==`) and triple equal (`===`) operators are used for comparison, but they behave differently due to how they handle data types and perform type coercion.

### Double Equal (`==`) Operator:
- The double equal operator performs type coercion before comparison.
- It converts the operands to the same type before comparing.
- If the operands are of different types, JavaScript attempts to convert them to a common type.
- This can lead to unexpected results, especially when comparing different data types.

Example:

```javascript
console.log(5 == "5"); // Outputs: true, because "5" is coerced to a number
console.log(1 == true); // Outputs: true, because true is coerced to 1
console.log(0 == false); // Outputs: true, because false is coerced to 0
```

### Triple Equal (`===`) Operator:
- The triple equal operator, also known as the strict equality operator, does not perform type coercion.
- It compares the operands without converting their types.
- If the operands are of different types, they are considered unequal without any type conversion.

Example:

```javascript
console.log(5 === "5"); // Outputs: false, because the types are different
console.log(1 === true); // Outputs: false, because the types are different
console.log(0 === false); // Outputs: false, because the types are different
```

### Implicit Conversion:
- Implicit conversion, or type coercion, is the automatic conversion of values from one data type to another.
- JavaScript performs implicit conversions in various situations, such as arithmetic operations, comparisons using the double equal (`==`) operator, and other contexts where data types are mixed.

Example:

```javascript
console.log(5 + "5"); // Outputs: "55", because the number 5 is coerced to a string and concatenated
```

In general, it's recommended to use the triple equal (`===`) operator for strict equality comparisons because it avoids unexpected behaviors caused by implicit type conversion. However, there may be cases where the double equal (`==`) operator is appropriate, such as when you explicitly want type coercion to occur. Always be aware of the differences between these operators and choose the one that best fits your use case.

### comparing 2 arrays and objects in js

In JavaScript, comparing arrays and objects involves checking whether their references point to the same memory location (reference equality) or comparing their contents (value equality). Here's how you can do it:

### Comparing Arrays:

#### Reference Equality:
```javascript
const array1 = [1, 2, 3];
const array2 = array1; // array2 references the same array as array1

console.log(array1 === array2); // Outputs: true, because they reference the same memory location
```

#### Value Equality:
```javascript
const array1 = [1, 2, 3];
const array2 = [1, 2, 3]; // Another array with the same values

// Using JSON.stringify for a simple value comparison (Note: this might not work for more complex objects or arrays)
console.log(JSON.stringify(array1) === JSON.stringify(array2)); // Outputs: true, because their contents are the same
```

### Comparing Objects:

#### Reference Equality:
```javascript
const obj1 = { name: 'John' };
const obj2 = obj1; // obj2 references the same object as obj1

console.log(obj1 === obj2); // Outputs: true, because they reference the same memory location
```

#### Value Equality:
```javascript
const obj1 = { name: 'John' };
const obj2 = { name: 'John' }; // Another object with the same properties and values

// Using JSON.stringify for a simple value comparison (Note: this might not work for more complex objects or nested objects)
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // Outputs: true, because their contents are the same
```

#### Deep Comparison for Nested Objects/Arrays:
If your objects/arrays have nested structures, or if you need a more robust comparison, you might need to use a deep comparison approach. Libraries like Lodash provide functions like `_.isEqual()` for deep comparison.

Example with Lodash:
```javascript
const _ = require('lodash');

const obj1 = { nested: { prop: 'value' } };
const obj2 = { nested: { prop: 'value' } };

console.log(_.isEqual(obj1, obj2)); // Outputs: true, because their contents are deeply equal
```

Keep in mind that with deep comparison, performance might be impacted, especially with large or deeply nested structures. Choose the comparison method based on your specific needs and performance considerations.

## Module 32-5 Block Scope Global Scope Simple Understanding Of Hoisting

Understanding block scope, global scope, and hoisting is fundamental to writing effective JavaScript code.

### Block Scope:
- Block scope refers to the area within curly braces `{}` where variables are accessible.
- Variables declared inside a block are only accessible within that block.
- Introduced with ES6 using `let` and `const` keywords.
  
Example:
```javascript
{
  let x = 10;
  console.log(x); // Outputs: 10
}

console.log(x); // Throws ReferenceError: x is not defined
```

### Global Scope:
- Global scope refers to the area outside of any function or block.
- Variables declared in the global scope are accessible from anywhere in the code.
- Declared using `var` keyword (prior to ES6) or by directly declaring variables outside of any block or function.

Example:
```javascript
var globalVar = 10;

function test() {
  console.log(globalVar); // Outputs: 10
}

test();
console.log(globalVar); // Outputs: 10
```

### Hoisting:
- Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during compilation, before execution.
- Only the declarations are hoisted, not the initializations.
- Hoisting applies to variables declared with `var`, `let`, and `const`, as well as function declarations, but not to function expressions.

Example (with `var`):
```javascript
console.log(x); // Outputs: undefined
var x = 10;
```

Explanation:
- During compilation, the variable declaration `var x;` is hoisted to the top of its containing scope.
- However, the initialization `x = 10;` remains in place.
- So, when `console.log(x)` is executed, `x` exists but has not been assigned a value yet, hence the output is `undefined`.

Example (with `let`):
```javascript
console.log(x); // Throws ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

Explanation:
- Unlike `var`, variables declared with `let` and `const` are not initialized until the declaration is evaluated.
- Therefore, trying to access a `let` variable before its declaration results in a `ReferenceError`.

Understanding block scope, global scope, and hoisting is crucial for writing predictable and maintainable JavaScript code. It helps avoid bugs and unintended behavior by clearly defining the visibility and lifecycle of variables and functions.

