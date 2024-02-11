import React, { useState } from "react";
import Calender from "./Calendeok";

const App = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date: Date) => {
    console.log("date", date);
  };

  return <Calender selected={date} onChange={onChange} />;
};
export default App;
