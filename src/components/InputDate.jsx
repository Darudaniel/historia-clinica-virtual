"use client"
import '@/styles/components/InputDate.css'
import { useState } from 'react';

const InputDate = ({label, onDateChange}) => {

  const [selectedDate, setSelectedDate] = useState('');

  // Obtener la fecha actual
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  // Formatear la fecha como YYYY-MM-DD
  const maxDate = `${year}-${month}-${day}`;

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    onDateChange(newDate); // Llamamos a la función del padre con la nueva fecha
  };

  return (
    <div className="input-date-container">
      <label>{label}</label>
      <br />
      <input type="date" max={maxDate} className="input-date" value={selectedDate} onChange={handleDateChange} />
    </div>
  )
}

export default InputDate