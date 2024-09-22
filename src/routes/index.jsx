import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./allRoutes";
import Layout from "../layouts";
import Loader from "../components/loader";

const createRoutesElements = (element) => {
    const Element = element;
    return(
        <React.Suspense fallback={<Loader />}>
            <Element />
        </React.Suspense>
    )
}

export const createRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: publicRoutes.map(({index, path, element}) => ({
            ...(index ? {index} : {path}),
            element: createRoutesElements(element),
        }))
    }
])