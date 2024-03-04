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

## 