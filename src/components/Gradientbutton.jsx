import React from "react";
import './Gradientbutton.css';
export default function GradientButton({
    children,
    onClick,
    size = "md",
    theme = "default",
    disabled = false,
    icon = null,
}) {
    const classes = [
        "gradient-btn-wrapper",
        size !== "md" ? `size-${size}` : "",
        theme !== "default" ? `theme-${theme}` : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >
            <span className="gradient-btn-inner">
                {icon && <span>{icon}</span>}
                {children}
            </span>
        </button>
    );
}