'use client'

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

const links = [
  {
    id: 1,
    title: "Products",
    link: "/products",
  },
  {
    id: 2,
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 3,
    title: "Recommendations",
    link: "/recommendations",
  },
  {
    id: 4,
    title: "Services",
    link: "/services",
  },
];

const Header = () => {
  const [bgWhite, setBgWhite] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setBgWhite(window.pageYOffset > 1)
      );
    }
  }, []);
  

  return (
    <header className={`header ${
      bgWhite ? "bg-white" : ""
    } w-full z-10 fixed`} >
      <div className="container ">
        <nav className="flex justify-between items-center  w-full">
          <Link href="/">
            <Image
            
              src="images/logos/Subtract.svg"
              width={71}
              height={71}
              alt="logo"
            />
          </Link>
          <ul className="flex gap-10 items-center">
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.link} >
                  {link.title}
                </Link>
              </li>
            ))}
            <Link href="/selected">
              <Image
                src="images/logos/mdi_heart.svg"
                height={50}
                width={50}
                alt="selected"
              />
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
