import React from "react";

export const SectionTitle = ({ title, description, descWidth, className, children = null, style }) => {
    return (
        <div className={`text-center mx-auto   lg:w-9/12 mb-12  ${className}`} style={style}>
            <h2 className="inline-block lg:max-w-9/12 mb-3">{title} </h2>
            <p className={`opacity-60 mx-auto ${descWidth}`}>{description} </p>
            {children && <div className="mt-12">{children}</div>}
        </div>
    );
};
