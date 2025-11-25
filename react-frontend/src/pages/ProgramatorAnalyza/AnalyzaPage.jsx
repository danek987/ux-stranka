import React from "react";
import "./AnalyzaPage.css";
import Button from "../../components/Button/Button";
import ValidityBadge from "../../components/GitComponents/ValidityBadge";

const AnalyzaPage = () => {
    return (
        <main className="analyza-page">
            <h1 className="analyza-title display-48">
                Generovanie Profilu
            </h1>

            <section
                className="analyza-card"
                aria-label="Nastavenie tokenov pre služby"
            >
                <div className="providers-list">
                    {/* riadok GitHub */}
                    <div className="provider-row">
                        <div className="provider-main">
                            <span className="provider-name h1-32">
                                GitHub
                            </span>
                            <span
                                className="provider-icon provider-icon-github"
                                aria-hidden="true"
                            />
                        </div>

                        <ValidityBadge status="neplatny" />
                    </div>

                    {/* riadok GitLab */}
                    <div className="provider-row">
                        <div className="provider-main">
                            <span className="provider-name h1-32">
                                GitLab
                            </span>
                            <span
                                className="provider-icon provider-icon-gitlab"
                                aria-hidden="true"
                            />
                        </div>

                        <ValidityBadge status="neplatny" />
                    </div>
                </div>

                <p className="token-info body-medium-16-auto">
                    Je potrebné pridať token
                </p>

                <Button
                    variant="primary"
                    size="large"
                    className="analyza-token-button"
                >
                    Prejsť k nastaveniu Tokenu
                </Button>
            </section>
        </main>
    );
};

export default AnalyzaPage;
