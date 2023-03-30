import React from 'react';
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import {Routes, Route} from "react-router-dom";
import Header from "./Header";

const RoutesComp = () => {

    const routesInHeader = [
        {
            path: '/',
            element: <Home/>,

        },
        {
            path: '/dest',
            element: <Destination/>,

        },
        {
            path: '/crew',
            element: <Crew/>,

        },
        {
            path: '/tech',
            element: <Technology/>,

        }
    ]



    return (

        <Routes>
            {routesInHeader.map((route) =>
                <Route path={route.path} key={route.path} element={
                    <>
                        <Header/>
                        {route.element}
                    </>
                }/>
            )}
        </Routes>
    );
};

export default RoutesComp;