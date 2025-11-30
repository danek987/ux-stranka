import React, { useState } from "react";
import "./VyhladatPage.css";

import Button from "../../components/Button/Button";
import TextInput from "../../components/Input/TextInput";
import { useNavigate } from "react-router-dom";

const VyhladatPage = () => {
    const [programmerId, setProgrammerId] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // autofill po kliknutí do inputu
    const handleInputFocus = () => {
        setError("");
        if (!programmerId) {
            setProgrammerId("Y8584668");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!programmerId.trim()) {
            setError("Treba vyplniť ID programátora.");
            return;
        }

        setError("");

        // PRESMEROVANIE NA KONTAKTOVANIE
        navigate(`/firma/profil/${programmerId.trim()}`);
    };

    return (
        <main className="search page">
            <h1 className="display-48">Vyhľadať</h1>

            <section className="search-card card" aria-label="Vyhľadanie programátora">
                <p className="body-small-14 search-subtitle">
                    Zadajte platné ID programátora
                </p>

                <form className="search-form" onSubmit={handleSubmit}>
                    <TextInput
                        label="ID Programátora"
                        placeholder="Y8584668"
                        value={programmerId}
                        onChange={(e) => setProgrammerId(e.target.value)}
                        onFocus={handleInputFocus}
                    />

                    {error && (
                        <p className="error body-small-14">{error}</p>
                    )}

                    <Button
                        type="submit"
                        variant="primary"
                        size="large"
                        className="search-submit"
                    >
                        Vyhľadať
                    </Button>
                </form>
            </section>
        </main>
    );
};

export default VyhladatPage;
