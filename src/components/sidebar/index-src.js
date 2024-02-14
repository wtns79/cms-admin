import { useState } from 'react';
import "./sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeSimpleHigh, faFolder, faGear, faUsers, faChartColumn, faBook, faSquare, faUserGroup, faBuilding } from '@fortawesome/free-solid-svg-icons';
import {Link, NavLink} from "react-router-dom";

export default function Sidebar() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);

    return (
        <nav className="sidebar">
            <header>
                <a href="/"></a>
            </header>
            <ul>
                <li>
                    <NavLink to={`info-panel`}>
                        <span className="icon"><FontAwesomeIcon icon={faGaugeSimpleHigh} size="lg"/></span>
                        <span>Информационная панель</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`buildings`}>
                        <span className="icon"><FontAwesomeIcon icon={faBuilding} size="lg"/></span>
                        <span>Здания</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`floors`}>
                        <span className="icon"><FontAwesomeIcon icon={faBuilding} size="lg"/></span>
                        <span>Этажи</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`rooms`}>
                        <span className="icon"><FontAwesomeIcon icon={faBuilding} size="lg"/></span>
                        <span>Помещения</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`contracts`}>
                        <span className="icon"><FontAwesomeIcon icon={faFolder} size="lg"/></span>
                        <span>Договора</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`contragents`}>
                        <span className="icon"><FontAwesomeIcon icon={faUserGroup} size="lg"/></span>
                        <span>Контрагенты</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`squares`}>
                        <span className="icon"><FontAwesomeIcon icon={faSquare} size="lg"/></span>
                        <span>Площади Аренды</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`reports`}>
                        <span className="icon"><FontAwesomeIcon icon={faBook} size="lg"/></span>
                        <span>Отчеты</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`statistics`}>
                        <span className="icon"><FontAwesomeIcon icon={faChartColumn} size="lg"/></span>
                        <span>Статистические данные</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`users`}>
                        <span className="icon"><FontAwesomeIcon icon={faUsers} size="lg"/></span>
                        <span>Управление пользователями</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`settings`}>
                        <span className="icon"><FontAwesomeIcon icon={faGear} size="lg"/></span>
                        <span>Настройки</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
