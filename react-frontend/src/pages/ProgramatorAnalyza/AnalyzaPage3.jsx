import React, { useState } from "react";
import "./AnalyzaPage3.css";
import "./AnalyzaPage2.css";
import Button from "../../components/Button/Button";
import ValidityBadge from "../../components/GitComponents/ValidityBadge";
import RepoCardAnalyze from "../../components/GitComponents/RepoCardAnalyze";
import { useNavigate } from "react-router-dom";

const repos = [
    { id: "zadanie-programovanie", title: "Zadanie programovanie", commits: 115 },
    { id: "todo-app", title: "TO DO App", commits: 35 },
    { id: "webstranka", title: "WebStranka", commits: 125, language: "HTML" },
    { id: "zadanie-usaa", title: "Zadanie USAA", commits: 268 },
    { id: "zadanie-programovanie2", title: "Zadanie programovanie2", commits: 10, language: "Java" },
    { id: "python-ucenie", title: "Python učenie", commits: 158 },
    { id: "react-app", title: "React App", commits: 78 }
];

const AnalyzaPage3 = () => {
    const navigate = useNavigate();

    const [selectedRepos, setSelectedRepos] = useState({});
    const [showError, setShowError] = useState(false);

    // stlacanie kariet repozitarov
    const toggleRepo = (id) => {
        setSelectedRepos((prev) => {
            const next = { ...prev, [id]: !prev[id] };

            // ak nieco oznacime, chybu mozeme skryt
            if (Object.values(next).some(Boolean)) {
                setShowError(false);
            }

            return next;
        });
    };

    const allocatedCommits = repos.reduce((sum, repo) => {
        if (selectedRepos[repo.id]) {
            return sum + repo.commits;
        }
        return sum;
    }, 0);

    const handleGoToAnalyzeLoad = () => {
        const hasSelected = Object.values(selectedRepos).some(Boolean);

        if (!hasSelected) {
            setShowError(true);
            return;
        }

        setShowError(false);
        navigate("/analyzaload");
    };

    return (
        <main className="analyza2-page page">
            <h1 className="analyza2-title display-48">Generovanie profilu</h1>

            <div className="analyza2-layout">
                {/* lavy panel */}
                <section className="analyza2-left card">
                    <div className="provider-block">
                        <div className="provider-main">
                            <span className="provider-name h1-32">GitHub</span>
                            <span
                                className="provider-icon provider-icon-github"
                                aria-hidden="true"
                            />
                        </div>
                        <ValidityBadge className="badge" status="platny" />
                    </div>

                    <div className="provider-block">
                        <div className="provider-main">
                            <span className="provider-name h1-32">GitLab</span>
                            <span
                                className="provider-icon provider-icon-gitlab"
                                aria-hidden="true"
                            />
                        </div>
                        <ValidityBadge status="neplatny" />
                    </div>

                    <Button variant="primary">
                        Načitať
                    </Button>
                </section>

                {/* pravy panel */}
                <section className="analyza2-right card analyza-loaded-right">
                    <div className="analyza-loaded-top">
                        <div className="analyza-loaded-commits body-medium-16-auto">
                            Počet alokovaných commitov: {allocatedCommits} / 350
                        </div>

                        <div className="analyza-loaded-options body-medium-16-auto">
                            <label className="loaded-option">
                                <input type="checkbox" defaultChecked />
                                <span>Random vzorka</span>
                            </label>

                            <label className="loaded-option">
                                <input type="checkbox" name="limitMode" />
                                <span>Limit</span>
                            </label>

                            <div className="loaded-slider">
                                <span className="loaded-slider-label">
                                    Limit na repozitár
                                </span>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    defaultValue="0"
                                />
                                <span className="loaded-slider-range body-small-14">
                                    0–100
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="analyza-loaded-center">
                        <p className="body-medium-16-auto analyza-loaded-hint">
                            Je potrebné označiť repozitáre k analýze
                            <br />
                            kliknutím na karty repozitárov
                        </p>

                        <Button
                            size="large"
                            variant="primary"
                            onClick={handleGoToAnalyzeLoad}
                        >
                            Spustiť
                        </Button>

                        {showError && (
                            <p className="error body-small-14">
                                Je potrebné označiť aspoň jeden repozitár.
                            </p>
                        )}
                    </div>

                    <div className="analyza-loaded-sort body-medium-16-auto">
                        Zoradiť podľa počtu commitov ↑
                    </div>

                    <div className="analyza-loaded-repos">
                        {repos.map((repo) => (
                            <RepoCardAnalyze
                                key={repo.id}
                                title={repo.title}
                                commits={repo.commits}
                                language={repo.language}
                                selected={!!selectedRepos[repo.id]}
                                onClick={() => toggleRepo(repo.id)}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default AnalyzaPage3;
