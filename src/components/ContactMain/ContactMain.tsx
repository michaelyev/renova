import React from 'react'
import Image from 'next/image';

const Contact = () => {
  return (
    <section>
      <div className="container my-[128px]">
        <div className="">
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

        <div className="flex mb-[128px] justify-between">
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
            <div className="mb-[40px] ">
              <h3 className="mb-[8px] text-accent underline">Attachment</h3>
              <p className="text-additional2">
                Share a photo or file to enhance our assistance to you!
              </p>
            </div>
            <button className="border-accent border-2 w-[242px] h-[72px]">
              Consultation
            </button>
          </div>
          <div>
            <h3 className="font-inter font-bold text-xl leading-[1.2104] pb-[24px]">
              Call
            </h3>
            <h3 className="mb-[40px]">206-492-1214</h3>
            <div>
              <h3 className="mb-[8px]">Mon-Sun</h3>
              <h3>9:00 - 19.00</h3>
            </div>
            <h3 className="pb-[40px]">2141 15th Ave SE Seattle, WA </h3>
            <h3 className="font-inter font-bold text-xl leading-[1.2104] pb-[24px]">
              Location
            </h3>
            <h3 className="mb-[110px]">3636 45th st Seattle, WA</h3>

            <div className="contacts_map">
              <iframe
                src="https://www.google.com/maps/embed/v1/search?q=11121+Valley+Ave+E,+Puyallup,+WA+98372&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/*  <Image src='/images/mappp.svg' width={550} height={224}/> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact