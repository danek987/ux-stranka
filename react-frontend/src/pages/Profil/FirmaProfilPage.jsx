import React from "react";
import "./ProfilPage.css";

import LanguageTag from "../../components/GitComponents/LanguageTag";
import InfoCard from "../../components/GitComponents/InfoCard";
import { useNavigate, useParams } from "react-router-dom";

const FirmaProfilPage = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // id programatora z URL, napr. /firma/profil/Y8584668

    const programmerId = id || "Y8584668";
    const totalCommits = 275;


    // historia kontaktovani
    const contactHistory = [];

    const handleKontaktovat = () => {
        navigate(`/kontaktovat/${programmerId}`);
    };

    return (
        <main className="profile page">
            <h1 className="display-48">Štýlový profil</h1>

            <section className="profile-grid">
                {/* lava horna karta – identita programatora */}
                <div className="profile-card card profile-summary">
                    <div className="profile-id h1-32">{programmerId}</div>

                    <div className="profile-github body-medium-16">
                        <span className="profile-github-icon"></span>
                        <span>gitUser12345</span>
                    </div>

                    <div className="profile-style-badge h3-20">BugFixer</div>
                </div>

                {/* prava horna karta – donut + legenda */}
                <div className="profile-card card profile-donut-card">
                    <div className="profile-donut-wrapper">
                        <div className="profile-donut">
                            <div className="profile-donut-inner">
                                <div className="profile-donut-number h1-32">
                                    {totalCommits}
                                </div>
                                <div className="profile-donut-label body-small-14">
                                    commitov
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-legend">
                        <div className="profile-legend-item">
                            <span className="legend-dot legend-dot-perf" />
                            <span className="chart-8">Perfektívne</span>
                            <span className="legend-percent chart-8">20%</span>
                        </div>
                        <div className="profile-legend-item">
                            <span className="legend-dot legend-dot-adapt" />
                            <span className="chart-8">Adaptívne</span>
                            <span className="legend-percent chart-8">12%</span>
                        </div>
                        <div className="profile-legend-item">
                            <span className="legend-dot legend-dot-kor" />
                            <span className="chart-8">Korektívne</span>
                            <span className="legend-percent chart-8">57%</span>
                        </div>
                        <div className="profile-legend-item">
                            <span className="legend-dot legend-dot-admin" />
                            <span className="chart-8">
                                Administratívne/Ostatné
                            </span>
                            <span className="legend-percent chart-8">11%</span>
                        </div>
                    </div>
                </div>

                {/* technologie */}
                <div className="profile-card card profile-tech">
                    <h2 className="h2-24 profile-card-title">Technológie</h2>

                    <div className="profile-tech-tags">
                        <LanguageTag
                            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                            text="Java"
                        />
                        <LanguageTag
                            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            text="React"
                        />
                        <LanguageTag
                            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                            text="C#"
                        />
                        <LanguageTag
                            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                            text="C++"
                        />
                    </div>
                </div>

                {/* kontaktovania pre firmu */}
                <div className="profile-card card profile-contact">
                    <div className="profile-contact-header">
                        <h2 className="h2-24 profile-card-title">
                            Kontaktovania
                        </h2>
                    </div>

                    <div className="profile-contact-body">
                        {contactHistory.length === 0 ? (
                            <span className="profile-contact-empty body-small-14">
                                Žiadna história kontaktovaní
                            </span>
                        ) : (
                            <ul className="profile-contact-list">
                                {contactHistory.map((item) => (
                                    <li key={item.id}>{/* sem neskor ContactCard */}</li>
                                ))}
                            </ul>
                        )}

                        <button
                            className="btn btn-primary profile-contact-btn"
                            onClick={handleKontaktovat}
                        >
                            Kontaktovať
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FirmaProfilPage;
