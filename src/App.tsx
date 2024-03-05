import { useState } from "react";
import { Time } from "./@types";
import Calender from "./Calendeok";
import dayjs from "dayjs";
import ConditionalDisplay from "./common/ConditionalDisplay";

const SUNDAY = 0;

const App = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleDate = (date: Date) => {
    console.log("date", date);
    setDate(date);
    setTime("");
  };

  const handleTime = (time: string) => {
    console.log("time", time);
    setTime(time);
  };

  const laterOneMonth = dayjs(new Date()).add(1, "month").toDate();

  const isOpenDay = (date: Date) => {
    const day = new Date(date).getDay();
    return day !== SUNDAY;
  };

  const filterTime = (time: Time) => {
    const current = new Date().getTime();
    const selected = new Date(time.value).getTime();

    return current < selected;
  };

  const dayInEnglish = ["S", "M", "T", "W", "T", "F", "S"];

  const pickDate = dayjs(date).format("YYYY-MM-DD");

  const handleCalender = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-blue-100">
      <h2 className="text-3xl text-orange-600 mb-4 mt-4">Calendeok</h2>
      <input
        className="border border-black p-2 text-center mb-4"
        value={`${pickDate} ${time}`}
        onClick={handleCalender}
        readOnly
      />
      <ConditionalDisplay condition={isOpen}>
        <Calender
          selected={date}
          onClick={handleDate}
          curMonthOnly={false}
          minDate={new Date()}
          maxDate={laterOneMonth}
          filterDate={isOpenDay}
          showTimePicker={true}
          onClickTime={handleTime}
          selectedTime={time}
          timeInterval={30}
          minTime="09:00"
          maxTime="21:00"
          filterTime={filterTime}
          placeholder="시간 선택"
          excludeTimes={[
            new Date(date.setHours(12, 0, 0)),
            new Date(date.setHours(12, 30, 0)),
            new Date(date.setHours(13, 0, 0)),
            new Date(2024, 2, 9, 15, 0, 0),
          ]}
        />
      </ConditionalDisplay>
    </div>
  );
};
export default App;
