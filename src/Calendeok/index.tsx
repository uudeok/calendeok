import CalenderHeader from "./CalenderHeader";
import { useState } from "react";

type CalenderType = {
  selected: Date;
};

const Calender = ({ selected }: CalenderType) => {
  console.log(selected);

  return (
    <>
      <div></div>
    </>
  );
};

export default Calender;
