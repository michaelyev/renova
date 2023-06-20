'use client'

import Button from "@/components/common/button/Button";
import React from "react";
import Contact from "@/components/ContactMain/ContactMain";
import Reviews from "@/components/Reviews/Reviews";

const page = () => {
  return (
    <section className="container pt-[100px]">
      <div>
        <div className="flex h4 justify-between">
          <p>Selected Products (0)</p>
          
        </div>
      </div>
      <div className="flex text-center items-center justify-between mt-[24px] mb-[64px] ">
        <div className="max-w-[762px] h6" >
          <p>
            You haven't liked any product yet. We have a huge selection. Please
            go to the catalog to select something
          </p> 
          <div className="flex justify-center mt-[16px]">
          <Button id="browse" />
          </div>
          
        </div>
        <div>
          <div className="flex flex-col items-center border-2 border-solid px-[80px] py-[48px] border-additional1">
            <h3 className="font-inter font-bold text-xl leading-[1.2104] pb-[40px]">
              Request a quote
            </h3>
            <p className="mb-[24px]">Leave your contacts</p>
            <input
              className="h-[48px] w-[377px] bg-main1 placeholder-additional2  mb-[16px]"
              type="text"
              placeholder="Name"
            />
            <input
              className="h-[48px] w-[377px] bg-main1 placeholder-additional2 mb-[16px]"
              type="text"
              placeholder="000-000-0000"
            />
            <input
              className="h-[48px] w-[377px] bg-main1 placeholder-additional2 mb-[16px]"
              type="text"
              placeholder="Your@email.com"
            />
            <input
              className="h-[48px] w-[377px] bg-main1 placeholder-additional2 mb-[16px]"
              type="text"
              placeholder="Your address"
            />
            <input
              className="h-[48px] w-[377px] bg-main1 placeholder-additional2 mb-[24px]"
              type="text"
              placeholder="Description"
            />

            <button className="border-accent border-2 w-[242px] h-[72px]">
              Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="mb-[128px]">
        <p className="h5">How is the order paid?</p>
        <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>

      <p className="h3 mb-[40px]">You may also like</p>


      <div className="mb-[128px]">
      <Reviews card={<div className="h-[240px] w-[427px] bg-gray-500"></div>}/>

      </div>
      


    </section>
  );
};

export default page;
