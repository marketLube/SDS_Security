import React, { useState } from "react";


export const Categories = ({categories}) => {
    const [selected, setSelected] = useState("All");


    return (
        <div className="flex items-center justify-between  mt-6 border-b border-border-primary h-10">
            <div className="flex gap-6 md:gap-8 h-full overflow-x-auto">
                {["All", ...categories].map((tag, index) => (
                    <p
                        key={index}
                        onClick={() => setSelected(tag)}
                        className={`text-md md:text-lg px-2 font-medium cursor-pointer transition-opacity duration-300 ${
                            selected === tag ? "border-b-2 border-accent-foreground text-accent-foreground" : "opacity-60"
                        }`}
                    >
                        {tag}
                    </p>
                ))}
            </div>

            <div className="h-full pl-5">
                <select name="filter" className="text-gray-700 w-32 outline-0 " id="filter">
                    <option value="most-recent">Most recent</option>
                    <option value="relevant">Relevant</option>
                    <option value="higher-lower">Price:Higher to lower</option>
                    <option value="lower-higher">Price:Lower to higher</option>
                </select>
            </div>
        </div>
    );
};
