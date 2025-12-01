import React from "react";
import "./LanguageTag.css";

// jednoduchy tag pre programovaci jazyk
// text - nazov jazyka (Java, Python...)
// iconUrl - url na ikonku jazyka
const LanguageTag = ({ text, iconUrl, alt }) => {
    return (
        <div className="language-tag">
            {iconUrl && (
                <img
                    src={iconUrl}
                    alt={alt || text}
                    className="language-tag-icon"
                />
            )}

            {/* mono-16 aby sedelo s figmou */}
            <span className="language-tag-text mono-16">{text}</span>
        </div>
    );
};

export default LanguageTag;
