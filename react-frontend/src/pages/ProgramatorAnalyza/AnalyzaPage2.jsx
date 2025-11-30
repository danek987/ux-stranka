import React from "react";
import "./AnalyzaPage2.css";
import Button from "../../components/Button/Button";
import ValidityBadge from "../../components/GitComponents/ValidityBadge";
import {useNavigate} from "react-router-dom";

const AnalyzaPage2 = () => {
    const navigate = useNavigate();
    const handleGoToAnalyze = () => {
        navigate("/analyza3");
    };

    return (
        <main className="analyza2-page page">
            <h1 className="analyza2-title display-48">Generovanie profilu</h1>

            <div className="analyza2-layout">
                {/* LEFT PANEL */}
                <section className="analyza2-left card">
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
                        onClick = {handleGoToAnalyze}
                    >
                        Načitať
                    </Button>
                </section>


                {/* RIGHT PANEL */}
                <section className="analyza2-right card">
                    <div className="analyza2-right-content">
                        <p className="body-medium-16">
                            Načítajte repozitáre z gitu
                        </p>

                        <Button size="large" variant="primary" onClick = {handleGoToAnalyze}>
                            Načítať
                        </Button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default AnalyzaPage2;
