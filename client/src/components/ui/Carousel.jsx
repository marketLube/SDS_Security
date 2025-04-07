import React, { useEffect, useRef, useState } from "react";
import { ProductCard } from "./Cards";
//todo: THIS FILE CONTAINS 2 COROUSELS

const images = [
    "/Hero_bg.png",
    // "https://www.shutterstock.com/image-vector/cyber-security-technology-on-circuit-260nw-2420987375.jpg",
    "https://media.istockphoto.com/id/1312912134/photo/house-living-smart-home.jpg?s=612x612&w=0&k=20&c=wyaw8_oRoyOxOAxCdm2wC6SGkzyvuvfruFy7Z6K1jSk=",
    "https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-ai-generated-cyber-security-and-data-privacy-lock-symbol-and-protection-image_15692197.jpg",
];

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    const handleIndicator = (index) => {
        if (currentIndex > 3) {
            return setCurrentIndex((index % 3) - 1);
        }
        setCurrentIndex(index);
    };

    return (
        <div className="relative  h-screen overflow-hidden w-full">
            {/* images */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute w-full  h-full bg-cover md:bg-center bg-no-repeat   transition-opacity duration-1000 
                        ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundPositionX: window.innerWidth < 768 && "60%",
                        // backgroundPosition: window.innerWidth < 768 ? "center right 100px" : "center right 200px",
                    }}
                ></div>
            ))}

            {/* indicator */}
            <div className="absolute  bottom-5 left-1/2 transform -translate-x-1/2 w-full px-12 md:px-24  flex justify-center   space-x-5">
                {images.map((_, index) => {
                    return index > 2 ? null : (
                        <div
                            onClick={() => handleIndicator(index)}
                            key={index}
                            className={` relative w-full  h-1    rounded-full transition-all duration-300 ${
                                index === currentIndex ? "bg-white scale-y-110" : "bg-gray-400"
                            } hover:cursor-pointer before:absolute before:h-10 before:w-full before:trasform before:-translate-y-5  before:content-[''] `}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};

export const ProductCarousel = ({ productList }) => {
    const [translateX, setTranslateX] = useState(0);
    const cardRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(150); // Default width
    const productCount = productList?.length;

    //fetch card width
    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            if (entries[0]) {
                setCardWidth(entries[0].contentRect.width);
            }
        });

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, []);

    //auto scroll
    useEffect(() => {
        const interval = setInterval(() => {
            setTranslateX((prev) => (prev + cardWidth) % ((productCount - 1) * cardWidth));
        }, 3000);
        return () => clearInterval(interval);
    }, [productCount, cardWidth]);

    return (
        <>
            <div className="relative w-full overflow-hidden">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>

                {/* carousel - container */}
                <div
                    style={{ transform: `translateX(-${translateX}px)` }}
                    className=" flex justify-between w-full  overflow-x-visible md:scrollbar-hide  gap-5 transition-transform duration-500 ease-in-out "
                >
                    {productList?.map((product, index) => (
                        <div ref={index === 0 ? cardRef : null} className="" key={index}>
                            <ProductCard data={product} />
                        </div>
                    ))}
                </div>

                {/* Right Fade */}
                <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>

            {/* button container */}
            <div className="absolute right-0 -bottom-12 flex gap-3  ">
                <button
                    className="flex justify-center items-center  w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary-background hover:cursor-pointer"
                    onClick={() => setTranslateX((prev) => (prev - cardWidth) % (productCount * cardWidth))}
                >
                    <img src="/icons/icon_back.png" alt="" className="inline" />
                </button>
                <button
                    className="flex justify-center items-center  w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent-foreground hover:cursor-pointer"
                    onClick={() => setTranslateX((prev) => (prev + cardWidth) % (productCount * cardWidth))}
                >
                    <img src="/icons/icon_forward.png" alt="" className="inline" />
                </button>
            </div>
        </>
    );
};
