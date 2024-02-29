import { useState } from "react";
import { TimeListType } from "../@types";

type DropDownType = {
  timeList: TimeListType[];
};

const DropDown = ({ timeList }: DropDownType) => {
  const [isFolded, setIsFolded] = useState(false);

  const handleFolder = (e: React.MouseEvent) => {
    setIsFolded((prev) => !prev);
  };

  return (
    <>
      <div className="w-auto h-20 bg-regal-blue rounded-md cursor-pointer">
        <div onClick={handleFolder}></div>
      </div>
    </>
  );
};

export default DropDown;
