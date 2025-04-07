import React, { useState } from "react";

export const Accordian = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-full bg-card-background md:max-w-[600px] mb-8 rounded-xl hover:cursor-pointer p-5"
        >
            {/* Title Section */}
            <div className="flex items-center justify-between w-full">
                <h6>{data?.title}</h6>
                <h6>{isOpen ? "-" : "+"}</h6>
            </div>

            {/* Description Section */}
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100 py-3" : "max-h-0 opacity-0"}`}>
                <p>{data?.description}</p>
            </div>
        </div>
    );
};
