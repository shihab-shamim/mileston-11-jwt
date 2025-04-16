
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Abouts from "../Pages/Abouts";
import LogIn from "../Pages/LogIn";
import Signup from "../Pages/Signup";
import Service from "../Pages/Service";
import CheckOut from "../Pages/CheckOut";
import PrivateRoute from "../Pages/private/PrivateRoute";
import Booking from "../Pages/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:"/about",
          element:<Abouts/>
        },

        {
          path:"/login",
          element:<LogIn/>
        },
        {
          path:"/signup",
          element:<Signup/>
        },
        {
          path:"/service",
          element:<Service/>
        },
        {
          path:"/checkout/:id",
          element:<PrivateRoute><CheckOut/></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:"/bookings",
          element:<PrivateRoute><Booking/></PrivateRoute>
        }
    ]
  },
]);

export default router;