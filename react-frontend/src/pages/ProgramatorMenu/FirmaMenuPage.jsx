import React from "react";
import "../ProgramatorMenu/MenuPage.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const FirmaMenuPage = () => {
    const navigate = useNavigate();

    return (
        <main className="home page">
            <h1 id="home-title" className="display-48">
                Štýlové profily
            </h1>

            <section className="home-card card" aria-labelledby="home-title">
                <div className="home-actions">
                    <Button
                        variant="primary"
                        size="large"
                        className="home-btn"
                        onClick={() => navigate("/vyhladat")}
                    >
                        Vyhľadať programátora
                    </Button>

                    <Button
                        variant="primary"
                        size="large"
                        className="home-btn"
                        onClick={() => navigate("/kontaktovaniaFirma")}
                    >
                        Kontaktovania
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

export default FirmaMenuPage;
