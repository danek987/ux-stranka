import React from "react";
import "./index.css";

const Index = () => {
    return (
        <main className="home">
            <h1 id="home-title" className="display-48">
                Stylove profily
            </h1>

            <section className="home-card" aria-labelledby="home-title">
                <div className="home-actions">
                    <button className="btn btn-primary h1-32">Analyza</button>
                    <button className="btn btn-primary h1-32">Tokeny</button>
                    <button className="btn btn-primary h1-32">Kontakt</button>
                    <button className="btn btn-primary h1-32">Nastavenia</button>
                </div>
            </section>
        </main>
    );
};

export default Index;
