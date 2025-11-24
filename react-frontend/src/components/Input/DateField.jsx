import React from "react";
import "./DateField.css";

const DateField = ({ label, id, ...props }) => {
    const dateId = id || `date-${label?.replace(/\s+/g, "-").toLowerCase()}`;

    return (
        <div className="field">
            {label && (
                <label className="field-label body-medium-16-bold" htmlFor={dateId}>
                    {label}
                </label>
            )}
            <div className="date-wrapper">
                <input
                    id={dateId}
                    type="datetime-local"
                    className="field-date-input body-medium-16-auto"
                    {...props}
                />
            </div>
        </div>
    );
};

export default DateField;