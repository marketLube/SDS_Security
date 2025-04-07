import React from "react";

export const Slider = ({ images }) => {
    return (
        <section className="overflow-hidden w-full flex flex-col gap-8  md:gap-12  no-inline-padding ">
            <h3 className="text-center  font-semibold text-gray-900 mb-6 px-6">Our Recent Clients & Partners</h3>
            <div className="relative w-full overflow-hidden">
                <div className="flex xs:space-x-8 w-max animate-scroll">
                    {[...images, ...images].map((image, index) => (
                        <div key={index} className="flex items-center  mx-4 md:mx-16 opacity-70">
                            <img src={image} alt={image} className="h-8 md:h-12 w-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
