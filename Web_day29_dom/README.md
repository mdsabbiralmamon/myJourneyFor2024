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

## 🎃   24-3 Traversing Dom - GetElementByClass VS GetElementById

### GetElementByClass

The correct method to select elements by their class name in the DOM is getElementsByClassName(). This method returns a collection of all elements in the document that have the specified class name.

Here's how you can use getElementsByClassName():

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>getElementsByClassName Example</title>
    <style>
        .highlight {
            color: red;
        }
    </style>
</head>
<body>
    <h1 class="highlight">This is a highlighted heading.</h1>
    <p>This is a paragraph.</p>
    <div class="highlight">
        <p>This is another highlighted paragraph.</p>
    </div>
    <ul>
        <li class="highlight">Item 1</li>
        <li>Item 2</li>
        <li class="highlight">Item 3</li>
    </ul>

    <script>
        // Get all elements with the class "highlight"
        var highlightedElements = document.getElementsByClassName("highlight");
        
        // Loop through the collection and do something with each highlighted element
        for (var i = 0; i < highlightedElements.length; i++) {
            console.log(highlightedElements[i].textContent);
            // You can also manipulate each element here, for example:
            // highlightedElements[i].style.fontWeight = "bold";
        }
    </script>
</body>
</html>

```
In this example, getElementsByClassName("highlight") returns all elements with the class "highlight" in the document. Then, a loop iterates over each highlighted element, logging its textContent to the console. You can also perform other operations on these elements, such as changing their style or content.

### GetElementById : 

getElementById() is a method in the Document Object Model (DOM) API that allows you to select an element in the document by its unique ID attribute. It returns the element with the specified ID, or null if no such element exists.

Here's how you can use getElementById():

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>getElementById Example</title>
</head>
<body>
    <h1 id="heading">Hello, World!</h1>
    
    <script>
        // Get the element with the ID "heading"
        var headingElement = document.getElementById("heading");
        
        // Modify the element's content
        headingElement.textContent = "Welcome to my website!";
        
        // You can also manipulate other attributes or styles of the element
        headingElement.style.color = "blue";
    </script>
</body>
</html>

```

In this example, getElementById("heading") selects the element with the ID "heading" in the document, which is the `<h1>` element. Then, you can manipulate its content, attributes, or styles using JavaScript.

### when to use GetElementByClass and GetElementById

getElementById() and getElementsByClassName() are both methods in the Document Object Model (DOM) API used to select elements from a web page, but they serve different purposes based on the attributes they target:

- getElementById():

    - Purpose: This method is used to select a single element based on its unique ID attribute.
    - Usage: If you have an element with a unique identifier (ID) on your web page, you can use getElementById() to select it.
    - Return value: It returns the element with the specified ID or null if no such element exists.

- getElementsByClassName():

    - Purpose: This method is used to select multiple elements based on their class names.
    - Usage: If you have multiple elements with the same class name on your web page, you can use getElementsByClassName() to select all of them.
    - Return value: It returns a live HTMLCollection of elements with the specified class name.
    
When to use each method depends on your specific use case:

- Use getElementById() when you want to select a single element that has a unique identifier (ID). IDs should be unique within the document, so this method is suitable when you know there's only one element with a specific ID.

- Use getElementsByClassName() when you want to select multiple elements that share a common class name. This method is useful when you want to apply the same styles or behavior to multiple elements.

It's worth noting that there's also a newer method called querySelector() that can be used for more flexible element selection. With querySelector(), you can select elements using CSS-style selectors, allowing you to target elements based on IDs, classes, attributes, and more.

---

## 🎃   24-4 Traversing Dom - GetElementByQuerySelector, QuerySelectorAll

### QuerySelector

querySelector() is a method in the Document Object Model (DOM) API that allows you to select elements from a web page using CSS-style selectors. It returns the first element that matches the specified selector(s), or null if no such element is found.

Here's how you can use querySelector():

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>querySelector Example</title>
    <style>
        .highlight {
            color: red;
        }
    </style>
</head>
<body>
    <h1 class="highlight">This is a highlighted heading.</h1>
    <p>This is a paragraph.</p>
    <div class="highlight">
        <p>This is another highlighted paragraph.</p>
    </div>
    <ul>
        <li class="highlight">Item 1</li>
        <li>Item 2</li>
        <li class="highlight">Item 3</li>
    </ul>

    <script>
        // Get the first element with the class "highlight"
        var highlightedElement = document.querySelector(".highlight");
        
        // Do something with the selected element
        console.log(highlightedElement.textContent);
        // You can also manipulate the element here, for example:
        // highlightedElement.style.fontWeight = "bold";
    </script>
