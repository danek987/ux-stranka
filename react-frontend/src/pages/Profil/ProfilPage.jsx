import React from "react";
import "./ProfilPage.css";

import LanguageTag from "../../components/GitComponents/LanguageTag";
import RepoCard from "../../components/GitComponents/RepoCard";
import CommitList from "../../components/GitComponents/CommitList";
import InfoCard from "../../components/GitComponents/InfoCard";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";

const ProfilPage = () => {
    const navigate = useNavigate();
    const handleGoToMenu = () => {
        navigate("/");
    };
    const totalCommits = 275;

    const repos = [
        {
            id: 1,
            title: "WebStránka",
            commits: 125,
            frequency: "1,48 commit / deň",
            commitsData: [
                { label: "P", kind: "perfektivne", count: 19 },
                { label: "A", kind: "adaptivne", count: 9 },
                { label: "K", kind: "korektivne", count: 68 },
                { label: "O", kind: "admin", count: 29 },
            ],
        },
        {
            id: 2,
            title: "Zadanie Programovanie",
            commits: 115,
            frequency: "2,12 commit / deň",
            commitsData: [
                { label: "P", kind: "perfektivne", count: 22 },
                { label: "A", kind: "adaptivne", count: 13 },
                { label: "K", kind: "korektivne", count: 58 },
                { label: "O", kind: "admin", count: 22 },
            ],
        },
        {
            id: 3,
            title: "TO DO app",
            commits: 35,
            frequency: "1,05 commit / deň",
            commitsData: [
                { label: "P", kind: "perfektivne", count: 12 },
                { label: "A", kind: "adaptivne", count: 17 },
                { label: "K", kind: "korektivne", count: 4 },
                { label: "O", kind: "admin", count: 2 },
            ],
        },
    ];

    return (
        <main className="profile page">
            <h1 className="display-48">Štýlový profil</h1>

            <section className="profile-grid">
                {/* lava horna karta – identita */}
                <div className="profile-card card profile-summary">
                    <div className="profile-id h1-32">Y8584668</div>

                    <div className="profile-github body-medium-16">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="GitHub"
                            className="profile-github-icon"
                        />
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
                            <span className="label-12-bold">Perfektívne</span>
                            <span className="legend-percent label-12-bold">20%</span>
                        </div>
                        <div className="profile-legend-item">
                            <span className="legend-dot legend-dot-adapt" />
                            <span className="label-12-bold">Adaptívne</span>
                            <span className="legend-percent label-12-bold">12%</span>
                        </div>
                        <div className="profile-legend-item">
                            <span className="legend-dot legend-dot-kor" />
                            <span className="label-12-bold">Korektívne</span>
                            <span className="legend-percent label-12-bold">57%</span>
                        </div>
                        <div className="profile-legend-item">
                            <span className="legend-dot legend-dot-admin" />
                            <span className="label-12-bold">
                                Administratívne/Ostatné
                            </span>
                            <span className="legend-percent label-12-bold">11%</span>
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

                {/* statistiky repozitarov */}
                <div className="profile-card card profile-repos">
                    <h2 className="h2-24 profile-card-title">
                        Štatistiky repozitárov
                    </h2>

                    <div className="profile-repos-content">
                        <div className="profile-repos-list">
                            {repos.map((repo) => (
                                <div
                                    key={repo.id}
                                    className="profile-repo-row"
                                >
                                    {/* vlavo – repo info */}
                                    <RepoCard
                                        icon="🗄️"
                                        title={repo.title}
                                        commits={repo.commits}
                                    />

                                    {/* vpravo – commit list + frekvencia */}
                                    <div className="profile-repo-metrics">
                                        <CommitList data={repo.commitsData} />
                                        <InfoCard
                                            title="Frekvencia commitov"
                                            value={repo.frequency}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="profile-save">
                <Button className="btn btn-primary" onClick={handleGoToMenu}>
                    Uložiť
                </Button>
            </div>
        </main>
    );
};

export default ProfilPage;
