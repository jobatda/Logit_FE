import {createBrowserRouter} from "react-router-dom";
import {lazy, Suspense} from "react";
import Loading from "../pages/utilPages/Loading";

const Layout = lazy(() => import("../layout/Layout"));
const PostDetail = lazy(() => import("../pages/thunder/components/Post/PostDetail.tsx"));
const Main = lazy(() => import("../pages/main/Main"));
const Thunder = lazy(() => import("../pages/thunder/Thunder"));
const RegionMap = lazy(() => import("../pages/regionMap/RegionMap.tsx"));
const Feed = lazy(() => import("../pages/feed/Feed.tsx"));
const FeedScroll = lazy(() => import("../pages/feed/FeedScroll.tsx"));

export const router = createBrowserRouter([
        {
            path: "/",
            element: <Suspense fallback={<Loading/>}><Layout/></Suspense>,
            children: [
                {
                    children: [
                        {index: true, element: <Main/>},
                        {
                            path: "thunder",
                            element: <Suspense fallback={<Loading/>}><Thunder/></Suspense>,
                        },
                        {
                            path: "thunder/:id",
                            element: <Suspense fallback={<Loading/>}><PostDetail/></Suspense>,
                        },
                        {
                            path: "regionMap",
                            element: <RegionMap/>,
                        },
                        {
                            path: "feed",
                            element: <Feed/>,
                        },
                        {
                            path: "feed/scroll",
                            element: <FeedScroll/>,
                        },
                    ],
                }
            ],
        },
    ])
;
