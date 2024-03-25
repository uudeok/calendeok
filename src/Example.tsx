import Calender from "./Calendeok";
import { useState } from "react";

const Example = () => {
  const [date, setDate] = useState(new Date());

  const handleDate = (date: Date) => {
    setDate(date);
  };

  return (
    <>
      <h2 className="text-3xl text-orange-600 mb-4 mt-4 font-pre">Calendeok</h2>
      <Calender onClick={handleDate} selected={date} />
    </>
  );
};

export default Example;
