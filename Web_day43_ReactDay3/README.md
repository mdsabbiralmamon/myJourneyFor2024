## 40-1 Module Introduction, Load Countries Using UseEffect

To accomplish the task of loading countries using the `useEffect` hook in a React component, you would typically follow these steps:

1. Set up your React component.
2. Use the `useEffect` hook to fetch data from the provided API endpoint.
3. Store the fetched data in component state.
4. Render the data in your JSX.

Here's a basic example of how you can achieve this:

```jsx
import React, { useState, useEffect } from 'react';

function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch data function when component mounts
    fetchData();

    // Cleanup function (optional)
    return () => {
      // You can do cleanup here if needed
    };
  }, []); // Empty dependency array means this effect will only run once on component mount

  return (
    <div>
      <h1>List of Countries</h1>
      <ul>
        {countries.map(country => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
```

Explanation:

- We import `useState` and `useEffect` from React.
- Inside the `CountryList` component, we define `countries` state using `useState`. This state will hold the array of country data fetched from the API.
- We use the `useEffect` hook to perform side effects in function components. In this case, we fetch data from the API when the component mounts.
- We define an async function `fetchData` to fetch data from the API endpoint. We use `fetch` to make an HTTP request and `await` to wait for the response. Once the response is received, we parse it using `.json()` and update the `countries` state with the fetched data.
- We use a `try...catch` block to handle any errors that might occur during the fetching process.
- We return a cleanup function inside the `useEffect` hook. This cleanup function is optional but can be used to perform cleanup tasks when the component unmounts or before the effect runs again.
- In the JSX, we map through the `countries` array and render a list of country names using `<li>` elements.

Make sure to adjust the code according to your specific requirements and project structure.

---