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

