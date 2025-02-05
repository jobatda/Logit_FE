import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../pages/utilPages/Loading";

const Layout = lazy(() => import("../layout/Layout"));
const NoHeaderFooterLayout = lazy(() => import("../layout/NoHeaderFooterLayout"));
const Main = lazy(() => import("../pages/main/Main"));
const Thunder = lazy(() => import("../pages/thunder/Thunder"));
const PostDetail = lazy(() => import("../pages/thunder/components/Post/PostDetail"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loading />}><Layout /></Suspense>,
    children: [
      { index: true, element: <Suspense fallback={<Loading />}><Main /></Suspense> },
      {
        path: "thunder",
        element: <Suspense fallback={<Loading />}><Thunder /></Suspense>,
      },
    ],
  },
  {
    path: "thunder/:id",
    element: <Suspense fallback={<Loading />}><NoHeaderFooterLayout /></Suspense>,
    children: [
      {
        path: "",
        element: <Suspense fallback={<Loading />}><PostDetail /></Suspense>,
      },
    ],
  },
]);