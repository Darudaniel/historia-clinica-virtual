"use client"
import '@/styles/components/InputDate.css'
import { useState } from 'react';

const InputDate = ({label, onDateChange}) => {

  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    onDateChange(newDate); // Llamamos a la función del padre con la nueva fecha
  };

  return (
    <div className="input-date-container">
      <label>{label}</label>
      <br />
      <input type="date" className="input-date" value={selectedDate} onChange={handleDateChange} />
    </div>
  )
}

export default InputDate