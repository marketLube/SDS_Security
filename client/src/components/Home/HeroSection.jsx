import React from "react";
import { Carousel } from "../ui/Carousel";

export const HeroSection = () => {
    return (
        <section className="relative  h-screen ">
            {/* Background Image */}
            <div className="absolute inset-0 ">
                <Carousel />
            </div>

            {/* text-4xl md:text-5xl lg:text-6xl */}
            {/* Hero Section */}
            <div className="absolute top-28 inset-0 flex flex-col justify-center items-start  px-12 md:px-24 text-white max-w-4xl">
                <h1 className="   font-bold leading-tight">Watching Over You, Like a Trusted Friend</h1>
                <p className="mt-4 opacity-80">
                    Trusted security solutions designed to protect your business and home with advanced technology and expert care.
                </p>
                <button className="mt-6 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded-md">
                    Get in Touch
                </button>
            </div>
        </section>
    );
};
