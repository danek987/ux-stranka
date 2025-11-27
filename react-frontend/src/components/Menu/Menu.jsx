import React from "react";
import "./Menu.css";
import { NavLink, useLocation } from "react-router-dom";

const Menu = ({ role = "programator" }) => {
    const location = useLocation();

    const itemsProgramator = [
        {
            to: "/analyza1",
            label: "Analyza",
            isActive: location.pathname.startsWith("/analyza")
        },
        { to: "/profil", label: "Profil" },
        { to: "/tokeny", label: "Tokeny" },
        { to: "/kontaktovania", label: "Kontaktovania" },
        { to: "/nastavenia", label: "Nastavenia" },
    ];

    const itemsFirma = [
        {
            to: "/vyhladat",
            label: "Vyhľadavanie",
            isActive: location.pathname === "/vyhladat" ||
                location.pathname.startsWith("/firma/profil/")
        },
        {
            to: "/kontaktovaniaFirma",
            label: "Kontakt",
            isActive: location.pathname === "/kontaktovaniaFirma" ||
                location.pathname.startsWith("/kontaktovat/")
        },
        {
            to: "/nastaveniaFirma",
            label: "Nastavenia",
            isActive: location.pathname === "/nastaveniaFirma"
        }
    ];


    const items = role === "firma" ? itemsFirma : itemsProgramator;

    return (
        <header className="topbar">
            <div className="topbar-left">
                <button className="menu-icon-btn">Q</button>
            </div>

            <nav className="topbar-nav">
                {items.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            "nav-link" +
                            ((item.isActive || isActive) ? " is-active" : "")
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <div className="topbar-right">
                <button className="logout-btn">Odhlasit</button>
            </div>
        </header>
    );
};

export default Menu;