
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Abouts from "../Pages/Abouts";
import LogIn from "../Pages/LogIn";
import Signup from "../Pages/Signup";
import Service from "../Pages/Service";

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
        }
    ]
  },
]);

export default router;