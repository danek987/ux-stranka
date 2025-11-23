import React from "react";
import "./SelectField.css";

// options: pole objektov { value, label }
const SelectField = ({ label, id, options = [], ...props }) => {
    const selectId = id || `select-${label?.replace(/\s+/g, "-").toLowerCase()}`;

    return (
        <div className="field">
            {label && (
                <label className="field-label label-12" htmlFor={selectId}>
                    {label}
                </label>
            )}
            <div className="select-wrapper">
                <select id={selectId} className="field-select" {...props}>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                <span className="select-arrow">⌄</span>
            </div>
        </div>
    );
};

export default SelectField;
