import React, { useState } from "react";
import "./KontaktovatPage.css";

import Button from "../../components/Button/Button";
import TextInput from "../../components/Input/TextInput";
import TextField from "../../components/Input/TextAreaField";
import { useParams } from "react-router-dom";
import SelectField from "../../components/Input/SelectField";

const KontaktovatPage = () => {
    // id programatora z url, napr. /kontaktovat/X47859
    const { id } = useParams();

    // lokalny stav formulara
    const [place, setPlace] = useState("Online");
    const [datetime, setDatetime] = useState("");
    const [type, setType] = useState("online");
    const [message, setMessage] = useState("");

    // odoslanie formulara
    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            programmerId: id,
            place,
            datetime,
            type,
            message,
        };

        // sem pride realne volanie API
        console.log("Odoslat kontaktovanie:", payload);
    };

    return (
        <main className="contact-form">
            <h1 className="display-48">Kontaktovať</h1>

            <section className="contact-form-card">
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
                    />

                    {/* datum a cas */}
                    <div className="contact-form-row">
                        <TextInput
                            label="Dátum a čas"
                            placeholder="Dátum a čas"
                            type="datetime-local"
                            value={datetime}
                            onChange={(e) => setDatetime(e.target.value)}
                        />
                        {/* ak mas ikonku kalendara ako samostatny komponent, da sa doplnit sem */}
                        <span className="contact-form-calendar-icon" aria-hidden="true">
                            📅
                        </span>
                    </div>

                    {/* typ kontaktu */}
                    <div className="contact-form-select-wrapper">
                        <SelectField
                            label="Typ kontaktu"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
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
                    />

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
