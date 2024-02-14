import {Outlet} from "react-router-dom";
import Sidebar from "../components/sidebar/index";
import Header from "../components/header";
import "../assets/layout.css";
import React from "react";

export async function mainLoader() {

}


export default function Main() {
    return (
        <>
            <div className="ct-sidebar">
                <Sidebar/>
            </div>
            <div className="ct-content-wrap">
                <div className="ct-header">
                    {/*<Header/>*/}
                </div>
                <div id="detail" className="ct-content">
                    <Outlet/>
                </div>
            </div>
        </>
    );
}