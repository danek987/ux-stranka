import React from "react";
import "./Menu.css";
import { NavLink, useLocation, Link } from "react-router-dom";

const Menu = ({ role = "programator" }) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = React.useState(false);

    // domovska cesta podla roly
    const homePath = role === "firma" ? "/firma" : "/";

    const itemsProgramator = [
        {
            to: "/analyza1",
            label: "Analýza",
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
            label: "Vyhľadávanie",
            isActive:
                location.pathname === "/vyhladat" ||
                location.pathname.startsWith("/firma/profil/")
        },
        {
            to: "/kontaktovaniaFirma",
            label: "Kontakt",
            isActive:
                location.pathname === "/kontaktovaniaFirma" ||
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
                {/* ikonka stranky vlavo hore */}
                <Link
                    to={homePath}
                    className="logo-link"
                    onClick={() => setIsOpen(false)}
                >
                    Q
                </Link>

                {/* hamburger – viditelny na mensic obrazovkach  */}
                <button
                    className={
                        "menu-icon-btn" + (isOpen ? " is-open" : "")
                    }
                    onClick={() => setIsOpen((open) => !open)}
                    aria-label="Menu"
                    aria-expanded={isOpen}
                >
                    <span className="menu-icon-lines" />
                </button>
            </div>

            <nav className={"topbar-nav" + (isOpen ? " is-open" : "")}>
                {items.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            "nav-link" +
                            ((item.isActive || isActive) ? " is-active" : "")
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <div className="topbar-right">
                <button className="logout-btn">Odhlásiť</button>
            </div>
        </header>
    );
};

export default Menu;
