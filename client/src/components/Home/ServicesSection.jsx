import React from "react";
import { ServiceCard } from "../ui/Cards";
import { servicesList } from "../../data/servicesList";
import { SectionTitle } from "../ui/SectionTitle";



export const ServicesSection = () => {
    return (
        <section className=" flex flex-col ">
            <SectionTitle
                title="Providing Security Services That Work for You"
                description="Explore smart security solutions designed to protect your home and business with advanced technology, ensuring safety and peace of mind."
            />

            {/* Stacked Service Cards */}
            <div className="relative w-full  flex justify-center mt-4 h-[750px] sm:h-[900px] md:h-[550px] ">
                {servicesList?.map((value, index) => (
                    <ServiceCard
                        data={value}
                        key={index}
                        className="absolute shadow-lg "
                        style={{ top: `${-index * 15}px`, zIndex: servicesList.length - index }}
                    />
                ))}
            </div>
        </section>
    );
};
