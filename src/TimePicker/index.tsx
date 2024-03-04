import { Time } from "../@types";
import { adjustSelectable, generateTimeArray } from "../Util/time";
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
  excludeTimes?: Date[];
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
  excludeTimes,
}: TimePickerType) => {
  // <--! interval 단위로 시간 배열을 만들어준다 !-->
  let timeList = generateTimeArray(timeInterval, selected);

  if (minTime) {
    timeList = timeList.filter((time) => time.label >= minTime);
  }

  if (maxTime) {
    timeList = timeList.filter((time) => time.label <= maxTime);
  }

  if (excludeTimes) {
    timeList = adjustSelectable(timeList, excludeTimes);
  }

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
