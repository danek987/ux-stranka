import React from "react";
import "./Button.css";

// variant: "primary" | "secondary"
// size: "large" | "small"
const Button = ({ variant = "primary", size = "large", children, className = "", ...props }) => {
    const classes = [
        "btn-base",
        `btn-${variant}`,
        `btn-${size}`,
        className
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
