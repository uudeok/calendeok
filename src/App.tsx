import React, { useState } from "react";
import Calender from "./Calendeok";
import dayjs from "dayjs";

const SUNDAY = 0;

const App = () => {
  const [date, setDate] = useState(new Date());

  const handleDate = (date: Date) => {
    console.log("date", date);
  };

  const laterTwoWeeks = dayjs(new Date()).add(14, "day").toDate();

  const isOpenDay = (date: Date) => {
    const day = new Date(date).getDay();
    return day !== SUNDAY;
  };

  return (
    <Calender
      selected={date}
      onClick={handleDate}
      curMonthOnly={false}
      minDate={new Date()}
      maxDate={laterTwoWeeks}
      filterDate={isOpenDay}
    />
  );
};
export default App;
