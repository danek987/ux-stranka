import React from "react";
import "./AnalyzaPageLoading.css";

const AnalyzaPageLoading = () => {
    // hodnoty pre spracovane commity
    const processedCommits = 20;
    const totalCommits = 158;
    const etaMinutes = 15;

    const progressPercent = Math.min(
        100,
        Math.round((processedCommits / totalCommits) * 100)
    );

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
