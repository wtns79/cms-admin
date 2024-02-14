import * as React from "react";
import router from "./routes/router";
import {
    RouterProvider
} from "react-router-dom";

import 'antd/dist/reset.css';
import "./App.css";
import "./assets/inputs.css";

export default function App() {
    return (
        <RouterProvider router={router} />
    );
}
