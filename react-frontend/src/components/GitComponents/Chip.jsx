import React from "react";
import "./Chip.css";

const Chip = ({ text, onRemove }) => {
    return (
        <div className="chip">
            <span className="chip-text mono-16">{text}</span>

            <button
                className="chip-remove"
                onClick={onRemove}
                aria-label="Remove"
                type="button"
            >
                ✕
            </button>
        </div>
    );
};

export default Chip;