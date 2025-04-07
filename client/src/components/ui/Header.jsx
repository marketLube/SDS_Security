import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 left-0 right-0 z-50   bg-white shadow-md">
            <div className="flex justify-between items-center p-6 md:px-24">
                <div className="text-2xl font-bold">
                    <Link to={"/"}>
                        <img src="/logo/SDS_Logo.svg" alt="SDS Logo" />
                    </Link>
                </div>

                {/* hamburger menu for mob-view  */}
                <div className=" md:hidden w-6" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
                            alt=""
                        />
                    )}
                </div>

                {/* nav-bar for Desktop view */}
                <div className="hidden md:flex space-x-6">
                    <Link to={"/products"} className="text-accent-foreground hover:text-black">
                        Product
                    </Link>
                    <Link to={"/solutions"} className="text-accent-foreground hover:text-black">
                        Solutions
                    </Link>
                    <Link to={"/blogs"} className="text-accent-foreground hover:text-black">
                        Blog
                    </Link>
                    <Link to={"/about"} className="text-accent-foreground hover:text-black">
                        About
                    </Link>
                    <Link to={"/contact"} className="text-accent-foreground hover:text-black">
                        Contact
                    </Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to={"/"} className="text-accent-foreground hover:text-black">
                        <img src="/icons/Facebook.png" alt="fb" />
                    </Link>
                    <Link to={"/"} className="text-accent-foreground hover:text-black">
                        <img src="/icons/insta.png" alt="insta" />
                    </Link>
                    <Link to={"/"} className="text-accent-foreground hover:text-black">
                        <img src="/icons/twitter.png" alt="twitter" />
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav
                    className="md:hidden flex flex-col items-center bg-background border-t border-border-primary py-4"
                    onClick={() => setIsOpen(false)}
                >
                    {/* nav-bar for mob view */}
                    <div className="md:hidden flex flex-col items-center   py-4">
                        <Link to={"/products"} className="text-accent-foreground hover:text-black mb-2">
                            Product
                        </Link>
                        <Link to={"/solution"} className="text-accent-foreground hover:text-black mb-2">
                            Solutions
                        </Link>
                        <Link to={"/blogs"} className="text-accent-foreground hover:text-black mb-2">
                            Blog
                        </Link>
                        <Link to={"/about"} className="text-accent-foreground hover:text-black mb-2">
                            About
                        </Link>
                        <Link to={"/contact"} className="text-accent-foreground hover:text-black ">
                            Contact
                        </Link>
                    </div>
                    <div className="md:hidden flex space-x-8">
                        <Link to={"/"} className="text-accent-foreground hover:text-black w-7">
                            <img src="/icons/Facebook.png" alt="fb" />
                        </Link>
                        <Link to={"/"} className="text-accent-foreground hover:text-black w-7">
                            <img src="/icons/insta.png" alt="insta" />
                        </Link>
                        <Link to={"/"} className="text-accent-foreground hover:text-black w-7">
                            <img src="/icons/twitter.png" alt="twitter" />
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
};
