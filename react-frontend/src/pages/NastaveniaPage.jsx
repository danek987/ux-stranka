import React, { useState } from "react";
import "./NastaveniaPage.css";

import Button from "../components/Button/Button";
import TextInput from "../components/Input/TextInput";
import Chip from "../components/GitComponents/Chip";

const NastaveniaPage = () => {
    // stav pre zmenu hesla
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    // stav pre aliasy
    const [aliases, setAliases] = useState([
        "Meno123",
        "MenoGit",
        "AliasJa",
        "AbcDefGit",
        "GitMeno145",
    ]);
    const [newAlias, setNewAlias] = useState("");

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

    // pridanie aliasu
    const handleAddAlias = (event) => {
        event.preventDefault();

        const trimmed = newAlias.trim();
        if (!trimmed) return;

        // nepovolit duplicity
        if (!aliases.includes(trimmed)) {
            setAliases((prev) => [...prev, trimmed]);
        }

        setNewAlias("");
    };

    // odstranenie aliasu
    const handleRemoveAlias = (aliasToRemove) => {
        setAliases((prev) => prev.filter((alias) => alias !== aliasToRemove));
    };

    // zmazanie uctu
    const handleDeleteAccount = () => {
        if (!confirmDelete) return;

        // sem pride realne API volanie
        console.log("Zmazat ucet");
    };

    return (
        <main className="settings page">
            <h1 className="display-48">Nastavenia</h1>

            {/* sekcia zmena hesla */}
            <section className="settings-card card">
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

            {/* sekcia aliasy */}
            <section className="settings-card card">
                <h2 className="h2-24 settings-section-title">Aliasy</h2>

                <div className="settings-alias-list">
                    {aliases.map((alias, index) => (
                        <Chip
                            key={`${alias}-${index}`}
                            text={alias}
                            onRemove={() => handleRemoveAlias(alias)}
                        />
                    ))}
                </div>

                <form className="settings-form" onSubmit={handleAddAlias}>
                    <TextInput
                        label="Pridanie aliasu"
                        placeholder="MenoGit123"
                        value={newAlias}
                        onChange={(e) => setNewAlias(e.target.value)}
                    />

                    <Button
                        type="submit"
                        variant="primary"
                        size="large"
                        className="settings-submit"
                    >
                        Pridať alias
                    </Button>
                </form>
            </section>

            {/* sekcia zmazanie uctu */}
            <section className="settings-card card settings-card-delete">
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

export default NastaveniaPage;
