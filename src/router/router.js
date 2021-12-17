import React from "react";
import {useRoutes} from "react-router-dom";
import Home from "../pages/home/home";
import Blog from "../pages/blog/blog";

const Route = () => {
    let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "blog", element: <Blog /> },
    ]);
    return (
        <div>
            {routes||<h1>404 NOT FOUND</h1>}
        </div>
    );
};
export default Route;