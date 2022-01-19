import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ServiceCalendar = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl text-one font-bold mb-5">Booking </h1>
      <Calendar />
    </div>
  );
};

export default ServiceCalendar;
