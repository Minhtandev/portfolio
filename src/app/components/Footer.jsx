import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon.svg";
import PhoneIcon from "../../../public/phone-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <span className="font-bold text-4xl">TAN NGUYEN</span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;