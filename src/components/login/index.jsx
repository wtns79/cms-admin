import React, {useEffect, useState} from "react";
import './style.css'
import TokenService from "../../service/token";
import {Button, Input} from "antd";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [login, setLogin] = useState('admin@mail.ru')
    const [password, setPassword] = useState('111')
    const navigate = useNavigate();

    const onLogin = function (data) {
        TokenService.saveToken(data)
        const st = setTimeout(function () {
            navigate("/")
            clearTimeout(st);
        }, 200)
    }

    const onTokenExpired = function () {
        let exp = TokenService.getExpired()
        let h = exp * 1000 - Date.now()
        const st2 = setTimeout(function () {
            navigate("/logout")
            clearTimeout(st2);
        }, h)
    }

    const onOk = function () {

    }

    return <div className="page-content login">
        <div className="login-ct">
            <div className="inputs">
                <label>Вход</label>
                <Input value={login} onChange={e => setLogin(e.target.value)}/>
                <Input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="actions">
                <Button onClick={onOk}>Войти</Button>
            </div>
        </div>
    </div>;
}
