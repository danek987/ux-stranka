import React, { useState } from "react";
import "./VyhladatPage.css";

import Button from "../../components/Button/Button";
import TextInput from "../../components/Input/TextInput";

const VyhladatPage = () => {
    const [programmerId, setProgrammerId] = useState("");

    // odoslanie formulara
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!programmerId.trim()) {
            return;
        }

        // sem pride realne vyhladavanie podla ID
        console.log("Vyhladat programatora s ID:", programmerId);
    };

    return (
        <main className="search">
            <h1 className="display-48">Vyhľadať</h1>

            <section className="search-card" aria-label="Vyhľadanie programátora">
                <p className="body-small-14 search-subtitle">
                    Zadajte platné ID programátora
                </p>

                <form className="search-form" onSubmit={handleSubmit}>
                    <TextInput
                        label="ID Programátora"
                        placeholder="Y8584668"
                        value={programmerId}
                        onChange={(e) => setProgrammerId(e.target.value)}
                    />

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
