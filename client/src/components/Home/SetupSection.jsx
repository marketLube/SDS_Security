import React from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { setupData } from "../../data/setupData";
import { SetupCard } from "../ui/Cards";

export const SetupSection = () => {
    return (
        <section className="">
            {/* section title */}
            <SectionTitle
                title="Fast and Simple Security Setup"
                description="Get protected quickly with our easy setup process. From consultation to installation, we handle everything to ensure your security system is up and running smoothly"
            />

            {/* setup cards */}
            <div className="flex flex-col md:flex-row flex-wrap gap-5 md:gap-24 md:px-3 relative ">
                <div className="w-full flex flex-col md:flex-row gap-5 md:gap-20 justify-start md:ml-16 z-30 ">
                    <SetupCard data={setupData[0]} color={1}  />
                    <SetupCard data={setupData[1]} color={2}  />
                </div>
                <div className="w-full flex flex-col md:flex-row gap-5 md:gap-20 justify-end md:mr-10 z-10">
                    <SetupCard data={setupData[2]} color={2}  />
                    <SetupCard data={setupData[3]} color={1}  />
                </div >

                <div className="absolute z-0 top-1/4 left-0 hidden  lg:block xl:hidden">
                    <img src="/images/vector_lines-group.png" alt="" />
                </div>
            </div>
        </section>
    );
};
