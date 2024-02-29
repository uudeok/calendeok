import { useState } from "react";
import DayOfWeek from "./DayOfWeek";
import Day from "./Day";
import MonthController from "./MonthController";
import TimePicker, { TimePickerType } from "../TimePicker";

type CalenderType = {
  selected: Date;
  onClick: (date: Date) => void;
  curMonthOnly?: boolean;
  minDate?: Date;
  maxDate?: Date;
  filterDate?: (date: Date) => boolean;
  showTimePicker?: boolean;
};

type CalendarWithTimePicker = CalenderType & TimePickerType;

type CalendarWithOutTimePicker = CalenderType & {
  showTimePicker?: false;
  onClickTime?: never;
  selectedTime?: never;
};

type CombinedProps = CalendarWithTimePicker | CalendarWithOutTimePicker;

const Calender = ({
  selected,
  onClick,
  curMonthOnly,
  minDate,
  maxDate,
  filterDate,
  showTimePicker,
  onClickTime,
  selectedTime,
}: CombinedProps) => {
  const [curYear, SetCurYear] = useState(selected.getFullYear());
  const [curMonth, setCurMonth] = useState(selected.getMonth());

  return (
    <div className="flex flex-col w-96 m-auto">
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
        minDate={minDate}
        maxDate={maxDate}
        filterDate={filterDate}
      />
      {showTimePicker && (
        <TimePicker
          timeInterval={30}
          placeholder="시간 선택"
          onClickTime={onClickTime}
          selectedTime={selectedTime}
        />
      )}
    </div>
  );
};

export default Calender;
