'use client'
import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import Input from '@/components/common/input/Input'
import { CheckBox } from '@mui/icons-material';
import { FormControlLabel } from '@mui/material';
import Checkboxes from './Checkboxes/Checkboxes';
import SelectionFaq from './SelectionFaq/SelectionFaq';

const Selection = () => {

    
  return (
    <section className="max-w-[415px] border-additional1 border-solid border-2 text-left px-[32px] mt-[24px] py-[40px]">
      <h2 className="pb-[16px]">Price</h2>

      <div className="flex gap-[43px] justify-around mb-[32px]">
        <div className="">
          <h3 className="mb-[8px]">From:</h3>
          <Input placeholder="$0" id="selection" />
        </div>
        <div>
          <h3 className="mb-[8px]">To:</h3>
          <Input placeholder="$345" id="selection" />
        </div>
      </div>

      <Checkboxes />

      <div class="inline-flex items-center">
        <label
          class="relative flex cursor-pointer items-center rounded-full p-3"
          for="checkbox"
          data-ripple-dark="true"
        >
          <input
            type="checkbox"
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none  border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-accent checked:bg-additional1 checked:before:bg-pink-500 hover:before:opacity-10"
            id="checkbox"
            checked
          />
          <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </label>
      </div>
    </section>
  );
}

export default Selection


{/* <label className="relative">
        {label}
      <input
        className={input.styles}
        type={input.type}
        placeholder={placeholder}
      />
      {input.button}
      
    </label> */}