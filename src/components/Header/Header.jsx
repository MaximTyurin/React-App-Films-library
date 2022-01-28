import React from "react";
import { Link } from "react-router-dom";
import Basket from "../Basket/Basket";
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">
                <Link to="/" className="header__title-link">Disc Shop</Link>
            </h1>
            <nav className="header__nav">
                <ul id="nav-mobile" className="header__container">
                    <li><Link to="/about">О нас</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                    <li><Link to="/registration">Регистрация</Link></li>
                    <li><Link to="/basket"><Basket/></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;