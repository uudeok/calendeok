import React, { useState } from "react";
import Calender from "./Calendeok";

const App = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calender selected={date} />
    </div>
  );
};
export default App;
