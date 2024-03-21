## 46-1 Handle Form With OnSubmit And Access Field Data

To handle form submission with Vite and React, you can follow a similar approach as the one outlined above, but using React syntax and components. Here's how you can do it:

First, make sure you have a Vite project set up with React. If you haven't set up a Vite project with React yet, you can do so by following the Vite documentation: https://vitejs.dev/guide/#scaffolding-your-first-vite-project

Once your Vite project with React is set up, you can create a component for your form. Let's call it `FormComponent.js`:

```jsx
// FormComponent.js
import React, { useState } from 'react';

function FormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can perform additional actions here, such as sending data to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label><br />
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br />
      <label htmlFor="email">Email:</label><br />
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
```

In this component:

- We use the `useState` hook to manage the form data.
- `handleChange` function updates the form data as the user types.
- `handleSubmit` function is called when the form is submitted, preventing the default form submission behavior and logging the form data.

Now, you can import and use `FormComponent` in your main application file (`App.js`, for example):

```jsx
// App.js
import React from 'react';
import FormComponent from './FormComponent';

function App() {
  return (
    <div>
      <h1>Form Submission Example</h1>
      <FormComponent />
    </div>
  );
}

export default App;
```

Make sure to import and use the necessary React components and hooks in your project.

With this setup, you have a form component in a Vite React project that handles form submission and accesses field data using React state and event handling.


---

## 46-2 Form With State To Get Value And Set Default Value

To create a form with state in React to get field values and set default values, you can use the useState hook to manage the form state. Here's an example of how you can achieve this:

```jsx
import React, { useState } from 'react';

function FormWithState() {
  // Define state variables for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // Function to handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can perform additional actions here, such as sending data to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label><br />
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br />
      <label htmlFor="email">Email:</label><br />
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormWithState;
```

In this example:

- We use the `useState` hook to define state variables `formData`, which holds the values of the form fields.
- The `handleChange` function updates the `formData` state whenever a user types into the input fields.
- The `handleSubmit` function is called when the form is submitted, preventing the default form submission behavior and logging the form data.

To set default values for the form fields, you can initialize the state with the default values:

```jsx
const [formData, setFormData] = useState({
  name: 'John Doe',
  email: 'john@example.com'
});
```

With this setup, the form will render with the default values provided. Users can then modify these values, and the form state will update accordingly. When the form is submitted, you can access the submitted values from the `formData` state.

---

## 46-2 Form With State To Get Value And Set Default Value

Certainly! Here's an example of a React component using state to manage form data, including setting default values:

```jsx
import React, { useState } from 'react';

function FormWithState() {
  // Define state variables for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // Function to handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can perform additional actions here, such as sending data to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label><br />
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br />
      <label htmlFor="email">Email:</label><br />
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormWithState;
```

In this code:

- We use the `useState` hook to define state variables `formData`, which holds the values of the form fields.
- The `handleChange` function updates the `formData` state whenever a user types into the input fields.
- The `handleSubmit` function is called when the form is submitted, preventing the default form submission behavior and logging the form data.

To set default values for the form fields, you can initialize the state with the default values:

```jsx
const [formData, setFormData] = useState({
  name: 'John Doe',
  email: 'john@example.com'
});
```

This will set the default values for the form fields. Users can then modify these values, and the form state will update accordingly. When the form is submitted, you can access the submitted values from the `formData` state.


---


## 46-3 Explore Ref And Controlled And Uncontrolled Components

In React, there are two main ways to manage form inputs: controlled components and uncontrolled components. Additionally, React's `ref` feature allows you to directly access and manipulate DOM elements. Let's explore each of these concepts:

1. **Controlled Components**:
   - Controlled components are React components where form data is handled by React state.
   - The value of the input field is controlled by React state, and changes to the input are handled by React event handlers.
   - This approach gives React full control over the form data, making it easier to implement features like validation and dynamic changes.
   - Example:
     ```jsx
     import React, { useState } from 'react';

     function ControlledComponent() {
       const [value, setValue] = useState('');

       const handleChange = (event) => {
         setValue(event.target.value);
       };

       return (
         <input type="text" value={value} onChange={handleChange} />
       );
     }

     export default ControlledComponent;
     ```

2. **Uncontrolled Components**:
   - Uncontrolled components leave form data handling to the DOM.
   - The value of the input field is managed by the DOM itself, and you use `ref` to access the input's current value when needed.
   - Uncontrolled components are often used when integrating with third-party libraries or when you need to work with legacy code.
   - Example:
     ```jsx
     import React, { useRef } from 'react';

     function UncontrolledComponent() {
       const inputRef = useRef(null);

       const handleClick = () => {
         console.log('Input value:', inputRef.current.value);
       };

       return (
         <>
           <input type="text" ref={inputRef} />
           <button onClick={handleClick}>Get Value</button>
         </>
       );
     }

     export default UncontrolledComponent;
     ```

3. **Refs**:
   - Refs in React provide a way to directly access and interact with DOM elements.
   - They can be used with both controlled and uncontrolled components.
   - Refs are created using the `useRef` hook or by using `React.createRef()` in class components.
   - Example:
     ```jsx
     import React, { useRef } from 'react';

     function RefComponent() {
       const inputRef = useRef(null);

       const focusInput = () => {
         inputRef.current.focus();
       };

       return (
         <>
           <input type="text" ref={inputRef} />
           <button onClick={focusInput}>Focus Input</button>
         </>
       );
     }

     export default RefComponent;
     ```

Each approach has its use cases, and the choice between controlled and uncontrolled components depends on your specific requirements and preferences. Controlled components provide more control and better integration with React, while uncontrolled components can be simpler and more suitable for certain scenarios. Refs offer a way to interact with DOM elements directly, which can be useful for various tasks such as focusing elements or accessing their values.


---


## 46-4 Custom Hook And Create Your First Custom Hook

Creating custom hooks in React allows you to encapsulate logic and reuse it across different components. Let's create a simple custom hook that manages the state of a form input:

```jsx
import { useState } from 'react';

// Custom hook for managing form input state
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  // Function to handle changes in input value
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Function to reset the input value
  const reset = () => {
    setValue(initialValue);
  };

  // Return value and change handler
  return {
    value,
    onChange: handleChange,
    reset
  };
}

export default useFormInput;
```

Now, let's use this custom hook in a component:

```jsx
import React from 'react';
import useFormInput from './useFormInput';

function MyComponent() {
  // Using the custom hook to manage input state
  const nameInput = useFormInput('');
  const emailInput = useFormInput('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", nameInput.value);
    console.log("Email:", emailInput.value);
    // You can perform additional actions here, such as sending data to a server

    // Reset form inputs after submission
    nameInput.reset();
    emailInput.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label><br />
      <input type="text" id="name" {...nameInput} /><br />
      <label htmlFor="email">Email:</label><br />
      <input type="email" id="email" {...emailInput} /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyComponent;
```

In this example:

- We define a custom hook `useFormInput` that manages the state of a form input.
- The custom hook returns an object containing the input value, a change handler (`onChange`), and a reset function.
- We use the `useFormInput` hook in the `MyComponent` component to manage the state of the name and email inputs.
- We spread the returned object (`nameInput` and `emailInput`) onto the respective input elements, which binds the input value and change handler.
- When the form is submitted, we access the input values from the custom hook's state, and after submission, we reset the input values using the `reset` function provided by the custom hook.

This is a basic example of how you can create and use a custom hook in React to manage form input state. Custom hooks allow you to encapsulate reusable logic and keep your components clean and focused on rendering UI.

---

## 