import React from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { Accordian } from "../ui/Accordian";
import { PrimaryButton } from "../ui/Button";

export const HelpSection = () => {
    return (
        <section>
            <SectionTitle title={"Need Help? We’ve Got You Covered"} />
            <div className="flex flex-col md:flex-row  justify-center md:gap-10 w-full">
                <div className="flex flex-col  w-full  items-center">
                    <Accordian
                        data={{
                            title: "How do I install the security cameras?",
                            description: "this is the description for How do I install the security cameras?",
                        }}
                    />
                    <Accordian
                        data={{
                            title: "How do I install the security cameras?",
                            description: "this is the description for How do I install the security cameras?",
                        }}
                    />
                    <Accordian
                        data={{
                            title: "How do I install the security cameras?",
                            description: "this is the description for How do I install the security cameras?",
                        }}
                    />
                </div>
                <div className="flex flex-col  w-full items-center">
                    <Accordian
                        data={{
                            title: "How do I install the security cameras?",
                            description: "this is the description for How do I install the security cameras?",
                        }}
                    />
                    <Accordian
                        data={{
                            title: "How do I install the security cameras?",
                            description: "this is the description for How do I install the security cameras?",
                        }}
                    />
                    <Accordian
                        data={{
                            title: "How do I install the security cameras?",
                            description: "this is the description for How do I install the security cameras?",
                        }}
                    />
                </div>
            </div>

                <PrimaryButton className="block mx-auto">Contact Us</PrimaryButton>
        </section>
    );
};
