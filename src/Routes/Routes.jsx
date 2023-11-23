import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import JobList from "../pages/JobList/JobList";
import AddJob from "../pages/AddJob/AddJob";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },

            // private routes 
            {
                path: "/joblist",
                element: <PrivateRoute>
                    <JobList></JobList>
                </PrivateRoute>
            },
            {
                path: "/postJob",
                element: <PrivateRoute>
                    <AddJob></AddJob>
                </PrivateRoute>
            },
            {
                path: "/jobDetails",
                element: <PrivateRoute>
                    <JobDetails></JobDetails>
                </PrivateRoute>
            }
        ]
    },
]);

export default router;