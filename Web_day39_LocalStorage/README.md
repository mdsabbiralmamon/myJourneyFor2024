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

