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

## 