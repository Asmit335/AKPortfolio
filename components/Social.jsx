import Link from "next/link";
import React from "react";

import { FaGithub, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "https://github.com/Asmit335" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/asmit335" },
  { icon: <FaTwitter />, path: "https://x.com/asmit_khanal" },
];
export default function Social() {
  return (
    <>
      <div className=" flex gap-7 mt-2 ">
        {socials.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.path}
              target="_blank"
              className=" flex  text-2xl  gap-5 hover:text-green-500 rounded-full w-9 h-9 border-green-500 hover:transition-all duration-500
              "
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
    </>
  );
}
