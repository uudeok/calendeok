import { calculateMonthInfo } from "../Util/month";
import { MONTH_LABEL_VALUES } from "../@types";
import { MONTH_LABEL } from "../const";
import DateCell from "./DateCell";
import dayjs from "dayjs";

type DayProps = {
  curMonth: number;
  curYear: number;
};

const NUM_OF_DAY = 42;

const Day = ({ curYear, curMonth }: DayProps) => {
  const renderDate = () => {
    const { firstDay, lastDate } = calculateMonthInfo(curYear, curMonth);
    let dateCell = new Date(curYear, curMonth, 1 - firstDay).getDate();

    let count = 0;
    let month = curMonth - 1;
    let monthLabel = MONTH_LABEL.MONTH_PREV as MONTH_LABEL_VALUES;
    let cells = [];

    while (count < NUM_OF_DAY) {
      if (count === firstDay) {
        dateCell = 1;
        month++;
        monthLabel = MONTH_LABEL.MONTH_CURRENT;
      }

      if (count > firstDay && dateCell > lastDate) {
        dateCell = 1;
        month++;
        monthLabel = MONTH_LABEL.MONTH_NEXT;
      }

      const renderingDate = dayjs(new Date(curYear, month, dateCell)).format(
        "YYYY-MM-DD"
      );

      cells.push({ date: renderingDate, monthLabel: monthLabel });

      dateCell++;
      count++;
    }

    const rows = [];

    while (cells.length) {
      const rowCells = cells.splice(0, 7);
      const rowCell = rowCells.map((cell) => (
        <DateCell
          key={cell.date}
          date={cell.date}
          monthLabel={cell.monthLabel}
        />
      ));
      rows.push(<tr key={rowCells[0].date}>{rowCell}</tr>);
    }

    return rows;
  };

  return (
    <table>
      <tbody>{renderDate()}</tbody>
    </table>
  );
};

export default Day;
