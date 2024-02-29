import { generateTimeArray } from "../Util/time";
import DropDown from "./DropDown";

type TimePickerType = {
  timeInterval?: number;
};

const TimePicker = ({ timeInterval = 60 }: TimePickerType) => {
  const timeList = generateTimeArray(timeInterval);

  return (
    <div>
      <DropDown timeList={timeList} />
    </div>
  );
};

export default TimePicker;
