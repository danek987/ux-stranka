import React from "react";
import "./TextAreaField.css";

const TextAreaField = ({ label, id, rows = 4, ...props }) => {
    const textId = id || `textarea-${label?.replace(/\s+/g, "-").toLowerCase()}`;

    return (
        <div className="field">
            {label && (
                <label className="field-label label-12" htmlFor={textId}>
                    {label}
                </label>
            )}
            <textarea
                id={textId}
                className="field-textarea"
                rows={rows}
                {...props}
            />
        </div>
    );
};

export default TextAreaField;
