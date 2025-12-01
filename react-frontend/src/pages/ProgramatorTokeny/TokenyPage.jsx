import React, { useState } from "react";
import "../../index.css";
import "./TokenyPage.css";

import Button from "../../components/Button/Button";
import TextInput from "../../components/Input/TextInput";
import ValidityBadge from "../../components/GitComponents/ValidityBadge";
import { useNavigate } from "react-router-dom";

const TokenyPage = () => {
    const [manualToken, setManualToken] = useState("");
    const [manualName, setManualName] = useState("");
    const [provider, setProvider] = useState("github");

    const [isGithubValid, setIsGithubValid] = useState(false);
    const [isGitlabValid, setIsGitlabValid] = useState(false);

    const [error, setError] = useState("");

    const hasAnyValid = isGithubValid || isGitlabValid;

    const handleOAuth = (targetProvider) => {
        if (targetProvider === "github") {
            setIsGithubValid(true);
        } else {
            setIsGitlabValid(true);
        }
    };

    const handleDisconnect = (targetProvider) => {
        if (targetProvider === "github") {
            setIsGithubValid(false);
        } else {
            setIsGitlabValid(false);
        }
    };

    // autofill pri kliknuti do inputu – len ak je prazdny
    const handleTokenFocus = () => {
        setError("");
        if (!manualToken) {
            setManualToken("ghu_62565ewfwe61f54158415ews5f");
        }
    };

    const handleNameFocus = () => {
        setError("");
        if (!manualName) {
            setManualName("GitMeno123");
        }
    };

    const handleAddToken = (event) => {
        event.preventDefault();

        if (!manualToken.trim() || !manualName.trim()) {
            setError("Treba vyplnit potrebne udaje.");
            return;
        }

        setError("");

        // nastavime prislusneho providera ako platneho
        if (provider === "github") {
            setIsGithubValid(true);
        } else {
            setIsGitlabValid(true);
        }

        // vycistenie inputov po pridani
        setManualToken("");
        setManualName("");
    };

    const navigate = useNavigate();

    const handleGoToAnalyze = () => {
        navigate("/analyza2");
    };

    return (
        <main className="tokens page">
            <h1 className="display-48">Tokeny</h1>

            <section className="card tokens-card" aria-label="Sprava tokenov">
                {/* horna cast s poskytovatelmi */}
                <div className="tokens-providers" aria-label="Git integracie">
                    {/* GitHub */}
                    <article className="token-provider">
                        <div className="token-provider-header">
                            <div className="token-provider-icon" aria-hidden="true">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                    alt=""
                                />
                            </div>
                            <span className="h2-24">GitHub</span>
                        </div>

                        <ValidityBadge status={isGithubValid ? "platny" : "neplatny"}/>

                        {isGithubValid ? (
                            <Button
                                variant="primary"
                                size="large"
                                className="token-oauth-btn"
                                type="button"
                                onClick={() => handleDisconnect("github")}
                            >
                            Odpojiť
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
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
                                    alt=""
                                />
                            </div>
                            <span className="h2-24">GitLab</span>
                        </div>


                        <ValidityBadge status={isGitlabValid ? "platny" : "neplatny"}/>

                        {isGitlabValid ? (
                            <Button
                                variant="primary"
                                size="large"
                                className="token-oauth-btn"
                                type="button"
                                onClick={() => handleDisconnect("gitlab")}
                            >
                                Odpojiť
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
                        onFocus={handleTokenFocus}
                    />

                    <TextInput
                        label="Meno"
                        placeholder="Meno na git"
                        value={manualName}
                        onChange={(e) => setManualName(e.target.value)}
                        onFocus={handleNameFocus}
                    />

                    <div className="tokens-provider-options">
                        <label className="field-label body-medium-16-bold">
                            Platforma
                        </label>

                        <div className="tokens-radio-row">
                            <label className="tokens-radio body-medium-16-auto">
                                <input
                                    type="radio"
                                    name="provider"
                                    value="github"
                                    checked={provider === "github"}
                                    onChange={() => {
                                        setProvider("github");
                                        setError("");
                                    }}
                                />
                                <span>GitHub</span>
                            </label>

                            <label className="tokens-radio body-medium-16-auto">
                                <input
                                    type="radio"
                                    name="provider"
                                    value="gitlab"
                                    checked={provider === "gitlab"}
                                    onChange={() => {
                                        setProvider("gitlab");
                                        setError("");
                                    }}
                                />
                                <span>GitLab</span>
                            </label>
                        </div>
                    </div>

                    {error && (
                        <p className="error body-small-14">{error}</p>
                    )}

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
