import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import JobList from "../pages/JobList/JobList";
import AddJob from "../pages/AddJob/AddJob";
import JobDetails from "../pages/JobDetails/JobDetails";

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
            {
                path: "/joblist",
                element: <JobList></JobList>
            },
            {
                path: "/postJob",
                element:<AddJob></AddJob>
            },
            {
                path: "/jobDetails",
                element:<JobDetails></JobDetails>
            }
        ]
    },
]);

export default router;