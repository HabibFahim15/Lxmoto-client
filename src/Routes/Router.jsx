import {
  createBrowserRouter,
} from "react-router-dom";
import Home from '../Page/Home/Home/Home';
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import SignUp from "../Page/Authentication/SignUp/SignUp";
import SignIn from "../Page/Authentication/SignIn/SignIn";
import AllBike from "../Page/AllBike/AllBike";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/signin',
        element:<SignIn></SignIn>
      },
      {
        path: 'allbike',
        element: <AllBike></AllBike>
      }
    ] 
  },
]);