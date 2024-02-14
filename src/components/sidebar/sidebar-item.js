import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import "./sidebar-item.css"
import {useState} from "react";
import {
    faAngleLeft, faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import SidebarItems from "./sidebar-items";

export default function SidebarItem(props) {
    const [open, setOpen] = useState(true)
    const {label, path, icon, children} = props.props
    const openClick = function (e) {
        setOpen(!open)
        e.preventDefault()
        e.stopPropagation();
    }
    let openCloseIcon;
    let subItems;
    if (children) {
        if (!open) {
            openCloseIcon = <span className="sub-icon"> <FontAwesomeIcon icon={faAngleLeft} size="lg" onClick={openClick}/></span>
        } else {
            openCloseIcon = <span className="sub-icon"> <FontAwesomeIcon icon={faAngleDown} size="lg" onClick={openClick}/></span>
        }

        if (open) {
            subItems = <SidebarItems items={children}/>
        }
    }
    return (
        <li>
            <NavLink to={`${path}`}>
                <span className="icon"><FontAwesomeIcon icon={icon} size="lg"/></span>
                <span>{label}</span>
                {openCloseIcon}
            </NavLink>
            {subItems}
        </li>
    );
}
