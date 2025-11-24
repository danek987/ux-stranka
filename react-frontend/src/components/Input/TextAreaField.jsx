import React from "react";
import "./TextAreaField.css";

const TextAreaField = ({ label, id, rows = 4, ...props }) => {
    const textId = id || `textarea-${label?.replace(/\s+/g, "-").toLowerCase()}`;

    return (
        <div className="field">
            {label && (
                <label className="field-label body-medium-16-bold" htmlFor={textId}>
                    {label}
                </label>
            )}
            <textarea
                id={textId}
                className="field-textarea body-medium-16-auto"
                rows={rows}
                {...props}
            />
        </div>
    );
};

export default TextAreaField;
