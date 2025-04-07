import React from "react";

export const Badge = ({ children }) => {
    return (
        <div
            className="border border-accent-foreground text-accent-foreground rounded-3xl md:rounded-4xl 
         px-2.5 py-1  md:px-4  inline-block text-nowrap w-max"
        >
            <p className="text-md ">{children}</p>
        </div>
    );
};
