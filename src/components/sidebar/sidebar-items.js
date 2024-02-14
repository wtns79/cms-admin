import * as React from "react";
import "./sidebar-items.css"
import SidebarItem from "./sidebar-item";

export default function SidebarItems({items}) {
    const menuItems = items.map(m => <SidebarItem key={'mk-'+m.key} props={m}/>)
    return (
        <ul>
            {menuItems}
        </ul>
    );
}
