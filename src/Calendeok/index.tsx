import CalenderHeader from "./CalenderHeader";
import { useState } from "react";

const Calendeok = () => {
  const [curYear, setCurYear] = useState(new Date().getFullYear());
  const [curMonth, setCurMonth] = useState(new Date().getMonth());

  return (
    <>
      <CalenderHeader
        curYear={curYear}
        setCurYear={setCurYear}
        curMonth={curMonth}
        setCurMonth={setCurMonth}
      />
    </>
  );
};

export default Calendeok;
