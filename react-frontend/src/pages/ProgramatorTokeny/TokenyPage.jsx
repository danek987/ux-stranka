import React, { useState } from "react";
import "./TokenyPage.css";

import Button from "../../components/Button/Button";
import TextInput from "../../components/Input/TextInput";
import ValidityBadge from "../../components/GitComponents/ValidityBadge";

const TokenyPage = () => {
    // stav pre manualne zadavanie tokenu
    const [manualToken, setManualToken] = useState("");
    const [manualName, setManualName] = useState("");
    const [provider, setProvider] = useState("github");

    // stav platnosti tokenov
    const [isGithubValid, setIsGithubValid] = useState(false);
    const [isGitlabValid, setIsGitlabValid] = useState(false);

    const hasAnyValid = isGithubValid || isGitlabValid;

    // simulacia oauth prihlasenia
    const handleOAuth = (targetProvider) => {
        if (targetProvider === "github") {
            setIsGithubValid(true);
        } else {
            setIsGitlabValid(true);
        }
    };

    // odpojenie tokenu
    const handleDisconnect = (targetProvider) => {
        if (targetProvider === "github") {
            setIsGithubValid(false);
        } else {
            setIsGitlabValid(false);
        }
    };

    // manualne pridanie tokenu
    const handleAddToken = (event) => {
        event.preventDefault();

        if (!manualToken.trim()) {
            return;
        }

        if (provider === "github") {
            setIsGithubValid(true);
        } else {
            setIsGitlabValid(true);
        }

        setManualToken("");
        setManualName("");
    };

    // buduca navigacia na analyzu
    const handleGoToAnalyze = () => {
        // sem mozes doplnit realnu navigaciu (napr. react-router)
        console.log("Prejst k analyze");
    };

    return (
        <main className="tokens">
            <h1 className="display-48">Tokeny</h1>

            <section className="tokens-card" aria-label="Sprava tokenov">
                {/* horna cast s poskytovatelmi */}
                <div className="tokens-providers" aria-label="Git integracie">
                    {/* GitHub */}
                    <article className="token-provider">
                        <div className="token-provider-header">
                            <div className="token-provider-icon" aria-hidden="true">
                                🐱
                            </div>
                            <span className="h2-24">GitHub</span>
                        </div>

                        <ValidityBadge status={isGithubValid ? "platny" : "neplatny"} />

                        {isGithubValid ? (
                            <Button
                                variant="primary"
                                size="large"
                                className="token-oauth-btn"
                                type="button"
                                onClick={() => handleDisconnect("github")}
                            >
                                Odpojit
                            </Button>
                        ) : (
                            <Button
                                variant="primary"
                                size="large"
                                className="token-oauth-btn"
                                type="button"
                                onClick={() => handleOAuth("github")}
                            >
                                OAuth
                            </Button>
                        )}
                    </article>

                    {/* GitLab */}
                    <article className="token-provider">
                        <div className="token-provider-header">
                            <div className="token-provider-icon" aria-hidden="true">
                                🦊
                            </div>
                            <span className="h2-24">GitLab</span>
                        </div>

                        <ValidityBadge status={isGitlabValid ? "platny" : "neplatny"} />

                        {isGitlabValid ? (
                            <Button
                                variant="primary"
                                size="large"
                                className="token-oauth-btn"
                                type="button"
                                onClick={() => handleDisconnect("gitlab")}
                            >
                                Odpojit
                            </Button>
                        ) : (
                            <Button
                                variant="primary"
                                size="large"
                                className="token-oauth-btn"
                                type="button"
                                onClick={() => handleOAuth("gitlab")}
                            >
                                OAuth
                            </Button>
                        )}
                    </article>
                </div>

                <p className="tokens-divider body-small-14">
                    Alebo pripojit manualne
                </p>

                {/* formular na manualne pridanie */}
                <form className="tokens-form" onSubmit={handleAddToken}>
                    <TextInput
                        label="Token"
                        placeholder="Token ghu_xxxxxxxx"
                        value={manualToken}
                        onChange={(e) => setManualToken(e.target.value)}
                    />

                    <TextInput
                        label="Meno"
                        placeholder="Meno na git"
                        value={manualName}
                        onChange={(e) => setManualName(e.target.value)}
                    />

                    <div className="tokens-provider-options">
                        <span className="body-small-14">Platforma</span>

                        <label className="tokens-radio body-medium-16-auto">
                            <input
                                type="radio"
                                name="provider"
                                value="github"
                                checked={provider === "github"}
                                onChange={() => setProvider("github")}
                            />
                            <span>GitHub</span>
                        </label>

                        <label className="tokens-radio body-medium-16-auto">
                            <input
                                type="radio"
                                name="provider"
                                value="gitlab"
                                checked={provider === "gitlab"}
                                onChange={() => setProvider("gitlab")}
                            />
                            <span>GitLab</span>
                        </label>
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        size="large"
                        className="tokens-submit"
                    >
                        Pridat Token
                    </Button>

                    {hasAnyValid && (
                        <Button
                            type="button"
                            variant="primary"
                            size="large"
                            className="tokens-analyze"
                            onClick={handleGoToAnalyze}
                        >
                            Prejst k analyze
                        </Button>
                    )}
                </form>
            </section>
        </main>
    );
};

export default TokenyPage;
