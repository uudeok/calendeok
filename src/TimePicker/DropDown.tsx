import { useState } from "react";
import { Time } from "../@types";
import DynamicRender from "../common/DynamicRender";

type DropDownType = {
  timeList: Time[];
  placeholder?: string;
  onClickTime: (time: string) => void;
  selectedTime: string;
  filterTime?: (time: Time) => boolean;
};

const DropDown = ({
  timeList,
  placeholder,
  onClickTime,
  selectedTime,
  filterTime,
}: DropDownType) => {
  const [isFolded, setIsFolded] = useState(false);

  const handleFolder = (e: React.MouseEvent) => {
    setIsFolded((prev) => !prev);
  };

  const handleTime = (time: string) => {
    onClickTime(time);
    setIsFolded(false);
  };

  const renderTime = (time: Time) => {
    const result = filterTime ? filterTime(time) : true;

    return (
      <li
        key={time.label}
        onClick={() => handleTime(time.label)}
        className={`h-14 p-2 border text-center
        ${
          result && time.selectable
            ? "hover:bg-slate-200 cursor-pointer"
            : "bg-zinc-50 pointer-events-none text-gray-400"
        }`}
      >
        {time.label}
      </li>
    );
  };

  return (
    <>
      <div
        className="w-auto h-14 text-lg bg-regal-blue rounded-md cursor-pointer relative flex items-center justify-center text-white"
        onClick={handleFolder}
      >
        {selectedTime ? selectedTime : placeholder}
      </div>

      {isFolded && (
        <ul className="h-80 overflow-auto">
          <DynamicRender data={timeList} renderItem={renderTime} />
        </ul>
      )}
    </>
  );
};

export default DropDown;
