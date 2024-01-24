// routes 
import * as React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "./Components/LoginSignup/Login";
import Home from "./Screens/Home/Home";
import Signup from "./Components/LoginSignup/Signup";
import HomePage from "./Screens/HomePage";
import ErrorPage from "./Components/error-page";
import { Navigate } from "react-router-dom";

import InterviewPlatform from "./Screens/InterviewPlatform/InterviewingPlatfom";
// redux 
import { useDispatch } from "react-redux";
import { loadUser } from "./actions/authActions";
import { useEffect } from "react";
import { useSelector } from "react-redux";  


export const RequireAuth = ({ children }) => {
   
    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(loadUser());
    }
    , []);
    const auth = useSelector(state => state.auth);
    console.log("auth" ,  auth);
    if (!auth.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "platform",
        element : <InterviewPlatform/>,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Signup/>,
    },
    {
        path: "/dashboard",
        element: <RequireAuth><HomePage /></RequireAuth>,
        // element: <HomePage />,
    }

]);

export default router;