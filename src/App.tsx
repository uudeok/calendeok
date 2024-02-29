import React, { useState } from "react";
import Calender from "./Calendeok";
import dayjs from "dayjs";

const App = () => {
  const [date, setDate] = useState(new Date());

  const handleDate = (date: Date) => {
    console.log("date", date);
  };

  const laterTwoWeeks = dayjs(new Date()).add(14, "day").toDate();

  return (
    <Calender
      selected={date}
      onClick={handleDate}
      curMonthOnly={false}
      minDate={new Date()}
      maxDate={laterTwoWeeks}
    />
  );
};
export default App;
