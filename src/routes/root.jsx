import {Outlet, useNavigate} from "react-router-dom";
import "../assets/layout.css";
import React from "react";

export default function Root() {
    return (
        <>
            <Outlet/>
        </>
    );
}