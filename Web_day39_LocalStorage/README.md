## 36_5-1 Set And Read Simple Value From Local Storage

To set and read a simple value from local storage in JavaScript, you can use the `localStorage` object. Here's how you can do it:

Setting a value:
```javascript
// Set a value in local storage
localStorage.setItem('myValue', 'Hello, World!');
```

Reading a value:
```javascript
// Get a value from local storage
var storedValue = localStorage.getItem('myValue');
console.log(storedValue); // Output: Hello, World!
```

Remember that the data stored in `localStorage` persists even after the browser is closed and reopened. However, it's worth noting that this data is only accessible from the same origin that stored it. Also, make sure to handle cases where local storage may not be available, such as in private browsing mode or when the user has disabled storage.

## To set and get objects to and from local storage in JavaScript, you need to serialize the objects into JSON format before storing them, and deserialize them back into JavaScript objects after retrieving them from local storage. Here's how you can do it:

Setting an object:
```javascript
// Define an object
var myObject = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Serialize the object to JSON and set it in local storage
localStorage.setItem('myObject', JSON.stringify(myObject));
```

Getting an object:
```javascript
// Retrieve the serialized object from local storage
var storedObject = localStorage.getItem('myObject');

// Deserialize the JSON string back into a JavaScript object
var retrievedObject = JSON.parse(storedObject);

// Now you can access properties of the retrieved object
console.log(retrievedObject.name); // Output: John
console.log(retrievedObject.age); // Output: 30
console.log(retrievedObject.city); // Output: New York
```

Remember that when you store an object in local storage, it's converted to a string representation using `JSON.stringify()`, and when you retrieve it, you need to convert it back to an object using `JSON.parse()`.

## 36_5-3 A Simple Shopping Cart To Add Product And Quantity

Here's a simple example of a shopping cart in JavaScript where you can add products along with their quantities:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Simple Shopping Cart</title>
</head>
<body>
  <h1>Simple Shopping Cart</h1>
  
  <div id="products">
    <h2>Products</h2>
    <ul id="product-list">
      <!-- Product items will be dynamically added here -->
    </ul>
  </div>

  <div id="cart">
    <h2>Cart</h2>
    <ul id="cart-items">
      <!-- Cart items will be dynamically added here -->
    </ul>
    <button onclick="checkout()">Checkout</button>
  </div>

  <script>
    // Sample products
    const products = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 }
    ];

    // Initialize cart
    let cart = [];

    // Function to add a product to the cart
    function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      if (product) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
          cartItem.quantity++;
        } else {
          cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
        }
        renderCart();
      }
    }

    // Function to render products
    function renderProducts() {
      const productList = document.getElementById('product-list');
      productList.innerHTML = '';
      products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        const button = document.createElement('button');
        button.textContent = 'Add to Cart';
        button.onclick = () => addToCart(product.id);
        li.appendChild(button);
        productList.appendChild(li);
      });
    }

    // Function to render cart
    function renderCart() {
      const cartItems = document.getElementById('cart-items');
      cartItems.innerHTML = '';
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Quantity: ${item.quantity} - Total: $${item.price * item.quantity}`;
        cartItems.appendChild(li);
      });
    }

    // Function to checkout
    function checkout() {
      alert('Checkout complete!');
    }

    // Initialize the page
    renderProducts();
    renderCart();
  </script>
</body>
</html>
```

This example consists of a list of products with "Add to Cart" buttons next to each product. Clicking the "Add to Cart" button will add the respective product to the shopping cart. The shopping cart will display the added items along with their quantities and total prices.

## 36_5-4 (Advanced) Local Storage Interactions For A Shopping Cart

To implement local storage interactions for a shopping cart, you need to save the state of the cart in the local storage whenever it's modified, and load the cart state from local storage when the page is loaded. Here's an advanced example demonstrating these interactions:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Shopping Cart with Local Storage</title>
</head>
<body>
  <h1>Shopping Cart with Local Storage</h1>
  
  <div id="products">
    <h2>Products</h2>
    <ul id="product-list">
      <!-- Product items will be dynamically added here -->
    </ul>
  </div>

  <div id="cart">
    <h2>Cart</h2>
    <ul id="cart-items">
      <!-- Cart items will be dynamically added here -->
    </ul>
    <button onclick="checkout()">Checkout</button>
  </div>

  <script>
    // Sample products
    const products = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 }
    ];

    // Initialize cart from local storage or as an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to add a product to the cart
    function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      if (product) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
          cartItem.quantity++;
        } else {
          cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
        }
        renderCart();
        saveCart();
      }
    }

    // Function to render products
    function renderProducts() {
      const productList = document.getElementById('product-list');
      productList.innerHTML = '';
      products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        const button = document.createElement('button');
        button.textContent = 'Add to Cart';
        button.onclick = () => addToCart(product.id);
        li.appendChild(button);
        productList.appendChild(li);
      });
    }

    // Function to render cart
    function renderCart() {
      const cartItems = document.getElementById('cart-items');
      cartItems.innerHTML = '';
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Quantity: ${item.quantity} - Total: $${item.price * item.quantity}`;
        cartItems.appendChild(li);
      });
    }

    // Function to save cart state to local storage
    function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Function to checkout
    function checkout() {
      alert('Checkout complete!');
    }

    // Initialize the page
    renderProducts();
    renderCart();
  </script>
</body>
</html>
```

In this example, the `addToCart()` function now saves the cart state to local storage after modifying it, and the initial state of the cart is loaded from local storage if it exists. This ensures that the cart's contents persist across page reloads.

