'use client'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { inputConfig } from './inputconfig';


const Input = ({id, placeholder, label, type}) => {
    const input = inputConfig[id]
  return (
    
    <label className="relative">
        {label}
      <input
        className={input.styles}
        type={input.type}
        placeholder={placeholder}
      />
      {input.button}
      
    </label>
  );
}

export default Input