import * as React from "react";
import { useState } from 'react';
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);

    return (
        <div className="header">
            <div className="menu">
                <a href="">
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </a>
            </div>
            <div className="info">
                <div className="info-bg-1">
                </div>
                <div className="info-bg-2">
                    <a href="">
                        <FontAwesomeIcon icon={faUserCircle} size="lg"/>
                    </a>
                </div>
            </div>
        </div>
    );
}
