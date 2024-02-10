import React, { useState } from "react";
import Calender from "./Calendeok";

const App = () => {
  const [date, setDate] = useState(new Date());

  return <Calender selected={date} />;
};
export default App;
