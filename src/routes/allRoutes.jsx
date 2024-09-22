import React from "react";

const Home = React.lazy(() => import('../pages/home'))

export const publicRoutes = [
    {
        index: true,
        element: Home,
    }
]