</body>
</html>

```

In this example, querySelector(".highlight") selects the first element with the class "highlight" in the document. Then, you can manipulate it or perform any desired actions. If you want to select multiple elements that match a selector, you can use querySelectorAll(), which returns a NodeList containing all matching elements.

### querySelectorAll()

querySelectorAll() is a method in the Document Object Model (DOM) API that allows you to select elements from a web page using CSS-style selectors. It returns a static NodeList containing all elements that match the specified selector(s).

Here's how you can use querySelectorAll():

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>querySelectorAll Example</title>
    <style>
        .highlight {
            color: red;
        }
    </style>
</head>
<body>
    <h1 class="highlight">This is a highlighted heading.</h1>
    <p>This is a paragraph.</p>
    <div class="highlight">
        <p>This is another highlighted paragraph.</p>
    </div>
    <ul>
        <li class="highlight">Item 1</li>
        <li>Item 2</li>
        <li class="highlight">Item 3</li>
    </ul>

    <script>
        // Get all elements with the class "highlight"
        var highlightedElements = document.querySelectorAll(".highlight");
        
        // Loop through the NodeList and do something with each matching element
        highlightedElements.forEach(function(element) {
            console.log(element.textContent);
            // You can also manipulate each element here, for example:
            // element.style.fontWeight = "bold";
        });
    </script>
</body>
</html>

```

In this example, querySelectorAll(".highlight") selects all elements with the class "highlight" in the document and returns a NodeList containing them. Then, you can iterate over the NodeList and manipulate each matching element as desired.

### HTMLCollection VS NodeList

Both HTMLCollection and NodeList are object types in the Document Object Model (DOM) API that represent collections of DOM nodes (elements). However, there are some differences between them:

- HTMLCollection:

    - Live Collection: HTMLCollection is a live collection, meaning it is automatically updated as the DOM changes. If elements are added or removed from the document after the HTMLCollection is created, the collection will reflect those changes automatically.
    - Accessing Elements: Elements in an HTMLCollection can be accessed using numeric indices or by their name or ID properties.
    - Specific to Certain DOM Structures: HTMLCollection is specific to certain DOM structures, such as those returned by methods like getElementsByTagName() or getElementsByClassName().
    - No forEach Method: HTMLCollection does not have a built-in forEach() method, so you may need to use a traditional for loop to iterate over its elements.

- NodeList:

    - Static Collection: NodeList is a static collection, meaning it does not automatically update as the DOM changes. It represents the state of the DOM at the time it was created.
    - Accessing Elements: Elements in a NodeList can be accessed using numeric indices.
    - Returned by Various Methods: NodeList can be returned by various methods, such as querySelectorAll() and properties like childNodes.
    - Has forEach Method: NodeList has a built-in forEach() method, which makes it easier to iterate over its elements.

Here's a brief comparison:

| Feature | HTMLCollection | NodeList |
| :---: | :---: | :---: |
| Live Collection | Yes | No |
| Accessing | By index, name, or ID | By index |
| Methods | Limited | forEach(), etc. |
| Returned by | getElementsByTagName(), etc | querySelectorAll(), childNodes, etc. |

In summary, HTMLCollection is more commonly associated with methods that return collections of elements based on specific criteria like tag name or class name, while NodeList is more versatile and can be returned by various methods and properties, offering more flexibility in traversing the DOM.

---

## 🎃   24-5 Dynamic Style, GetAttribute, SetAttribute, InnerText, InnerHTML

### Dynamic Style

Dynamic styling in web development refers to the ability to change the appearance of elements on a web page dynamically using JavaScript. This can be achieved by manipulating the style properties of DOM elements directly through JavaScript.

Here's a basic example demonstrating how to dynamically change the style of an HTML element using JavaScript:

