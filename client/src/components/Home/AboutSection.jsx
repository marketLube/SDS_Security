import React from "react";
import { ImageContainer } from "../ui/ImageContainer";

const achievements = [
    {
        icon: "500+",
        desc: "Happy clients trusting us for reliable and secure protection",
    },
    {
        icon: "900+",
        desc: "Projects completed with expert precision and quality service",
    },
    {
        icon: "4.5 ★",
        desc: "Rated for exceptional service and customer satisfaction.",
    },
];

export const AboutSection = () => {
    return (
        <section className="">
            <p className="sm:text-2xl/relaxed md:text-3xl/relaxed lg:text-4xl/relaxed font-dm-sans font-normal tracking-wide mb-6">
                We specialize in advanced sec
                <span className="text-gray-500">
                    urity solutions, offering high-quality CCTV cameras and smart access systems. With expert installation and 24/7 support,
                    we provide reliable protection and peace of mind for homes and businesses.
                </span>
            </p>
            
            <ImageContainer src={"/images/conf_room.png"} alt="conference room" />

            <div className=" mt-12  flex items-center justify-center md:justify-between flex-wrap gap-10 md:gap-20 ">
                {achievements?.map((value, index) => (
                    <div key={index} className="max-w-2xs ">
                        <h2 className={` ${index % 2 === 0 ? "text-accent-foreground" : "text-accent-secondary"} mb-3  `}>{value?.icon}</h2>
                        <p className="opacity-60">{value?.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
