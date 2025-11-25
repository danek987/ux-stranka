import React from "react";
import "./MenuPage.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
    const navigate = useNavigate();

    return (
        <main className="home">
            <h1 id="home-title" className="display-48">
                Stylove profily
            </h1>

            <section className="home-card" aria-labelledby="home-title">
                <div className="home-actions">
                    <Button
                        variant="primary"
                        size="large"
                        className="home-btn"
                        onClick={() => navigate("/vyhladat")}
                    >
                        Analyza
                    </Button>

                    <Button
                        variant="primary"
                        size="large"
                        className="home-btn"
                        onClick={() => navigate("/tokeny")}
                    >
                        Tokeny
                    </Button>

                    <Button
                        variant="primary"
                        size="large"
                        className="home-btn"
                        onClick={() => navigate("/kontaktovania")}
                    >
                        Kontakt
                    </Button>

                    <Button
                        variant="primary"
                        size="large"
                        className="home-btn"
                        onClick={() => navigate("/nastavenia")}
                    >
                        Nastavenia
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default MenuPage;
