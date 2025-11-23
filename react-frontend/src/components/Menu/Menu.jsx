import React from "react";
import "./Menu.css";

const Menu = () => {
    return (
        <header className="topbar">
            <div className="topbar-left">
                <button className="menu-button" aria-label="Hlavne menu">
                    Menu
                </button>
            </div>

            <nav className="topbar-nav" aria-label="Hlavna navigacia">
                <a href="#" className="nav-link is-active">Analyza</a>
                <a href="#" className="nav-link">Profil</a>
                <a href="#" className="nav-link">Tokeny</a>
                <a href="#" className="nav-link">Kontaktovania</a>
                <a href="#" className="nav-link">Nastavenia</a>
            </nav>

            <div className="topbar-right">
                <button className="btn btn-secondary">Odhlasit</button>
            </div>
        </header>
    );
};

export default Menu;
