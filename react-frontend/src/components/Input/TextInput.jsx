import React from "react";
import "./TextInput.css";

// jednoduchy input s labelom nad nim
const TextInput = ({ label, id, ...props }) => {
    const inputId = id || `input-${label?.replace(/\s+/g, "-").toLowerCase()}`;

    return (
        <div className="field">
            {label && (
                <label className="field-label body-medium-16-bold" htmlFor={inputId}>
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className="field-input body-medium-16-auto"
                {...props}
            />
        </div>
    );
};

export default TextInput;
