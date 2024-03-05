## React JS Installation With Vite

To install React.js with Vite, you can follow these steps:

1. **Initialize Your Project**: First, make sure you have Node.js installed on your system. Then, create a new directory for your project and navigate into it via your terminal or command prompt.

2. **Initialize npm Project**: Run the following command to initialize a new npm project:
   ```
   npm init -y
   ```

3. **Install Vite**: Install Vite globally using npm:
   ```
   npm install -g vite
   ```

4. **Create a React App**: Now, create a new React app using Vite. Run the following command:
   ```
   vite create my-react-app --template react
   ```

   Replace `my-react-app` with the name of your project.

5. **Navigate to the Project Directory**: Go to your project directory:
   ```
   cd my-react-app
   ```

6. **Start the Development Server**: Start the development server by running:
   ```
   npm run dev
   ```

7. **View Your App**: Open your web browser and go to `http://localhost:3000` to see your React app running.

That's it! You've successfully set up a React.js project with Vite. You can now start developing your application.


## FAQ : 

### How to terminate the dev process and return to work directory?

- just press ctrl + c and choose your preferences then enter.

### My react icon is not spinning what to do ?

try either (1) or (2)

- (1) How to fix and make the react logo spin -- by changing Windows system setting

Go to Window's Advanced setting system setting -> Performance Options, Check "Animate controls and elements inside windows" (As soon as you check this setting and apply, you can see the react logo start spinning.)

for more details : https://www.softwareok.com/?seite=faq-Windows-10&faq=10

- (2) remove the part that is affected in the code by the above setting (fix from inside css code)

Remove line 10 " (prefers-reduced-motion: no-preference) " from src/App.css

for more details: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion

Looks like method 2 always works no matter what animation settings you have on your system. But as a tutorial, you might want to avoid making changes to the original source code from the beginning.