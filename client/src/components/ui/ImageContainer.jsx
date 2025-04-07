import React from "react";

export const ImageContainer = ({ src, alt, style = "wide" , className}) => {
    return <img className={` aspect-[6/4] md:aspect-auto rounded-lg object-cover md:w-full  ${className}`} src={src} alt={alt} />;
};
