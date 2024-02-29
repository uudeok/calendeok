import { generateTimeArray } from "../Util/time";
import DropDown from "./DropDown";

export type TimePickerType = {
  timeInterval?: number;
  placeholder?: string;
  onClickTime: (time: string) => void;
  selectedTime: string;
};

const TimePicker = ({
  timeInterval = 60,
  placeholder,
  onClickTime,
  selectedTime,
}: TimePickerType) => {
  const timeList = generateTimeArray(timeInterval);

  return (
    <div>
      <DropDown
        timeList={timeList}
        placeholder={placeholder}
        onClickTime={onClickTime}
        selectedTime={selectedTime}
      />
    </div>
  );
};

export default TimePicker;
