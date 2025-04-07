import React from "react";
import { Link } from "react-router-dom";
import { SectionTitle } from "../components/ui/SectionTitle";
import { PrimaryButton } from "../components/ui/Button";
import { AboutSection } from "../components/Home/AboutSection";
import { ImageContainer } from "../components/ui/ImageContainer";
import { PromisesCard as SolutionCards } from "../components/ui/Cards";
import { exploreSolutions } from "../data/solutionsList";

export const AboutPage = () => {
  return (
    <div className="relative  ">
      {/* //TODO:fix screen height */}
      <section className="h-screen flex justify-between items-center relative">
        {/* section-title */}
        <SectionTitle
          className={"md:max-w-10/12  relative"}
          title={"Electronic, Cyber & Manpower Security Experts"}
          description={
            "Leading Bangalore-based security solutions provider offering electronic, cyber, and manpower security."
          }
          descWidth={"md:max-w-8/12"}
        >
          <Link to={"/contact"}>
            <PrimaryButton>Contact Us</PrimaryButton>
          </Link>
        </SectionTitle>

        <img
          className="absolute right-0 bottom-4/12 w-4/12 max-w-72"
          src="/images/Vector-cam.png"
          alt=""
        />
      </section>

      {/* about-section */}
      <AboutSection />

      {/* our missions */}
      <section>
        <SectionTitle
          className={"w-full lg:w-full !mb-0"}
          title={"Our Mission"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt sodales leo quis gravida. Nunc cursus commodo pulvinar. Aliquam consequat tristique ante nec accumsan. Donec sed fermentum quam, quis pellentesque nibh. Praesent gravida convallis nibh at sagittis. Nulla fermentum consectetur diam, eget semper risus tempus quis."
          }
          descWidth={"max-w-full"}
        />
      </section>

      {/* image */}
      <section>
        <ImageContainer
          src={"/images/security_room.png"}
          alt={"security_room"}
          className={"aspect-video object-cover object-right "}
        />
      </section>

      {/* Explore solutions */}
      <section>
        <SectionTitle
          title={"Explore Our Comprehensive Security Solutions"}
          description={
            "We provide integrated electronic, cyber, and manpower security to protect your business, assets, and people"
          }
          descWidth={"lg:max-w-9/12"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploreSolutions?.map((data, index) => (
            <SolutionCards data={data} key={index} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          title={"Let’s protect what matters most"}
          description={
            "Connect with us today for a tailored security solution."
          }
        >
          <Link to={"/contact"}>
            <PrimaryButton>Contact Us</PrimaryButton>
          </Link>
        </SectionTitle>
      </section>

      {/* get-in-touch */}
      <div className=" absolute  -z-10 bottom-0 left-1/2 -translate-x-1/2 ">
        <h1 className="huge-faded-text text-nowrap ">Get In Touch</h1>
      </div>
    </div>
  );
};
