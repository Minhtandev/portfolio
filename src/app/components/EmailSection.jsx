"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon.svg";
import PhoneIcon from "../../../public/phone-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
      </div>
      <ul className="flex items-start gap-3 flex-col">
        <li className="flex items-center gap-3">
          <Image src={GithubIcon} alt="Github Icon" />
          <Link href='https://github.com/Minhtandev' className="font-bold text-xl text-white">https://github.com/Minhtandev</Link>
        </li>
        <li className="flex items-center gap-3">
          <Image src={LinkedinIcon} alt="LinkedIn Icon" />
          <Link href='https://www.linkedin.com/in/tannguyen2502' className="font-bold text-xl text-white">https://www.linkedin.com/in/tannguyen2502/</Link>
        </li>
        <li className="flex items-center gap-3">
          <Image className="w-12" src={EmailIcon} alt="Email Icon" />
          <Link href='mailto:tannm25022002@gmail.com' className="font-bold text-xl text-white">tannm25022002@gmail.com</Link>
        </li>
        <li className="flex items-center gap-3">
          <Image className="w-12" src={PhoneIcon} alt="Phone Icon" />
          <Link href='tel:+84338179800' className="font-bold text-xl text-white">0338179800</Link>
        </li>
      </ul>
    </section>
  );
};

export default EmailSection;