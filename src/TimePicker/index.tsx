import dayjs from "dayjs";
import { Time } from "../@types";
import { generateTimeArray } from "../Util/time";
import DropDown from "./DropDown";

export type TimePickerType = {
  timeInterval?: number;
  placeholder?: string;
  onClickTime: (time: string) => void;
  selectedTime: string;
  minTime?: string;
  maxTime?: string;
  filterTime?: (time: Time) => boolean;
  selected: Date;
};

const TimePicker = ({
  timeInterval = 60,
  placeholder,
  onClickTime,
  selectedTime,
  minTime,
  maxTime,
  filterTime,
  selected,
}: TimePickerType) => {
  let timeList = generateTimeArray(timeInterval, selected);

  if (minTime) {
    timeList = timeList.filter((time) => time.label >= minTime);
  }

  if (maxTime) {
    timeList = timeList.filter((time) => time.label <= maxTime);
  }

  console.log(timeList);

  return (
    <div>
      <DropDown
        timeList={timeList}
        placeholder={placeholder}
        onClickTime={onClickTime}
        selectedTime={selectedTime}
        filterTime={filterTime}
      />
    </div>
  );
};

export default TimePicker;
