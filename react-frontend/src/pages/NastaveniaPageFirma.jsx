import React, { useState } from "react";
import "./NastaveniaPage.css";

import Button from "../components/Button/Button";
import TextInput from "../components/Input/TextInput";
import TextField from "../components/Input/TextAreaField";
import Chip from "../components/GitComponents/Chip";

const NastaveniaPageFirma = () => {
    // stav pre zmenu hesla
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    // stav pre technologie
    const [technologies, setTechnologies] = useState([
        "Java",
        "React",
        "C#",
        "C++",
    ]);
    const [newTechnology, setNewTechnology] = useState("");

    // stav pre preferencie
    const [preferences, setPreferences] = useState("");

    // stav pre zmazanie uctu
    const [confirmDelete, setConfirmDelete] = useState(false);

    // odoslanie zmeny hesla
    const handlePasswordSubmit = (event) => {
        event.preventDefault();

        if (!oldPassword || !newPassword) {
            return;
        }

        console.log("Zmena hesla", { oldPassword, newPassword });

        setOldPassword("");
        setNewPassword("");
    };

    // pridanie technologie
    const handleAddTechnology = (event) => {
        event.preventDefault();

        const trimmed = newTechnology.trim();
        if (!trimmed) return;

        // nepovolit duplicity
        if (!technologies.includes(trimmed)) {
            setTechnologies((prev) => [...prev, trimmed]);
        }

        setNewTechnology("");
    };

    // odstranenie technologie
    const handleRemoveTechnology = (technologyToRemove) => {
        setTechnologies((prev) =>
            prev.filter((tech) => tech !== technologyToRemove)
        );
    };

    // ulozenie preferencii
    const handlePreferencesSubmit = (event) => {
        event.preventDefault();

        console.log("Ulozit preferencie", preferences);
        // ak chces, mozes po uspesnom ulozeni vycistit:
        // setPreferences("");
    };

    // zmazanie uctu
    const handleDeleteAccount = () => {
        if (!confirmDelete) return;

        console.log("Zmazat ucet");
    };

    return (
        <main className="settings">
            <h1 className="display-48">Nastavenia</h1>

            {/* sekcia zmena hesla */}
            <section className="settings-card">
                <h2 className="h2-24 settings-section-title">Zmena hesla</h2>

                <form className="settings-form" onSubmit={handlePasswordSubmit}>
                    <TextInput
                        label="Staré heslo"
                        type="password"
                        placeholder="Staré heslo"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />

                    <TextInput
                        label="Nové heslo"
                        type="password"
                        placeholder="Nové heslo"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />

                    <Button
                        type="submit"
                        variant="primary"
                        size="large"
                        className="settings-submit"
                    >
                        Zmeniť heslo
                    </Button>
                </form>
            </section>

            {/* sekcia technologie */}
            <section className="settings-card">
                <h2 className="h2-24 settings-section-title">Technológie</h2>

                <div className="settings-alias-list">
                    {technologies.map((tech, index) => (
                        <Chip
                            key={`${tech}-${index}`}
                            text={tech}
                            onRemove={() => handleRemoveTechnology(tech)}
                        />
                    ))}
                </div>

                <form className="settings-form" onSubmit={handleAddTechnology}>
                    <TextInput
                        label="Pridanie technológie"
                        placeholder="Sem napíšte technológiu"
                        value={newTechnology}
                        onChange={(e) => setNewTechnology(e.target.value)}
                    />

                    <Button
                        type="submit"
                        variant="primary"
                        size="large"
                        className="settings-submit"
                    >
                        Pridať
                    </Button>
                </form>
            </section>

            {/* sekcia preferencie */}
            <section className="settings-card settings-card-preferences">
                <h2 className="h2-24 settings-section-title">Preferencie</h2>

                <form
                    className="settings-form"
                    onSubmit={handlePreferencesSubmit}
                >
                    <TextField
                        label="Preferencie"
                        placeholder="Sem napíšte preferencie firmy"
                        value={preferences}
                        onChange={(e) => setPreferences(e.target.value)}
                    />

                    <Button
                        type="submit"
                        variant="primary"
                        size="large"
                        className="settings-submit"
                    >
                        Uložiť
                    </Button>
                </form>
            </section>

            {/* sekcia zmazanie uctu */}
            <section className="settings-card settings-card-delete">
                <h2 className="h2-24 settings-section-title">Zmazanie účtu</h2>

                <label className="settings-delete-check body-medium-16-auto">
                    <input
                        type="checkbox"
                        checked={confirmDelete}
                        onChange={(e) => setConfirmDelete(e.target.checked)}
                    />
                    <span>Súhlasím so zmazaním účtu</span>
                </label>

                <Button
                    type="button"
                    variant="primary"
                    size="large"
                    className="settings-delete-btn"
                    onClick={handleDeleteAccount}
                    disabled={!confirmDelete}
                >
                    Zmazať
                </Button>
            </section>
        </main>
    );
};

export default NastaveniaPageFirma;
