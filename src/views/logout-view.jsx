import {redirect} from "react-router-dom";
import "../assets/layout.css";
import React from "react";
import TokenService from "../service/token";

export async function logoutLoader() {
    TokenService.logout()
    return redirect("/login");
}


export default function LogoutView() {
    return (
        <>
            <div>Logout</div>
        </>
    );
}