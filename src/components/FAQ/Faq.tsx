"use client";
import Image from "next/image";
import { useState } from "react";

const faq = [
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Qu",
  },
  {
    question: "22Lorem ipsum dollor sit amet consectetur adipisicing elior sit amet consectetur adipisicing elit",
    answer: "wefrewf4weav ",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Qu",
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="mt-[128px] h-[500px]">
      <div className="container">
        <h3 className="font-darkGrotesque font-bold text-4xl leading-tight mb-[40px]">
          FAQ
        </h3>

        <div>
          {faq.map((ele, i) => {
            return (
              <div className=" mx-auto my-[29px] items-center   w-[650px]">
                <button
                  className={`text-xl ${i === faq.length - 1 ? '' : 'border-b-2 border-additional1' }   text-left items-center flex justify-between pb-[29px]  w-full`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {ele.question}{" "}

                  <Image
                    className="mt-0"
                    src="/images/icons/right_up_arrow.svg"
                    width={24}
                    height={24}
                  />
                </button>
                {openIndex === i && (
                  <div className="p-4 text-center">{ele.answer}</div>
                )}
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
