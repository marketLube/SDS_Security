import React from "react";

export const PrimaryButton = ({ children, className }) => {
    return (
        <button className={`w-36 h-12 bg-accent-foreground text-secondary-foreground rounded-sm hover:cursor-pointer ${className}`}>
            {children}
        </button>
    );
};
