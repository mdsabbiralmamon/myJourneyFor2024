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

