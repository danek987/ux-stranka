import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./KontaktovaniaPage.css";
import UserContactCard from "../../components/Kontaktovania/UserContactCard";

const MOCK_KONTAKTY = [
    {
        id: 1,
        firma: "Developers s.r.o",
        datumCas: "26.5.2026 8:30",
        typ: "Online",
        miesto: "Online",
        sprava:
            "Dobry den, radi by sme s vami presli moznosti spoluprace a vase projekty."
    }
];

const KontaktovanieDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const kontakt = MOCK_KONTAKTY.find(
        (k) => k.id === Number(id)
    );

    if (!kontakt) {
        return (
            <main className="contacts-page">
                <h1 className="display-48">Kontaktovanie nenajdene</h1>
            </main>
        );
    }

    const handleDelete = () => {
        console.log("Vymaz kontaktovanie", kontakt.id);
        navigate("/kontaktovania");
    };

    const handleAccept = () => {
        console.log("Potvrdit", kontakt.id);
    };

    const handleReject = () => {
        console.log("Odmietnut", kontakt.id);
    };

    return (
        <main className="contacts-page">
            <h1 className="display-48">Detail kontaktovania</h1>

            <section className="contacts-card">
                <UserContactCard
                    firma={kontakt.firma}
                    datumCas={kontakt.datumCas}
                    typ={kontakt.typ}
                    miesto={kontakt.miesto}
                    sprava={kontakt.sprava}
                    onDelete={handleDelete}
                    onAccept={handleAccept}
                    onReject={handleReject}
                />
            </section>
        </main>
    );
};

export default KontaktovanieDetailPage;
