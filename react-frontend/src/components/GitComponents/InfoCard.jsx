import React from "react";
import "./InfoCard.css";

const InfoCard = ({ title, value }) => {
    return (
        <div className="info-card">
            <div className="info-title h3-20">{title}</div>
            <div className="info-value body-large-18">{value}</div>
        </div>
    );
};

export default InfoCard;
