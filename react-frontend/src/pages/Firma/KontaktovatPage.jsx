import React, { useState } from "react";
import "./KontaktovatPage.css";

import Button from "../../components/Button/Button";
import TextInput from "../../components/Input/TextInput";
import TextField from "../../components/Input/TextAreaField";
import SelectField from "../../components/Input/SelectField";
import { useParams, useNavigate } from "react-router-dom";

const KontaktovatPage = () => {
    // id programatora z url, napr. /kontaktovat/X47859
    const { id } = useParams();

    // lokalny stav formulara
    const [place, setPlace] = useState("Online");
    const [datetime, setDatetime] = useState("");
    const [type, setType] = useState("online");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // autofill pri kliknuti do inputov (iba ak su prazdne / default)
    const handlePlaceFocus = () => {
        setError("");
        if (!place) {
            setPlace("Online");
        }
    };

    const handleDatetimeFocus = () => {
        setError("");
        if (!datetime) {
            // validny format pre datetime-local, len demo hodnota
            setDatetime("2025-01-15T10:00");
        }
    };

    const handleMessageFocus = () => {
        setError("");
        if (!message) {
            setMessage("Radi by sme si s Vami dohodli stretnutie ohľadom možnej spolupráce.");
        }
    };

    // odoslanie formulara
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!place.trim() || !datetime.trim() || !message.trim()) {
            setError("Treba vyplniť potrebné údaje.");
            return;
        }

        setError("");

        const payload = {
            programmerId: id,
            place,
            datetime,
            type,
            message,
        };

        // sem pride realne volanie API
        console.log("Odoslať kontaktovanie:", payload);

        // presmerovanie na zoznam kontaktovani firmy
        navigate("/kontaktovaniaFirma");
    };

    return (
        <main className="page">
            <h1 className="display-48">Kontaktovať</h1>

            <section className="contact-form-card card">
                <p className="contact-form-id h2-24">
                    ID: <span className="contact-form-id-value">{id || "X47859"}</span>
                </p>

                <form className="contact-form-inner" onSubmit={handleSubmit}>
                    {/* miesto */}
                    <TextInput
                        label="Miesto"
                        placeholder="Online"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        onFocus={handlePlaceFocus}
                    />

                    {/* datum a cas */}
                    <div className="contact-form-row">
                        <TextInput
                            label="Dátum a čas"
                            placeholder="Dátum a čas"
                            type="datetime-local"
                            value={datetime}
                            onChange={(e) => setDatetime(e.target.value)}
                            onFocus={handleDatetimeFocus}
                        />
                        <span className="contact-form-calendar-icon" aria-hidden="true">
                            📅
                        </span>
                    </div>

                    {/* typ kontaktu */}
                    <div className="contact-form-select-wrapper">
                        <SelectField
                            label="Typ kontaktu"
                            value={type}
                            onChange={(e) => {
                                setType(e.target.value);
                                setError("");
                            }}
                            options={[
                                { value: "online", label: "Online" },
                                { value: "osobne", label: "Osobne" },
                                { value: "telefon", label: "Telefon" },
                            ]}
                        />
                    </div>

                    {/* sprava */}
                    <TextField
                        label="Správa"
                        placeholder="Správa"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={handleMessageFocus}
                    />

                    {/* jedna spolocna chyba */}
                    {error && (
                        <p className="error body-small-14">{error}</p>
                    )}

                    <Button
                        type="submit"
                        variant="primary"
                        size="large"
                        className="contact-form-submit"
                    >
                        Odoslať
                    </Button>
                </form>
            </section>
        </main>
    );
};

export default KontaktovatPage;
