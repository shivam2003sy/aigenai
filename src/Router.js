// routes 
import * as React from "react";
import {
    createBrowserRouter,
    redirect,
} from "react-router-dom";
import Login from "./Components/LoginSignup/Login";
import Home from "./Screens/Home/Home";
import Signup from "./Components/LoginSignup/Signup";
import HomePage from "./Screens/HomePage";
import ErrorPage from "./Components/error-page";
// interview
import InterviewPlatform from "./Screens/InterviewPlatform/InterviewingPlatfom";
import LobbyScreen from "./Screens/InterviewPlatform/videocall/LobbyScreen";
import RequireAuth from "./utils/RequireAuth";




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
        path: "lobby",
        element :<LobbyScreen/>,

    },
    {
        path: "/login",
        element:<Login />,
       
    },
    {
        path: "/register",
        element: <Signup/>,
    },
    {
        path: "/dashboard",
        element: <RequireAuth><HomePage /></RequireAuth>,
    }

]);

export default router;