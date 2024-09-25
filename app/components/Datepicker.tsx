// Trying to build a datepicker
// what does void mean?

// src/components/Datepicker.tsx

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

interface DatepickerProps {
  label?: string;
  selectedDate?: Date | null;
  onChange: (date: Date | null) => void;
}

const Datepicker: React.FC<DatepickerProps> = ({ label, selectedDate, onChange }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select a date"
        className="border rounded p-2"
      />
    </div>
  );
};

export default Datepicker;


// import React, { useState, useEffect } from 'react';
// import styles from './Datepicker.module.css'; // Import CSS module

// interface DatepickerProps {
//   selectedDate?: Date | null;
//   onDateChange?: (date: Date | null) => void;
// }

// const getDayLabels = (): string[] => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// const Datepicker: React.FC<DatepickerProps> = ({ selectedDate, onDateChange }) => {
//   const today = new Date();
//   const [currentMonth, setCurrentMonth] = useState<number>(today.getMonth());
//   const [currentYear, setCurrentYear] = useState<number>(today.getFullYear());
  
//   // Set the selected date from the prop (initial value)
//   const [selected, setSelected] = useState<Date | null>(selectedDate || null);

//   // Update the selected date if the prop changes
//   useEffect(() => {
//     if (selectedDate) {
//       setSelected(selectedDate);
//     }
//   }, [selectedDate]);

//   const handleDateClick = (day: number): void => {
//     const newDate = new Date(currentYear, currentMonth, day);
//     setSelected(newDate);

//     // Call the onDateChange callback if provided
//     if (onDateChange) {
//       onDateChange(newDate);
//     }
//   };

//   const prevMonth = (): void => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const nextMonth = (): void => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   const renderDays = (): JSX.Element[] => {
//     const days: JSX.Element[] = [];
//     const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
//     const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

//     // Empty slots before the first day of the month
//     for (let i = 0; i < firstDayOfMonth; i++) {
//       days.push(<div key={`empty-${i}`} className={styles.emptyDay} />);
//     }

//     // Actual days in the month
//     for (let day = 1; day <= totalDays; day++) {
//       const isSelected =
//         selected &&
//         selected.getDate() === day &&
//         selected.getMonth() === currentMonth &&
//         selected.getFullYear() === currentYear;

//       days.push(
//         <div
//           key={day}
//           className={`${styles.day} ${isSelected ? styles.selected : ''}`}
//           onClick={() => handleDateClick(day)}
//         >
//           {day}
//         </div>
//       );
//     }

//     return days;
//   };

//   return (
//     <div className={styles.container}>
//     <div className={styles.datepicker}>
//       <div className={styles.header}>
//         <button onClick={prevMonth}>{"<"}</button>
//         <span>{today.toLocaleString('en-US', { month: 'long' })} {currentYear}</span>
//         <button onClick={nextMonth}>{">"}</button>
//       </div>
//       <div className={styles.dayLabels}>
//         {getDayLabels().map((dayLabel) => (
//           <div key={dayLabel} className={styles.dayLabel}>
//             {dayLabel}
//           </div>
//         ))}
//       </div>
//       <div className={styles.daysGrid}>{renderDays()}</div>
//     </div>
//     </div>
//   );
// };

// export default Datepicker;



