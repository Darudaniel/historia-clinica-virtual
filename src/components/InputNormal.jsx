"use client"
import '@/styles/components/InputNormal.css'
import { useState } from 'react';

const InputNormal = ({placeholder, onInputChange}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value); // Llamamos a la función del padre con el valor del input
  };

  return (
    <input type="text" className='input-normal'placeholder={placeholder} value={inputValue} onChange={handleInputChange} />
  )
}

export default InputNormal