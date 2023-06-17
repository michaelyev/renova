import React from 'react'
import Image from 'next/image'
import {buttonConfig} from './buttonConfig' 

const Button = ({id}) => {
  const btn = buttonConfig[id]
  return (
    <button className={btn.style}>
      {btn.text}
      {btn.icon && (
        <Image
          className="pl-[8px]"
          src="/images/icons/right_arrow.svg"
          width={24}
          height={24}
          alt="dsfvs"
        />
      )}
    </button>
  );
}

export default Button
