import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './assets/components/Home/Home';
import SignIn from './assets/components/SignIn/SignIn';
import SignUp from './assets/components/SignUp/SignUp';
import Root from './routes/Root';
import AuthProvider from './providers/AuthProvider';
import Orders from './assets/components/Orders/Orders';
import PrivateRoute from './routes/Private/PrivateRoute';
import History from './assets/components/History/History';
import Profile from './assets/components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/signIn",
        element: <SignIn />
      },
      {
        path: "/signUp",
        element: <SignUp />
      },
      {
        path: "/orders",
        element: <PrivateRoute><Orders /></PrivateRoute>
      },
      {
        path: "history",
        element: <PrivateRoute><History /></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile /></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
