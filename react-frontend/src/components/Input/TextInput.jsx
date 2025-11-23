import React from "react";
import "./TextInput.css";

// jednoduchy input s labelom nad nim
const TextInput = ({ label, id, ...props }) => {
    const inputId = id || `input-${label?.replace(/\s+/g, "-").toLowerCase()}`;

    return (
        <div className="field">
            {label && (
                <label className="field-label label-12" htmlFor={inputId}>
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className="field-input"
                {...props}
            />
        </div>
    );
};

export default TextInput;
