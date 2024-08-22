import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/index";
import Home from "../pages/Home/index";
import SignUp from "../pages/auth/sign-up";
import Contact from "../pages/Contact/index";

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '/contact',
        element: <Contact></Contact>
    },
    {
        path: '/auth/sign-up',
        element: <SignUp></SignUp>
    }
])