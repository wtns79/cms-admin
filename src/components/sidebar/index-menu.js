import { useState } from 'react';
import "./sidebar.css";
import items from "./menu-items";
import {Menu} from "antd";

export default function Sidebar() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
        />
    );
}
