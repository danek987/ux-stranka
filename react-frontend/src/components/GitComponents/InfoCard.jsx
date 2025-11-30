import React from "react";
import "./InfoCard.css";

const InfoCard = ({ title, value }) => {
    return (
        <div className="info-card">
            <div className="info-title label-12-bold">{title}</div>
            <div className="info-value chart-10">{value}</div>
        </div>
    );
};

export default InfoCard;
