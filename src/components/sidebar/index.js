import * as React from "react";
import { useState } from 'react';
import "./sidebar.css";
import menuItems from "./menu-items";
import SidebarItems from "./sidebar-items";

export default function Sidebar() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);

    return (
        <nav className="sidebar">
            <header>
                <a href="/"></a>
            </header>
            <SidebarItems items={menuItems}/>
        </nav>
    );
}
