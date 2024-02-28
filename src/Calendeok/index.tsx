import { useState } from "react";
import DayOfWeek from "./DayOfWeek";
import Day from "./Day";
import MonthController from "./MonthController";

type CalenderType = {
  selected: Date;
  onClick: (date: Date) => void;
  curMonthOnly?: boolean;
};

const Calender = ({ selected, onClick, curMonthOnly }: CalenderType) => {
  const [curYear, SetCurYear] = useState(selected.getFullYear());
  const [curMonth, setCurMonth] = useState(selected.getMonth());

  return (
    <>
      <div className="flex flex-col w-96 bg-slate-50 m-auto">
        <MonthController
          setCurMonth={setCurMonth}
          setCurYear={SetCurYear}
          curMonth={curMonth}
          curYear={curYear}
        />
        <DayOfWeek />
        <Day
          curYear={curYear}
          curMonth={curMonth}
          onClick={onClick}
          curMonthOnly={curMonthOnly}
        />
      </div>
    </>
  );
};

export default Calender;
