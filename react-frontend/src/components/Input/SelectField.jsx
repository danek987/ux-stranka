import React from "react";
import "./SelectField.css";

// options: pole objektov { value, label }
const SelectField = ({ label, id, options = [], ...props }) => {
    const selectId = id || `select-${label?.replace(/\s+/g, "-").toLowerCase()}`;

    return (
        <div className="field">
            {label && (
                <label className="field-label body-medium-16-bold" htmlFor={selectId}>
                    {label}
                </label>
            )}
            <div className="select-wrapper">
                <select id={selectId} className="field-select body-medium-16-auto" {...props}>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SelectField;
