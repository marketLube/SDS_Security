import React from "react";
import { HeroSection } from "../components/Home/HeroSection";
import { clientImages } from "../data/clientImages";
import { Slider } from "../components/ui/Slider";
import { OurPromises } from "../components/Home/OurPromises";
import { AboutSection } from "../components/Home/AboutSection";
import { ProductSection } from "../components/Home/ProductSection";
import { ServicesSection } from "../components/Home/ServicesSection";
import { SetupSection } from "../components/Home/SetupSection";
import { BlogSection } from "../components/Home/BlogSection";
import { HelpSection } from "../components/Home/HelpSection";

export const HomePage = () => {
    return (
        <>
            {/* // TODO: Bg image positioning */}
            <HeroSection />

            <Slider images={clientImages} />
            <OurPromises />
            <AboutSection />
            <ProductSection />

            {/* // TODO: responsiveness bug on ServicesSection */}
            <ServicesSection />

            {/* // TODO: update responsiveness of vector_lines */}
            <SetupSection />

            <BlogSection />

            <HelpSection />
        </>
    );
};
