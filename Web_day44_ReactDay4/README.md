## 41-1 Module Introduction ES6 Modules Simple Import, Export

In JavaScript, ES6 introduced the concept of modules, which allows you to split your code into multiple files and organize it better. Modules provide a way to encapsulate code and only expose the parts that need to be accessed from the outside. This helps in maintaining a clean and scalable codebase.

Here's a simple example of how you can use ES6 modules with import and export statements:

Let's say you have two files, `module1.js` and `module2.js`.

In `module1.js`, you might have:

```javascript
// module1.js
export const hello = () => {
  console.log("Hello from module1!");
};

export const foo = () => {
  console.log("foo function from module1");
};
```

In `module2.js`, you can import and use the exported functions from `module1.js`:

```javascript
// module2.js
import { hello, foo } from './module1.js';

hello(); // Output: Hello from module1!
foo();   // Output: foo function from module1
```

In the above example:

- `export` keyword is used to export specific variables, functions, or objects from a module.
- `import` statement is used to import the exported members into another module.
- `{}` braces are used to specify the specific members to import.
- `./module1.js` is the relative path to the module file you want to import from.

Remember, for this to work, you need to use a module-aware environment. In web development, you typically use a module bundler like Webpack or a module loader like SystemJS. Additionally, make sure your script tags have the `type="module"` attribute when using ES6 modules in browser-based applications.

That's a brief overview of ES6 modules and how to use them with simple import and export statements.

---