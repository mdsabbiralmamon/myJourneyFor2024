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

