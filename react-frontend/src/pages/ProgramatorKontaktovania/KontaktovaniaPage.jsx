import React from "react";
import "./KontaktovaniaPage.css";
import UserContactCard from "../../components/Kontaktovania/UserContactCard";
import { useNavigate } from "react-router-dom";

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

const KontaktovaniaPage = () => {
    const navigate = useNavigate();

    const handleShow = (id) => {
        navigate(`/kontaktovania/${id}`);
    };

    const handleDelete = (id) => {
        console.log("Vymaz kontaktovanie", id);
    };

    return (
        <main className="page">
            <h1 className="display-48">Kontaktovania</h1>

            <section className="contacts-list">
                {MOCK_KONTAKTY.map((kontakt) => (
                    <UserContactCard
                        key={kontakt.id}
                        firma={kontakt.firma}
                        datumCas={kontakt.datumCas}
                        typ={kontakt.typ}
                        miesto={kontakt.miesto}
                        onShow={() => handleShow(kontakt.id)}
                        onDelete={() => handleDelete(kontakt.id)}
                    />
                ))}
            </section>
        </main>
    );
};

export default KontaktovaniaPage;
