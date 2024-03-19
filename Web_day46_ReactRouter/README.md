## Intro to react router

React Router is a powerful library for handling routing in React applications. Routing is the process of determining which UI component should be displayed in response to a change in the browser's URL. React Router enables developers to create single-page applications with multiple views, allowing users to navigate through different pages without the need for full-page refreshes.

Here's a brief introduction to some key concepts and components of React Router:

### 1. **BrowserRouter and HashRouter:**
   - **BrowserRouter**: Uses HTML5 history API to keep the UI in sync with the URL.
   - **HashRouter**: Uses URL hash to keep the UI in sync with the URL. Useful for environments where server configuration isn't possible.

### 2. **Route:**
   - The core building block of React Router.
   - Renders UI components based on the URL path.
   - Example: 
     ```jsx
     <Route path="/about" component={About} />
     ```

### 3. **Switch:**
   - Renders only the first matching Route or Redirect inside it.
   - Helps in preventing multiple Route components from rendering at the same time.
   - Example:
     ```jsx
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/about" component={About} />
       <Route path="/contact" component={Contact} />
     </Switch>
     ```

### 4. **Link and NavLink:**
   - **Link**: Provides declarative navigation around your application.
   - **NavLink**: Similar to Link but allows adding styles to the active link based on the current URL.
   - Example:
     ```jsx
     <Link to="/about">About</Link>
     <NavLink to="/about" activeClassName="active">About</NavLink>
     ```

### 5. **Redirect:**
   - Redirects to a specified route.
   - Useful for handling authentication and conditional redirects.
   - Example:
     ```jsx
     <Redirect from="/old-url" to="/new-url" />
     ```

### 6. **Nested Routing:**
   - Allows for nested UI components to have their own set of routes.
   - Useful for creating complex layouts and nested views.
   - Example:
     ```jsx
     <Route path="/products" component={Products}>
       <Route path="/products/:id" component={ProductDetails} />
     </Route>
     ```

React Router provides a flexible and declarative way to handle routing in React applications, making it easier to manage navigation and state changes based on the URL. It's widely used in building modern web applications and is well-supported by the React community.

---

## 45-1 What Is SPA, Routing And React Router Setup

**Single Page Application (SPA):**

A Single Page Application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. SPAs use AJAX and HTML5 to create fluid and responsive web apps, allowing for a smoother user experience similar to that of desktop applications.

Key characteristics of SPAs include:

1. **Dynamic Loading:** SPAs load content dynamically, typically using JavaScript frameworks like React, Angular, or Vue.js, which handle rendering and updating of views.

2. **Client-Side Rendering:** Rendering of content primarily happens on the client side, reducing the need for server round-trips.

3. **Single Initial Page Load:** SPAs load a single HTML page initially and then dynamically update its contents as the user interacts with the application.

4. **Smooth Navigation:** Since only parts of the page are updated, navigation within the application feels seamless and faster compared to traditional multi-page applications.

**Routing:**

Routing in web development refers to the process of determining how an application responds to a client request to a particular endpoint, URI, or URL. In the context of Single Page Applications (SPAs), routing refers to managing the client-side navigation within the application without causing a full page refresh. It involves mapping URLs to specific components or views within the application.

**React Router Setup:**

To set up routing in a React application using React Router, you typically follow these steps:

1. **Install React Router:** You can install React Router using npm or yarn:
   ```bash
   npm install react-router-dom
   ```
   or
   ```bash
   yarn add react-router-dom
   ```

2. **Import Necessary Components:** Import the necessary components from React Router in your application file where you want to set up routing. Commonly used components include `BrowserRouter`, `Route`, `Switch`, `Link`, `NavLink`, `Redirect`, etc.

3. **Wrap Your App with BrowserRouter (or HashRouter):** Wrap your entire application with `BrowserRouter` (or `HashRouter` if you prefer hash-based routing). This component provides the router context to your application.

4. **Define Routes:** Define the routes for your application using the `Route` component. Specify the path and corresponding component to be rendered when that path matches the current URL.

5. **Use Navigation Components:** Use `Link` or `NavLink` components to create links for navigation between different views within your application.

6. **Handle Route Switching:** Use the `Switch` component to ensure that only the first matching route is rendered. This prevents multiple routes from being rendered simultaneously.

Here's a basic example of setting up routing in a React application using React Router:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```

In this example, `BrowserRouter` is used as the router, and three routes (`/`, `/about`, `/contact`) are defined using the `Route` component. `Link` components are used for navigation between different views. The `Switch` component ensures that only one route is matched and rendered at a time.

---

## 