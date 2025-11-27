import React, { useEffect } from "react";
import "./AnalyzaPageLoading.css";
import { useNavigate } from "react-router-dom";

const AnalyzaPageLoading = () => {
    const navigate = useNavigate();

    // hodnoty pre spracovane commity
    const processedCommits = 20;
    const totalCommits = 158;
    const etaMinutes = 15;

    const progressPercent = Math.min(
        100,
        Math.round((processedCommits / totalCommits) * 100)
    );

    // presmerovanie 2 sekundach
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/profil");
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <main className="analyza-loading-page">
            <h1 className="analyza-loading-title display-48">
                Analýza
            </h1>

            <section className="analyza-loading-card">
                <p className="loading-commits h3-20">
                    Spracované commity: {processedCommits}/{totalCommits}
                </p>

                <p className="loading-eta h3-20">
                    ETA: {etaMinutes} min.
                </p>

                <div className="loading-progress-wrapper">
                    <div className="loading-progress-bar">
                        <div
                            className="loading-progress-fill"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AnalyzaPageLoading;
