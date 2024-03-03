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
};

const TimePicker = ({
  timeInterval = 60,
  placeholder,
  onClickTime,
  selectedTime,
  minTime,
  maxTime,
  filterTime,
}: TimePickerType) => {
  let timeList = generateTimeArray(timeInterval);

  if (minTime) {
    timeList = timeList.filter((time) => time.value >= minTime);
  }

  if (maxTime) {
    timeList = timeList.filter((time) => time.value <= maxTime);
  }

  // console.log(timeList);

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
