import React from "react";
import "./DateField.css";

const DateField = ({ label, id, ...props }) => {
    const dateId = id || `date-${label?.replace(/\s+/g, "-").toLowerCase()}`;

    return (
        <div className="field">
            {label && (
                <label className="field-label label-12" htmlFor={dateId}>
                    {label}
                </label>
            )}
            <div className="date-wrapper">
                <input
                    id={dateId}
                    type="datetime-local"
                    className="field-date-input"
                    {...props}
                />
                <span className="date-icon">📅</span>
            </div>
        </div>
    );
};

export default DateField;