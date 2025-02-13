import {createBrowserRouter} from "react-router-dom";
import {lazy, Suspense} from "react";
import Loading from "../pages/utilPages/Loading";

const Layout = lazy(() => import("../layout/Layout"));
const PostDetail = lazy(() => import("../pages/thunder/components/PostDetail/PostDetail.tsx"));
const PostDetailMembers = lazy(() => import("../pages/thunder/components/PostDetailMembers/PostDetailMembers.tsx"));
const Main = lazy(() => import("../pages/main/Main"));
const Thunder = lazy(() => import("../pages/thunder/Thunder"));
const RegionMap = lazy(() => import("../pages/regionMap/RegionMap.tsx"));
const Feed = lazy(() => import("../pages/feed/Feed.tsx"));
const FeedScroll = lazy(() => import("../pages/feed/FeedScroll.tsx"));
const Login = lazy(() => import("../pages/login/Login.tsx"));
const MyPage = lazy(() => import("../pages/myPage/MyPage.tsx"));
const AiTripPlan = lazy(() => import("../pages/aiTripPlan/AiTripPlan.tsx"));
const ThunderCreate = lazy(() => import("../pages/thunder/thunderCreate/ThunderCreate.tsx"));
const Alarm = lazy(() => import("../pages/alarm/Alarm.tsx"));

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
                            element: <Thunder/>
                        },
                        {
                            path: "thunder/:id",
                            element: <PostDetail/>
                        },
                        {
                            path: "thunder/:id/members",
                            element: <PostDetailMembers/>
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
                        {
                            path: "login",
                            element: <Login/>,
                        },
                        {
                            path: "mypage",
                            element: <MyPage/>,
                        },
                        {
                            path: "aitripplan",
                            element: <AiTripPlan/>,
                        },
                        {
                            path: "thunder/create",
                            element: <ThunderCreate/>,
                        },
                        {
                            path: "alarm",
                            element: <Alarm/>,
                        },
                    ],
                }
            ],
        },
    ])
;
