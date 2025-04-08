import { ArrowLeft, ArrowRight, Camera, CloudMoon, RotateCcw, ScanFace } from "lucide-react";
import bg from "/images/Product_Hero_bg1.jfif"; // Replace with actual image path
import { PrimaryButton } from "../ui/Button";

//TODO: implement carousel animation
const slider = [
    { img: "/images/Product_Hero.png", title: "SDS - M6 Pro AI", description: "Next-level surveillance with AI precision" },
    { img: "/images/service1.png", title: "Advanced Night Vision", description: "Monitor up to 100ft in complete darkness" },
];

export function HeroCarousel() {
    return (
        <div className="relative h-[calc(100vh-72px)] w-full bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/30 z-10"></div>

            {/* Center Content */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-2">SDS – M6 Pro AI</h1>
                <p className="text-base md:text-lg mb-6 opacity-90">Next-level surveillance with AI precision</p>
                {/* <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 text-base rounded-md">
                    Shop Now
                </Button> */}
                <PrimaryButton>Shop Now</PrimaryButton>
            </div>

            {/* Arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 z-30 border border-white rounded-full p-2 text-white hover:bg-white/10">
                <ArrowLeft size={20} />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 z-30 border border-white rounded-full p-2 text-white hover:bg-white/10">
                <ArrowRight size={20} />
            </button>

            {/* Bottom Features */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-full max-w-6xl px-4">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-white text-xs md:text-sm">
                    <Feature icon={<Camera size={16} />} text="4K Ultra HD Resolution" />
                    <Feature icon={<CloudMoon size={16} />} text="Night vision upto 100ft" />
                    <Feature icon={<RotateCcw size={16} />} text="360° Pan & Tilt" />
                    <Feature icon={<ScanFace size={16} />} text="AI Motion Detection" />
                </div>
            </div>
        </div>
    );
}

const Feature = ({ icon, text }) => (
    <div className="flex items-center gap-2 opacity-90">
        {icon}
        <span>{text}</span>
    </div>
);