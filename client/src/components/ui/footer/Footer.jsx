import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FooterLinks } from "./FooterLinks";
import { FooterForm } from "./FooterForm";

export const Footer = () => {
    return (
        <footer className="bg-card-background font-inter font-normal ">
            {/*------------------footer-top-part--------------------- */}
            <FooterForm />

            {/*-----------------footer-botton-part------------ */}
            <FooterLinks />
        </footer>
    );
};
