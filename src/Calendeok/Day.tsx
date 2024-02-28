import dayjs from "dayjs";
import { MONTH_LABEL_VALUES } from "../@types";
import { calculateMonthInfo, getSelectedMonth } from "../Util/month";
import { MONTH_LABEL } from "../const";
import DateCell from "./DateCell";

type DayProps = {
  curYear: number;
  curMonth: number;
  onClick: (date: Date) => void;
  curMonthOnly?: boolean;
};

const TOTAL_DAYS = 42;

const Day = ({ curYear, curMonth, onClick, curMonthOnly }: DayProps) => {
  const renderDate = () => {
    let cells = [];
    const { firstDay, lastDate } = calculateMonthInfo(curYear, curMonth);

    let dateCell = new Date(curYear, curMonth, 1 - firstDay).getDate();
    let count = 0;
    let monthLabel = MONTH_LABEL.MONTH_PREV as MONTH_LABEL_VALUES;
    let month = curMonth - 1;

    while (count < TOTAL_DAYS) {
      if (count === firstDay) {
        monthLabel = MONTH_LABEL.MONTH_CURRENT;
        month++;
        dateCell = 1;
      }

      if (count > firstDay && dateCell > lastDate) {
        month++;
        monthLabel = MONTH_LABEL.MONTH_NEXT;
        dateCell = 1;
      }

      const renderingDate = dayjs(new Date(curYear, month, dateCell)).format(
        "YYYY-MM-DD"
      );

      const day = dayjs();

      cells.push(
        <DateCell
          label={dateCell}
          monthLabel={monthLabel}
          key={dateCell}
          curMonthOnly={curMonthOnly}
          isToday={day.isSame(new Date(curYear, month, dateCell), "day")}
        />
      );
      count++;
      dateCell++;
    }

    let cellRows = [];
    while (cells.length) {
      const row = cells.splice(0, 7);
      cellRows.push(<tr key={cells.length}>{row}</tr>);
    }
    return cellRows;
  };

  const handleDate = (e: React.MouseEvent) => {
    const date = e.target as HTMLTableElement;
    const dateLabel = date.textContent!.padStart(2, "0");
    const month = date.dataset.name as MONTH_LABEL_VALUES;

    if (!month) return;

    const selectedMonth = getSelectedMonth(month, curMonth);
    let selectedYear = curYear;

    if (month === "next" && selectedMonth === 0) {
      selectedYear = selectedYear + 1;
    }

    if (month === "prev" && selectedMonth === 11) {
      selectedYear = selectedYear - 1;
    }

    const selectedDate = new Date(
      selectedYear,
      selectedMonth,
      Number(dateLabel)
    );

    onClick(selectedDate);
  };

  return (
    <table className="h-96">
      <tbody onClick={handleDate}>{renderDate()}</tbody>
    </table>
  );
};

export default Day;
