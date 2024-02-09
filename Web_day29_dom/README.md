## 🎃   24-1 What Is Dom, Connect Your JS File With Html File

### What is dom?
- DOM (Document object model) : DOM stands for Document Object Model. It is a programming interface for web documents. When a web page is loaded, the browser creates a DOM representation of the page, which is a tree-like structure where each element in the HTML document is represented as a node. This allows scripts to dynamically access and manipulate the content, structure, and style of the web page.

- The DOM provides a way for scripts to dynamically update the content, structure, and style of a web page. It consists of a hierarchy of nodes, where each node represents an element, attribute, or text content in the document. JavaScript can be used to interact with the DOM, allowing developers to create dynamic and interactive web applications.

For example, JavaScript can be used to:

- Access and modify HTML elements and attributes.
- Add or remove elements from the document.
- Change the style of elements.
- Respond to user events such as clicks and key presses.

Overall, the DOM plays a crucial role in enabling dynamic and interactive web development.

### how to connect js with html file ?

To connect JavaScript with an HTML file, you typically include your JavaScript code within `<script>` tags in the HTML file or link an external JavaScript file to your HTML document using the `<script>` tag. Here's how you can do it:

-   Inline JavaScript: You can include JavaScript code directly within the `<script>` tags in your HTML file. Place these `<script>` tags in the `<head>` or `<body>` section of your HTML document.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Example</title>
    <script>
        // Inline JavaScript code
        function greet() {
            alert("Hello, world!");
        }
    </script>
</head>
<body>
    <button onclick="greet()">Click me</button>
</body>
</html>

```

-   External JavaScript file: You can create a separate JavaScript file with your code and then link it to your HTML file using the src attribute in the `<script>` tag.

-   HTML file (index.html):

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Example</title>
    <!-- Linking external JavaScript file -->
    <script src="script.js"></script>
</head>
<body>
    <button onclick="greet()">Click me</button>
</body>
</html>

```
-   JavaScript file (script.js):

```js

// External JavaScript file (script.js)
function greet() {
    alert("Hello, world!");
}

```
Ensure that your HTML file and JavaScript file are in the same directory, or you need to provide the correct path to your JavaScript file in the src attribute of the `<script>` tag.

---

## 🎃   24-2 Traversing Dom - GetElementsByTagName

### GetElementsByTagName

getElementsByTagName() is a method in the Document Object Model (DOM) API that allows you to retrieve all elements within a document that have a specific tag name. It returns a live HTMLCollection of elements with the specified tag name.

Here's how you can use getElementsByTagName():

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>getElementsByTagName Example</title>
</head>
<body>
    <h1>Sample Document</h1>
    <p>This is a paragraph.</p>
    <div>
        <p>This is another paragraph.</p>
    </div>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <script>
        // Get all <p> elements in the document
        var paragraphs = document.getElementsByTagName("p");
        
        // Loop through the collection and do something with each paragraph
        for (var i = 0; i < paragraphs.length; i++) {
            console.log(paragraphs[i].textContent);
            // You can also manipulate each paragraph here, for example:
            // paragraphs[i].style.color = "red";
        }
    </script>
</body>
</html>

```

In this example, getElementsByTagName("p") returns all `<p>` elements in the document. Then, a loop iterates over each `<p>` element, logging its textContent to the console. You can also perform other operations on these elements, such as changing their style or content.

### Array like object 

Arrays are objects in JavaScript, but they have specific properties and methods that distinguish them from regular JavaScript objects. However, if you're referring to "array-like objects," these are objects that resemble arrays in that they have numeric indices and a length property, but they may not have all the methods and features of a true array.

Here's an example of an array-like object:

```js

var arrayLike = {
    0: 'apple',
    1: 'banana',
    2: 'orange',
    length: 3
};

```
In this object:

- The properties 0, 1, and 2 are numeric indices, just like an array.
- The length property indicates the number of elements in the "array-like" object.
- However, this object is not a true array because it doesn't have built-in array methods like push(), pop(), forEach(), etc.

You can still access elements of array-like objects using numeric indices and iterate over them using loops, just like with arrays. For example:

```js

for (var i = 0; i < arrayLike.length; i++) {
    console.log(arrayLike[i]);
}

```
Or, you can convert array-like objects into arrays using various methods such as Array.from() or by using the spread operator (...). This allows you to use array methods on them:

```js

var array = Array.from(arrayLike);
console.log(array); // ['apple', 'banana', 'orange']

// Using spread operator
var newArray = [...arrayLike];
console.log(newArray); // ['apple', 'banana', 'orange']


```

These techniques can be useful when dealing with objects that resemble arrays but don't have all the functionality of true arrays.

---

