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

