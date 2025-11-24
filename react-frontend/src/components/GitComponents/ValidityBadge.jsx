import React from "react";
import "./ValidityBadge.css";

// status: "platny" | "neplatny"
const ValidityBadge = ({ status = "platny" }) => {
    const isValid = status === "platny";

    return (
        <div
            className={`h1-32 validity-badge ${isValid ? "is-valid" : "is-invalid" }`}
        >
            {isValid ? "Platny" : "Neplatny"}
        </div>
    );
};

export default ValidityBadge;
