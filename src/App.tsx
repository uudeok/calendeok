import { useState, useRef } from "react";
import { Time } from "./@types";
import Calender from "./Calendeok";
import dayjs from "dayjs";
import ConditionalDisplay from "./common/ConditionalDisplay";
import Example from "./Example";

const SUNDAY = 0;

const App = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const handleDate = (date: Date) => {
    setDate(date);
    setTime("");
  };

  const handleTime = (time: string) => {
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

  const pickDate = dayjs(date).format("YYYY-MM-DD");

  const handleCalendarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 달력 영역 외의 영역 클릭인지 확인
    if (
      calendarRef.current &&
      !calendarRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false); // isOpen 상태 변경
    }
  };

  const handleCalendarToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="flex flex-col items-center w-full h-full"
      onClick={handleCalendarClick}
    >
      <Example />

      <h2 className="text-3xl text-orange-600 mb-4 mt-5 font-pre">
        DatePicker & TimePicker
      </h2>
      <input
        className="border border-black p-2 text-center mb-4"
        value={`${pickDate} ${time}`}
        onClick={handleCalendarToggle}
        readOnly
      />
      <ConditionalDisplay condition={isOpen}>
        <div ref={calendarRef}>
          <Calender
            selected={date}
            onClick={handleDate}
            curMonthOnly={true}
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
        </div>
      </ConditionalDisplay>
    </div>
  );
};
export default App;
