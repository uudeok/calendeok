import { useState } from "react";
import { TimeListType } from "../@types";
import DynamicRender from "../common/DynamicRender";

type DropDownType = {
  timeList: TimeListType[];
  placeholder?: string;
  onClickTime: (time: string) => void;
  selectedTime: string;
};

const DropDown = ({
  timeList,
  placeholder,
  onClickTime,
  selectedTime,
}: DropDownType) => {
  const [isFolded, setIsFolded] = useState(false);

  const handleFolder = (e: React.MouseEvent) => {
    setIsFolded((prev) => !prev);
  };

  const handleTime = (e: React.MouseEvent) => {
    const item = e.target as HTMLElement;
    const selectedTime = item.innerText;

    onClickTime(selectedTime);
    setIsFolded(false);
  };

  const renderTime = (time: TimeListType) => (
    <li
      key={time.label}
      className={`h-14 p-2 border text-center justify-center}`}
    >
      {time.label}
    </li>
  );

  return (
    <>
      <div
        className="w-auto h-14 text-lg bg-regal-blue rounded-md cursor-pointer relative flex items-center justify-center text-white"
        onClick={handleFolder}
      >
        {selectedTime ? selectedTime : placeholder}
      </div>

      {isFolded && (
        <ul className="h-80 overflow-auto" onClick={handleTime}>
          <DynamicRender data={timeList} renderItem={renderTime} />
        </ul>
      )}
    </>
  );
};

export default DropDown;
