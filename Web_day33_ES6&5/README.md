## Beginning of ES

## Module 30-1 ES6 Intro Difference Between Var, Let And Const

In ES6 (ECMAScript 2015), var, let, and const are all used for variable declaration, but they have some key differences in terms of scope, hoisting, and mutability.

-   Use var for variables that need function or global scope (though its use is less common in modern JavaScript).
-   Use let for variables that need block scope and might be reassigned.
-   Use const for variables that should remain constant and whose value shouldn't change.

## Module 30-2 Function Default Parameter For Not Provided Values

In JavaScript ES6, you can define default parameter values for function parameters by assigning a default value directly in the function parameter list. If a parameter is not provided when the function is called, the default value will be used instead.

Here's an example of defining default parameter values:

```js

function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet('John'); // Output: Hello, John!

```

In the greet function, the name parameter has a default value of 'Guest'. When the greet function is called without providing a value for name, it uses the default value 'Guest'. However, if a value is provided for name, it will override the default value.

You can use default parameter values for any number of parameters in a function:

```js

function greet(name = 'Guest', message = 'Hello') {
    console.log(`${message}, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet('John'); // Output: Hello, John!
greet('Jane', 'Good morning'); // Output: Good morning, Jane!


```

In the last example, both name and message have default values. If only one argument is provided, the other parameter will use its default value. If both arguments are provided, they will override the default values.

In JavaScript, there are several data types, each with its own default value when no explicit value is assigned. Here are the data types and their default values:

- Undefined: Represents a variable that has been declared but has not been assigned a value.
    - Default value: undefined

- Null: Represents the intentional absence of any object value.
    - Default value: null

- Boolean: Represents a logical value indicating either true or false.
    - Default value: false

- Number: Represents numeric data, including integers and floating-point numbers.
    - Default value: 0

- String: Represents textual data enclosed within single or double quotes.
    - Default value: '' (an empty string)

- Symbol: Represents unique and immutable values used to identify object properties.
    - No literal representation; typically not used as a default value.

- Object: Represents a collection of key-value pairs.
    - Default value: null

Note: It's important to understand that default values are context-dependent and may vary depending on the situation. For example, the default value of a function parameter without a provided argument is undefined. However, these are the default values typically associated with each data type in JavaScript.

## Module 30-3 Template String, Multiple Line String, Dynamic String

In JavaScript, template strings, also known as template literals, allow for more flexible and expressive string formatting compared to traditional strings. They support multiple lines, interpolation of variables and expressions, and allow for easy embedding of other strings.

- Template Strings (Template Literals):

    - Template strings are enclosed within backticks ( ) instead of single or double quotes.
    - They support interpolation of variables and expressions using ${} syntax.
    - Example:

```js

const name = 'John';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!


```

- Multiple Line Strings:

    - Template strings support multiline content without the need for explicit line breaks (\n).
    - Simply add line breaks within the backticks.
    - Example:

```js

const multilineString = `This is a
multiline
string`;
console.log(multilineString);
// Output:
// This is a
// multiline
// string


```

- Dynamic String Creation:

    - Template strings allow for dynamic string creation by embedding expressions within ${}.
    - Expressions inside ${} are evaluated and their results are concatenated into the string.
    - Example:

```js

const x = 10;
const y = 20;
const dynamicString = `The sum of ${x} and ${y} is ${x + y}.`;
console.log(dynamicString); // Output: The sum of 10 and 20 is 30.

```

Template strings provide a more concise and readable way to create strings in JavaScript, especially when dealing with complex string formatting or multiline content. They are widely used in modern JavaScript development for their versatility and expressiveness.

