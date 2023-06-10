'use client'
import Image from "next/image";
import React from "react";
import Link from "next/link";

//icon
import DoneIcon from '@mui/icons-material/Done';

const socialIcons = [
  {
    id: 1,
    src: "/images/icons/facebook_icon.svg",
    alt: "facebook",
    size: 40,
  },
  {
    id: 2,
    src: "/images/icons/instagram_icon.svg",
    alt: "instagram_icon",
    size: 40,
  },
  {
    id: 3,
    src: "/images/icons/pinterest_icon.svg",
    alt: "pinterest_icon",
    size: 40,
  },
  {
    id: 4,
    src: "/images/icons/youtube_icon.svg",
    alt: "youtube_icon",
    size: 40,
  },
];

const Footer = () => {
  return (
    <footer className="pt-[112px] pb-[24px] bg-custom-gray">
      <div className="container px-5  text-main1">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[24px] w-1/3">
            <div>
              <h3 className="mb-[16px]">Request a call</h3>

              <label className="relative">
                <input
                  className="pl-[33px] py-[14px] pr-[47px] placeholder-additional2 text-additional2"
                  type="text"
                  placeholder="206-949-2251"
                />
                <button className="absolute p-[11.3px] right-[0px] bg-accent "><DoneIcon /> </button>
              </label>
            </div>

            <div>
              <h3 className="mb-[8px]">Mon-Sun</h3>
              <h3>9:00 - 19.00</h3>
            </div>
            <h3>2141 15th Ave SE Seattle, WA </h3>
          </div>
          <div className="flex flex-col justify-between items-center w-1/3">
            <Link href="/">
              <Image
                src="images/Subtract.svg"
                width={71}
                height={71}
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-[24px] w-1/3">
            <a className="text-right" href="mailto: abc@example.com">
              Send Email
            </a>
            <a className="text-right" href="tel:8882192787">
              34315234545
            </a>

            <div className="flex justify-end items-center gap-[16px]">
              {socialIcons.map((icon) => (
                <Link href="/">
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    height={icon.size}
                    width={icon.size}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-[59px] font-normal font-inter text-additional1">
          <h3>Copyright © 2010-2023</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
