import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Jobs from './components/Jobs/Jobs';
import Statistics from './components/Statistics/Statistics';
import Applied from './components/Applied/Applied';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/jobs",
        element: <Jobs />
      },
      {
        path: "/",
        element: <Statistics />
      },
      {
        path: "/applied",
        element: <Applied />,
        loader: () => fetch('/jobs.json')
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch('../jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
