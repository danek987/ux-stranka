import React, { useState } from "react";
import "./FirmaKontaktovaniaPage.css";
import ContactCard from "../../components/Kontaktovania/ContactCard";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const MOCK = [
    {
        kontaktId: "Y8586565",
        datumCas: "26.5.2026 8:30",
        typ: "Online",
        miesto: "Online",
        stav: "Odoslané",
        isNew: true,
    },
    {
        kontaktId: "E487864",
        datumCas: "26.5.2026 8:30",
        typ: "Online",
        miesto: "Online",
        stav: "Nereagoval",
        isNew: false,
    },
    {
        kontaktId: "Z45745454",
        datumCas: "27.5.2026 8:30",
        typ: "Online",
        miesto: "Online",
        stav: "Odmietol",
        isNew: false,
    },
];

const FirmaKontaktovaniaPage = () => {
    const [data, setData] = useState(MOCK);
    const [sortAsc, setSortAsc] = useState(true);

    const navigate = useNavigate();

    const handleSort = () => {
        setSortAsc(!sortAsc);

        setData((prev) =>
            [...prev].sort((a, b) => {
                const d1 = new Date(a.datumCas.split(" ")[0].split(".").reverse().join("-") + " " + a.datumCas.split(" ")[1]);
                const d2 = new Date(b.datumCas.split(" ")[0].split(".").reverse().join("-") + " " + b.datumCas.split(" ")[1]);
                return sortAsc ? d2 - d1 : d1 - d2;
            })
        );
    };

    const handleDelete = (id) => {
        setData((prev) => prev.filter((k) => k.kontaktId !== id));
    };

    const handleComplete = (id) => {
        console.log("Dokoncit", id);
    };

    const handleCancel = (id) => {
        console.log("Zrusit", id);
    };

    return (
        <main className="fk-page page">
            <h1 className="display-48">Kontaktovania</h1>

            <div className="fk-sort">
                <button className="fk-sort-btn body-small-14" onClick={handleSort}>
                    Zoradiť podľa dátumu {sortAsc ? "↑" : "↓"}
                </button>
            </div>

            <section className="fk-grid">
                {data.map((kontakt) => (
                    <ContactCard
                        key={kontakt.kontaktId}
                        kontaktId={kontakt.kontaktId}
                        datumCas={kontakt.datumCas}
                        typ={kontakt.typ}
                        miesto={kontakt.miesto}
                        stav={kontakt.stav}
                        isNew={kontakt.isNew}
                        onDelete={() => handleDelete(kontakt.kontaktId)}
                        onComplete={() => handleComplete(kontakt.kontaktId)}
                        onCancel={() => handleCancel(kontakt.kontaktId)}
                    />
                ))}
            </section>

            <div className="fk-menu">
                <Button
                    variant="primary"
                    size="large"
                    onClick={() => navigate("/firma")}
                >
                    Menu
                </Button>
            </div>
        </main>
    );
};

export default FirmaKontaktovaniaPage;
