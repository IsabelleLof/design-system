"use client";

import React, { useState } from "react";
import Button from "./components/Button";
import Datepicker from "./components/Datepicker";
import Text from "./components/Text";

export default function Home() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  //const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // const handleDateChange = (date: Date | null) => {
  //   setSelectedDate(date);

  return (
    <div>
      <Text as="h1">Welcome to the Design System</Text>
      <Text as="p">
        This is a simple design system built in Next.js with TypeScript.
      </Text>
      <Button
        variant="primary"
        onClick={() => alert("Primary button clicked!")}
      >
        Primary Button
      </Button>
      <Button
        variant="secondary"
        onClick={() => alert("Secondary button clicked!")}
      >
        Secondary Button
      </Button>
      {/* <div>
        <h1>Custom Datepicker in Next.js</h1>
        <Datepicker
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
        />
        {selectedDate && (
          <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
        )}
      </div> */}
      <div style={{ padding: "20px" }}>
        <h1>Datepicker Example</h1>
        <Datepicker
          label="Select a date"
          selectedDate={startDate}
          onChange={(date) => setStartDate(date)}
        />
        {startDate && <p>Selected Date: {startDate.toLocaleDateString()}</p>}
      </div>
    </div>
  );
}
