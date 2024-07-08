import {
  createBrowserRouter,
} from "react-router-dom";
import Home from '../Page/Home/Home/Home';
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Main from "../Layout/Main";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  },
]);