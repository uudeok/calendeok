import { MONTH_LABEL_VALUES } from "../@types";
import { calculateMonthInfo } from "../Util/month";

type DayProps = {
  curYear: number;
  curMonth: number;
  onChange: (date: Date) => void;
};

const TOTAL_DAYS = 42;

const Day = ({ curYear, curMonth, onChange }: DayProps) => {
  console.log(curYear, curMonth);

  const { firstDay, lastDate } = calculateMonthInfo(curYear, curMonth);
  let dateCell = new Date(curYear, curMonth, 1 - firstDay).getDate();
  console.log(dateCell);

  let count = 0;
  let monthLabel = "prev" as MONTH_LABEL_VALUES;
  let month = curMonth - 1;

  while (count < TOTAL_DAYS) {
    if (count === firstDay) {
      monthLabel = "current";
      month++;
      dateCell = 1;
    }

    if (count > firstDay && count > lastDate) {
      month++;
      monthLabel = "next";
      dateCell = 1;
    }

    const renderingDate = new Date(curYear, month, dateCell);
    console.log(renderingDate);
  }

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Day;
