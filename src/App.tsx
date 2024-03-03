import { useState } from "react";
import Calender from "./Calendeok";
import dayjs from "dayjs";

const SUNDAY = 0;

const App = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  const handleDate = (date: Date) => {
    console.log("date", date);
    setDate(date);
  };

  const handleTime = (time: string) => {
    console.log("time", time);
    setTime(time);
  };

  const laterTwoWeeks = dayjs(new Date()).add(14, "day").toDate();

  const isOpenDay = (date: Date) => {
    const day = new Date(date).getDay();
    return day !== SUNDAY;
  };

  return (
    <Calender
      selected={date}
      onClick={handleDate}
      curMonthOnly={false}
      minDate={new Date()}
      maxDate={laterTwoWeeks}
      filterDate={isOpenDay}
      showTimePicker={true}
      onClickTime={handleTime}
      selectedTime={time}
      timeInterval={30}
      minTime="09:00"
      maxTime="21:00"
    />
  );
};
export default App;
