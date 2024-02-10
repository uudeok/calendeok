import { useState } from "react";
import DayOfWeek from "./DayOfWeek";
import Day from "./Day";

type CalenderType = {
  selected: Date;
};

const Calender = ({ selected }: CalenderType) => {
  const [year, setYear] = useState(selected.getFullYear());
  const [month, setMonth] = useState(selected.getMonth());

  const handlePrevButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const getMonthLabel = (year: number, month: number) => {
    const monthLabel = new Date(year, month).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
    });

    return monthLabel;
  };

  return (
    <>
      <div className="flex flex-col w-96 h-full bg-slate-50 m-auto">
        <div className="flex w-96 bg-amber-50 p-2 justify-center">
          <button onClick={handlePrevButton}>«</button>
          <span className="flex-grow text-center">
            {getMonthLabel(year, month)}
          </span>
          <button onClick={handleNextButton}>»</button>
        </div>
        <DayOfWeek />
        <Day year={year} month={month} />
      </div>
    </>
  );
};

export default Calender;
