import { useState } from "react";
import { Time } from "./@types";
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

  const filterTime = (time: Time) => {
    const current = new Date().getTime();
    const selected = new Date(time.value).getTime();

    return current < selected;
  };

  const dayInEnglish = ["S", "M", "T", "W", "T", "F", "S"];

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
      filterTime={filterTime}
      placeholder="시간 선택"
      excludeTimes={[
        new Date(date.setHours(12, 0, 0)),
        new Date(date.setHours(12, 30, 0)),
        new Date(date.setHours(13, 0, 0)),
        new Date(2024, 2, 9, 15, 0, 0),
      ]}
      // dayCaption={dayInEnglish}
    />
  );
};
export default App;
