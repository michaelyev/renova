"use client";
import axios from "axios";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Button from "../common/button/Button";

const fetchImages = async (url) => {
  const response = await axios.get(url);
  const dataResponse = response.data;
  const imagesPromise = dataResponse?.message?.slice(0, 5).map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () =>
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight,
          src,
        });
      img.onerror = (error) => reject(error);
    });
  });

  const images = await Promise.all(imagesPromise);

  return images;
};

export default function Home() {
  const { data } = useSWR(
    "https://dog.ceo/api/breed/husky/images",
    fetchImages
  );

  console.log(data)

  return (
    <section className="container">
      <div className="mt-[128px]">
        <h3 className="font-darkGrotesque font-bold text-4xl leading-tight mb-[40px]">
          Dive Into Our Work
        </h3>
        <p className="pb-[24px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          distinctio consequuntur obcaecati deleniti alias vero ab deserunt
          dolores impedit mollitia. Lorem ipsum dolor sit amet. Lorem ipsum
          dolor sit amet.
        </p>
      </div>

      <div className="flex flex-wrap justify-between items-center ">
        {data?.map((imgProps) => (
          <div key={imgProps.src} className=" mb-[24px]">
            <NextImage
              className="object-cover w-full h-[320px]"
              {...imgProps}
            />
          </div>
        ))}
        <div className="min-w-[400px] flex justify-center items-center ">
        <Button id='browse'  />
        </div>
        
      </div>
    </section>
  );
}
