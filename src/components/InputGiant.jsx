"use client"
import '@/styles/components/InputGiant.css'
import { useState } from 'react';

const InputGiant = ({placeholder, onInputChange}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value); // Llamamos a la función del padre con el valor del input
  };

  return (
    <textarea type="text" className='input-giant'placeholder={placeholder} value={inputValue} onChange={handleInputChange} />
  )
}

export default InputGiant