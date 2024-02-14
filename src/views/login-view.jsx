import * as React from "react";
import Login from "../components/login";
import TokenService from "../service/token";
import {redirect} from "react-router-dom";

export async function loginLoader() {
    TokenService.logout()
    const valid = TokenService.valid();
    if (valid) {
        return redirect("/");
    }
    return null;
}

export default function LoginView() {
    return (
        <LoginView/>
    );
}
