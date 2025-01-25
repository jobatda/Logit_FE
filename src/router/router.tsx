import {createBrowserRouter,} from "react-router-dom";
import {lazy, Suspense} from "react";
import Loading from "../pages/utilPages/Loading";

const Layout = lazy(() => import("../layout/Layout"));
const Main = lazy(() => import("../pages/main/Main"));

export const router = createBrowserRouter([
        {
            path: "/",
            element: <Suspense fallback={<Loading/>}><Layout/></Suspense>,
            children: [
                {
                    children: [
                        {index: true, element: <Main/>},
                        // {
                        //     path: "login",
                        //     element: <Login/>,
                        // },
                    ],
                }
            ],
        },
    ])
;