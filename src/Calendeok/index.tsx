import { useState } from "react";
import DayOfWeek from "./DayOfWeek";
import Day from "./Day";
import Navigate from "./Navigate";

type CalenderType = {
  selected: Date;
  onChange: (date: Date) => void;
};

const Calender = ({ selected, onChange }: CalenderType) => {
  const [curYear, SetCurYear] = useState(selected.getFullYear());
  const [curMonth, setCurMonth] = useState(selected.getMonth());

  return (
    <>
      <div className="flex flex-col w-96 bg-slate-50 m-auto">
        <Navigate
          setCurMonth={setCurMonth}
          setCurYear={SetCurYear}
          curMonth={curMonth}
          curYear={curYear}
        />
        <DayOfWeek />
        <Day curYear={curYear} curMonth={curMonth} />
      </div>
    </>
  );
};

export default Calender;
