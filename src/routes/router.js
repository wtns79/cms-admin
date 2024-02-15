import * as React from "react";
import {
    createBrowserRouter, redirect,
} from "react-router-dom";
import Root from "./root";
import ErrorPage from "../error-page";
import Main, {mainLoader} from "./main";
import LoginView, {loginLoader} from "../views/login-view";
import LogoutView, {logoutLoader} from "../views/logout-view";
import PageView from "../views/page-view";
import CategoryView from "../views/category-view";
import ContentView from "../views/content-view";
import MenuView from "../views/menu-view";
import MediaView from "../views/media-view";
import BlockView from "../views/block-view";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:"/",
                index:true,
                loader: () => redirect("/admin"),
            },{
                path:"admin",
                element: <Main />,
                // loader: mainLoader,
                children:[
                    {
                        path:"page",
                        element: <PageView/>,
                    },
                    {
                        path:"category",
                        element: <CategoryView/>,
                    },{
                        path:"content",
                        element: <ContentView/>,
                    },
                    {
                        path:"menu",
                        element: <MenuView/>,
                    },
                    {
                        path:"media",
                        element: <MediaView/>,
                    },
                    {
                        path:"block",
                        element: <BlockView/>,
                    }
                ]
            },
            {
                path: "logout",
                // loader: logoutLoader,
                element: <LogoutView />,
            },
            {
                path: "login",
                // loader: loginLoader,
                element: <LoginView />,
            }
        ]
    }
]);

export default router;