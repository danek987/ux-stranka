// src/components/ui/ContactCard.jsx
import React from "react";
import "./ContactCard.css";
import Button from "../Button/Button";

// props:
// - kontaktId: napr. "Y8584668"
// - datumCas: string "27.5.2026 8:30"
// - typ: "Online" / "Osobny"
// - miesto: napr. "Online"
// - stav: text, napr. "Odmietol", "Potvrdil ucast"
// - isNew: ak je true, karta je modra (novy kontakt)
// - onDelete, onComplete, onCancel: callbacky na tlacidla
const ContactCard = ({
                         kontaktId,
                         datumCas,
                         typ,
                         miesto,
                         stav,
                         isNew = false,
                         onDelete,
                         onComplete,
                         onCancel,
                     }) => {
    const stavLower = stav?.toLowerCase();

    // logika ktore tlacidla zobrazit
    const renderActions = () => {
        // stav odmietol -> len Vymazat
        if (stavLower?.includes("odmietol")) {
            return (
                <Button variant="primary" size="small" onClick={onDelete}>
                    Vymazat
                </Button>
            );
        }

        // stav potvrdil ucast (alebo cokolvek ine) -> Dokoncit + Zrusit
        return (
            <>
                <Button variant="primary" size="small" onClick={onComplete}>
                    Dokoncit
                </Button>
                <Button variant="primary" size="small" onClick={onCancel}>
                    Zrusit
                </Button>
            </>
        );
    };

    const className = [
        "contact-card",
        isNew ? "contact-card-new" : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={className}>
            {/* ID kontaktovania */}
            <div className="contact-header h3-20">{kontaktId}</div>

            {/* detaily kontaktovania */}
            <div className="contact-body body-medium-16">
                <div>Datum a cas: {datumCas}</div>
                <div>Typ: {typ}</div>
                <div>Miesto: {miesto}</div>
                <div>Stav: {stav}</div>
            </div>

            {/* akcie podla stavu */}
            <div className="contact-actions">{renderActions()}</div>
        </div>
    );
};

export default ContactCard;
