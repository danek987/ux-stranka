import React from "react";
import "./RepoCard.css";

// props:
// icon → JSX (svg / emoji)
// title → string
// commits → number
const RepoCard = ({ icon, title, commits }) => {
    return (
        <div className="repo-card">
            <div className="repo-icon">{icon}</div>

            <div className="repo-content">
                <div className="repo-title label-12">{title}</div>
                <div className="repo-count chart-10" style={{ color: "var(--text-secondary)" }}>
                    {commits} commitov
                </div>
            </div>
        </div>
    );
};

export default RepoCard;