HTML:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Style Example</title>
    <style>
        /* Default style */
        .box {
            width: 100px;
            height: 100px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div id="myBox" class="box"></div>

    <button onclick="changeColor()">Change Color</button>

    <script>
        function changeColor() {
            // Get the element by ID
            var box = document.getElementById("myBox");

            // Change the background color
            box.style.backgroundColor = "blue";
        }
    </script>
</body>
</html>

```

In this example:

- We have a `<div>` element with an ID of "myBox" and a class of "box". This element represents a box that we want to style dynamically.
- Initially, the box has a default red background color applied through CSS.
- There's a button labeled "Change Color". When clicked, it triggers the changeColor() function.
- Inside the changeColor() function, we use getElementById() to select the box element. Then, we use the style property to dynamically change its background color to blue.

This is just a basic example, but you can dynamically change various other style properties such as width, height, font size, position, etc., using similar techniques. Dynamic styling allows you to create interactive and visually appealing web applications.

### GetAttribute

getAttribute() is a method in the Document Object Model (DOM) API that allows you to retrieve the value of a specified attribute on an element. You can use it to get the value of any attribute of an HTML element, such as id, class, href, src, etc.

Here's how you can use getAttribute():

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>getAttribute Example</title>
</head>
<body>
    <a id="link" href="https://www.example.com">Example Link</a>

    <script>
        // Get the href attribute value of the link element
        var linkElement = document.getElementById("link");
        var hrefValue = linkElement.getAttribute("href");
        
        // Output the href value
        console.log(hrefValue); // Output: https://www.example.com
    </script>
</body>
</html>

```

In this example:

- We have an `<a>` (anchor) element with an id attribute set to "link" and an href attribute set to "https://www.example.com".
- Using JavaScript, we use getElementById() to select the anchor element.
- We then use getAttribute("href") to retrieve the value of the href attribute and store it in the hrefValue variable.
- Finally, we log the value of hrefValue to the console, which outputs "https://www.example.com".

You can use getAttribute() to retrieve the value of any attribute of an HTML element, allowing you to access and manipulate attributes dynamically in your JavaScript code.

### SetAttribute

setAttribute() is a method in the Document Object Model (DOM) API that allows you to set the value of a specified attribute on an element. You can use it to modify existing attributes or create new ones on HTML elements.

Here's how you can use setAttribute():

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>setAttribute Example</title>
</head>
<body>
    <div id="exampleDiv">Example</div>

    <script>
        // Get the div element by its ID
        var divElement = document.getElementById("exampleDiv");
        
        // Set a new attribute "data-example" with the value "123"
        divElement.setAttribute("data-example", "123");

        // Check if the attribute has been set
        var dataAttribute = divElement.getAttribute("data-example");
        console.log(dataAttribute); // Output: 123
    </script>
</body>
</html>

```

In this example:

- We have a `<div>` element with an ID attribute set to "exampleDiv".
- Using JavaScript, we use getElementById() to select the div element.
- We then use setAttribute("data-example", "123") to set a new attribute called "data-example" with the value "123" on the div element.
- Finally, we use getAttribute("data-example") to retrieve the value of the "data-example" attribute, and we log it to the console. The output will be "123".

You can use setAttribute() to dynamically add, modify, or remove attributes on HTML elements, providing flexibility in how you manipulate the DOM with JavaScript.


### InnerText VS InnerHTML

innerText and innerHTML are both properties of DOM elements in JavaScript, but they are used for different purposes and have different behaviors:

- innerText:

    - Purpose: innerText is used to get or set the text content of an element, including its descendants, but it does not return the HTML markup. It returns only the visible text within the element, excluding any hidden text or elements.

    - Usage: It's commonly used when you want to manipulate or retrieve text content within an element but do not need to deal with HTML markup.

Example:

```js 

var element = document.getElementById("example");
console.log(element.innerText); // Retrieves the text content
element.innerText = "New Text"; // Sets the text content


```
- innerHTML:

    - Purpose: innerHTML is used to get or set the HTML content of an element, including all its descendants. It returns the HTML markup as a string, which means it also includes any HTML tags inside the element.

    - Usage: It's commonly used when you want to manipulate or retrieve the HTML content within an element, including both text and HTML markup.

Example:

```js

var element = document.getElementById("example");
console.log(element.innerHTML); // Retrieves the HTML content
element.innerHTML = "<strong>New Content</strong>"; // Sets the HTML content

```

In summary, innerText deals with the text content only and ignores any HTML markup, while innerHTML includes both text and HTML markup. Use innerText when you're working with text content and don't need to handle HTML markup, and use innerHTML when you need to manipulate or retrieve both text and HTML content of an element. However, note that setting innerHTML can potentially lead to security risks if the content is not sanitized properly, as it allows executing arbitrary HTML and scripts.

