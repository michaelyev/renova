"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavTabs from "../common/navtabs/NavTabs";

/* const countertopBrandLogos = [
  {
    link: "/cosmos-countertops",
    logo: "/images/logos/cosmos_logo.svg",
  },
  {
    link: "/bedrosians",
    logo: "/images/logos/bedrosians_logo.svg",
  },
  {
    link: "/cambria",
    logo: "/images/logos/cambria_logo.svg",
  },
  {
    link: "/architectual_surfaces",
    logo: "/images/logos/architectual_surfaces_logo.svg",
  },
  {
    link: "/msi",
    logo: "/images/logos/msi_logo.svg",
  },
]; */

const brandLogos = {
  countertops: [
    {
      link: "/cosmos-countertops",
      logo: "/images/logos/cosmos_logo.svg",
    },
    {
      link: "/bedrosians",
      logo: "/images/logos/bedrosians_logo.svg",
    },
    {
      link: "/cambria",
      logo: "/images/logos/cambria_logo.svg",
    },
    {
      link: "/architectual_surfaces",
      logo: "/images/logos/architectual_surfaces_logo.svg",
    },
    {
      link: "/msi",
      logo: "/images/logos/msi_logo.svg",
    },
  ],
  cabinets: [
    {
      link: "/msi",
      logo: "/images/logos/msi_logo.svg",
    },
    {
      link: "/cosmos-countertops",
      logo: "/images/logos/cosmos_logo.svg",
    },
    {
      link: "/bedrosians",
      logo: "/images/logos/bedrosians_logo.svg",
    },
    {
      link: "/cambria",
      logo: "/images/logos/cambria_logo.svg",
    },
    {
      link: "/architectual_surfaces",
      logo: "/images/logos/architectual_surfaces_logo.svg",
    },
  ],
  tile: [
    {
      link: "/cambria",
      logo: "/images/logos/cambria_logo.svg",
    },
    {
      link: "/msi",
      logo: "/images/logos/msi_logo.svg",
    },
    {
      link: "/cosmos-countertops",
      logo: "/images/logos/cosmos_logo.svg",
    },
    {
      link: "/bedrosians",
      logo: "/images/logos/bedrosians_logo.svg",
    },

    {
      link: "/architectual_surfaces",
      logo: "/images/logos/architectual_surfaces_logo.svg",
    },
  ]
};

const Manufacturers = () => {

  const [activeTrade, setActiveTrade] = useState('countertops');

  return (
    <section >
      <div className="container">
      <div className="mt-[128px]">
        <h3 className="font-darkGrotesque font-bold text-4xl leading-tight mb-[40px]">
          Manufacturers
        </h3>
        <p className="pb-[24px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          distinctio consequuntur obcaecati deleniti alias vero ab deserunt
          dolores impedit mollitia. Lorem ipsum dolor sit amet. Lorem ipsum
          dolor sit amet.
        </p>
      </div>

      <NavTabs tabName={'manufacturers'} />
      
      {/* <div className="flex gap-5 border-b-2 border-solid border-additional2 ">
        <div onClick={() => setActiveTrade('countertops')} className={`py-[16px] px-[24px] ${activeTrade === 'countertops' ? 'bg-additional2 text-main1' : 'bg-main1 text-additional2'  } `}>
          Countertops
        </div>
        <div onClick={() => setActiveTrade('tile')} className={`py-[16px] px-[24px] ${activeTrade === 'tile' ? 'bg-additional2 text-main1' : 'bg-main1 text-additional2'  } `}>
          Tiles
        </div>

        <div onClick={() => setActiveTrade('cabinets')} className={`py-[16px] px-[24px] ${activeTrade === 'cabinets' ? 'bg-additional2 text-main1' : 'bg-main1 text-additional2'  } `}>
          Kitchen Cabinets
        </div>
      </div> */}

      <div className="flex max-w-[1096px] mx-auto items-center justify-around flex-wrap mt-[57px]">
        {brandLogos[activeTrade].map((brand, index) => (
          <Link href={brand.link} key={index}>
            <Image src={brand.logo} alt="Brand Logo" width={315} height={160} />
          </Link>
        ))}{" "}
      </div>
      </div>
      
    </section>
  );
};

export default Manufacturers;
