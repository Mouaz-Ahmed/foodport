import { createBrowserRouter } from "react-router-dom";
import About from "../pages/about/about";
import Home from "../pages/home/home"
import SignUp from "../pages/auth/sign-up";
import Contact from "../pages/contact/contact";

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