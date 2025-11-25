import React from "react";
import "./AnalyzaPage2.css";
import Button from "../../components/Button/Button";
import ValidityBadge from "../../components/GitComponents/ValidityBadge";

const AnalyzaPage2 = () => {
    return (
        <main className="analyza2-page">
            <h1 className="analyza2-title display-48">Generovanie profilu</h1>

            <div className="analyza2-layout">
                {/* LEFT PANEL */}
                <section className="analyza2-left">
                    {/* GitHub blok */}
                    <div className="provider-block">
                        <div className="provider-main">
                            <span className="provider-name h1-32">GitHub</span>
                            <span
                                className="provider-icon provider-icon-github"
                                aria-hidden="true"
                            />
                        </div>

                        <ValidityBadge className="badge" status="platny"/>
                    </div>

                    {/* GitLab blok */}
                    <div className="provider-block">
                        <div className="provider-main">
                            <span className="provider-name h1-32">GitLab</span>
                            <span
                                className="provider-icon provider-icon-gitlab"
                                aria-hidden="true"
                            />
                        </div>

                        <ValidityBadge status="neplatny"/>
                    </div>

                    {/* spolocne tlacidlo dole */}
                    <Button
                        variant="primary"
                    >
                        Načitať
                    </Button>
                </section>


                {/* RIGHT PANEL */}
                <section className="analyza2-right">
                    <div className="analyza2-right-content">
                        <p className="body-medium-16">
                            Načítajte repozitáre z gitu
                        </p>

                        <Button size="large" variant="primary">
                            Načítať
                        </Button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default AnalyzaPage2;
