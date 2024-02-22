## Module 31-2 Access Value, Nested Object, Optional Chaining

In JavaScript, the concept of accessing values from nested objects and using optional chaining is quite common, especially when dealing with potentially undefined or null properties within an object hierarchy.

Optional chaining, introduced in ECMAScript 2020, allows you to safely access deeply nested properties of an object without the risk of encountering errors if intermediate properties are null or undefined. This is particularly useful when working with APIs or data structures where not all properties are guaranteed to exist.

Here's a basic example:

```javascript
const obj = {
  prop1: {
    prop2: {
      prop3: 42
    }
  }
};

// Without optional chaining
const valueWithoutChaining = obj.prop1.prop2.prop3; // Could throw an error if any intermediate property is null or undefined

// With optional chaining
const valueWithChaining = obj.prop1?.prop2?.prop3; // Safely accesses the nested property, returns undefined if any intermediate property is null or undefined

console.log(valueWithoutChaining); // 42
console.log(valueWithChaining);    // 42
```

In the above example:

- `valueWithoutChaining` tries to access `prop3` directly from `obj.prop1.prop2`. If any intermediate property (`prop1`, `prop2`) were null or undefined, it would throw an error.
- `valueWithChaining`, however, uses optional chaining (`?.`) to safely access `prop3`. If any intermediate property is null or undefined, it returns `undefined` without throwing an error.

Optional chaining can also be used with function calls:

```javascript
const obj = {
  func1: function() {
    return {
      func2: function() {
        return {
          func3: function() {
            return 42;
          }
        };
      }
    };
  }
};

const result = obj.func1?.().func2?.().func3?.(); // Safely calls nested functions, returns undefined if any intermediate function is null or undefined

console.log(result); // 42
```

This feature simplifies code and makes it more resilient to unexpected null or undefined values within object hierarchies.

---

## Module 31-3 Array Map To Do One Line Loop Magic

In JavaScript, you can use the `Array.prototype.map()` method to transform each element of an array into a new value and return a new array with the transformed values. You can also write this in a single line using arrow functions for concise code.

Here's an example:

```javascript
const originalArray = [1, 2, 3, 4, 5];

// One-line map to double each element
const doubledArray = originalArray.map(num => num * 2);

console.log(doubledArray); // Output: [2, 4, 6, 8, 10]
```

In this example, `originalArray.map(num => num * 2)` iterates over each element of `originalArray`, doubling each value, and returns a new array with the doubled values.

You can perform various operations within the arrow function inside `map()` to achieve different transformations of array elements, all in one line.

---

