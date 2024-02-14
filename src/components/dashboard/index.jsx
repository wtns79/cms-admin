import React, {useEffect, useState} from "react";
import './style.css'
import {useNavigate} from "react-router-dom";

export default function Dashboard() {
    const [login, setLogin] = useState('admin@mail.ru')
    const [password, setPassword] = useState('111')
    const navigate = useNavigate();

    return <div className="page-content dashboard">
        <div className="login-ct">
            Dashboard
        </div>
    </div>;
}
