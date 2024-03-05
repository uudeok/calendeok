import { useState } from "react";
import DayOfWeek from "./DayOfWeek";
import Day from "./Day";
import MonthController from "./MonthController";
import TimePicker, { TimePickerType } from "../TimePicker";
import { Time } from "../@types";

type CalenderType = {
  selected: Date;
  onClick: (date: Date) => void;
  curMonthOnly?: boolean;
  minDate?: Date;
  maxDate?: Date;
  filterDate?: (date: Date) => boolean;
  showTimePicker?: boolean;
  timeInterval?: number;
  minTime?: string;
  maxTime?: string;
  filterTime?: (time: Time) => boolean;
  placeholder?: string;
  excludeTimes?: Date[];
  dayCaption?: string[];
};

type CalendarWithTimePicker = CalenderType & TimePickerType;

type CalendarWithOutTimePicker = CalenderType & {
  showTimePicker?: false;
  onClickTime?: never;
  selectedTime?: never;
  selectedDate?: never;
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
  minTime,
  maxTime,
  timeInterval,
  filterTime,
  placeholder,
  excludeTimes,
  dayCaption,
}: CombinedProps) => {
  const [curYear, SetCurYear] = useState(selected.getFullYear());
  const [curMonth, setCurMonth] = useState(selected.getMonth());

  return (
    <div className="flex flex-col w-96 rounded-md border">
      <MonthController
        setCurMonth={setCurMonth}
        setCurYear={SetCurYear}
        curMonth={curMonth}
        curYear={curYear}
        minDate={minDate}
        maxDate={maxDate}
      />
      <DayOfWeek dayCaption={dayCaption} />
      <Day
        curYear={curYear}
        curMonth={curMonth}
        onClick={onClick}
        curMonthOnly={curMonthOnly}
        minDate={minDate}
        maxDate={maxDate}
        filterDate={filterDate}
        selectedDate={selected}
      />
      {showTimePicker && (
        <TimePicker
          timeInterval={timeInterval}
          placeholder={placeholder}
          onClickTime={onClickTime}
          selectedTime={selectedTime}
          minTime={minTime}
          maxTime={maxTime}
          filterTime={filterTime}
          selected={selected}
          excludeTimes={excludeTimes}
        />
      )}
    </div>
  );
};

export default Calender;
