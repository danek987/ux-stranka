import React from "react";
import "./ValidityBadge.css";

// status: "platny" | "neplatny"
const ValidityBadge = ({ status = "platny" }) => {
    const isValid = status === "platny";

    return (
        <div
            className={`h2-24 validity-badge ${isValid ? "is-valid" : "is-invalid" }`}
        >
            {isValid ? "Platný" : "Neplatný"}
        </div>
    );
};

export default ValidityBadge;
