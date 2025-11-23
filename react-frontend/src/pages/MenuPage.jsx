import React from "react";
import "./MenuPage.css";
import Button from "../components/Button/Button";
import InfoCard from "../components/GitComponents/InfoCard";
import RepoCardAnalyze from "../components/GitComponents/RepoCardAnalyze";
import ContactCard from "../components/Kontaktovania/ContactCard";
import UserContactCard from "../components/Kontaktovania/UserContactCard";

const MenuPage = () => {
    return (
        <main className="home">
            <h1 id="home-title" className="display-48">
                Stylove profily
            </h1>

            <section className="home-card" aria-labelledby="home-title">
                <div className="home-actions">
                    <Button variant="primary" size="large">Analyza</Button>
                    <Button variant="primary" size="large">Tokeny</Button>
                    <Button variant="primary" size="large">Kontakt</Button>
                    <Button variant="primary" size="large">Nastavenia</Button>
                </div>
            </section>
        </main>

    );
};

export default MenuPage;
