import React, { useState } from "react";
import Calender from "./Calendeok";

const App = () => {
  const [date, setDate] = useState(new Date());

  const handleDate = (date: Date) => {
    console.log("date", date);
  };

  return <Calender selected={date} onClick={handleDate} />;
};
export default App;
