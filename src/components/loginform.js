import React, { useState } from "react";
import "./loginform.css"

const LoginForm = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="Senha" />

            <div className="login-btn" onClick={popup}>Login</div>

            <p className="text">Ou entre usando</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>

            <div className={popupStyle}>
                <h3>Login não autorizado</h3>
                <p>E-mail ou senha incorreta</p>
            </div>
        </div>
    )
}

export default LoginForm
