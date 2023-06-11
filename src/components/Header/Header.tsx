import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
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

  return (
    <header >
      <div className="container ">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="images/Subtract.svg"
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
                src="images/mdi_heart.svg"
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
