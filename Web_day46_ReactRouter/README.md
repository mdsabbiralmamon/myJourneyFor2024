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

