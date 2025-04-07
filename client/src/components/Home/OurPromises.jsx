import React from "react";
import { ourPromises } from "../../data/ourPromises";
import { PromisesCard } from "../ui/Cards";
import { SectionTitle } from "../ui/SectionTitle";

export const OurPromises = () => {
    return (
        <section className="text-center w-full   ">
            <SectionTitle
                title="Your Protection, Our Promise Always There for You"
                description={
                    "We’re committed to keeping you safe with reliable, tailored security solutions. Trust us to protect what matters most, anytime, anywhere "
                }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ourPromises?.map((data, index) => (
                    <PromisesCard data={data} key={index} />
                ))}
            </div>
        </section>
    );
};
