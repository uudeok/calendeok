import DateCell from "./DateCell";
import dayjs from "dayjs";
import { MONTH_LABEL_VALUES } from "../@types";
import { calculateMonthInfo, getSelectedMonth } from "../Util/month";
import { MONTH_LABEL } from "../const";
import { getDateWithoutTime } from "../Util/date";

type DayProps = {
  curYear: number;
  curMonth: number;
  onClick: (date: Date) => void;
  curMonthOnly?: boolean;
  minDate?: Date;
  maxDate?: Date;
  filterDate?: (date: Date) => boolean;
  selectedDate: Date;
};

const TOTAL_DAYS = 42;

const Day = ({
  curYear,
  curMonth,
  onClick,
  curMonthOnly,
  minDate,
  maxDate,
  filterDate,
  selectedDate,
}: DayProps) => {
  const isPassedDate = (renderDate: Date) => {
    if (!minDate) return;

    // <--! Date 로 비교할 경우, 시간도 비교하기 때문에 날짜만 비교하기 위해 시간을 초기화해야함 !-->
    const standardDate = getDateWithoutTime(minDate);

    if (renderDate < standardDate) {
      return false;
    }
    return true;
  };

  const isDueDate = (renderDate: Date) => {
    if (!maxDate) return;

    const standardDate = getDateWithoutTime(maxDate);

    if (renderDate > standardDate) {
      return true;
    }
    return false;
  };

  const isFilteredDate = (renderDate: Date) => {
    if (!filterDate) return true;

    return filterDate(renderDate);
  };

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

      const renderingDate = new Date(curYear, month, dateCell);

      const isPassed = isPassedDate(renderingDate);
      const isOvered = isDueDate(renderingDate);
      const isFiltered = isFilteredDate(renderingDate);
      const day = dayjs();

      const renderDay = dayjs(renderingDate).format("YYYY-MM-DD");
      const selectDay = dayjs(selectedDate).format("YYYY-MM-DD");

      cells.push(
        <DateCell
          label={dateCell}
          monthLabel={monthLabel}
          key={dateCell}
          curMonthOnly={curMonthOnly}
          isToday={day.isSame(new Date(curYear, month, dateCell), "day")}
          disabled={!isPassed || isOvered || !isFiltered}
          selected={selectDay === renderDay}
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
    <table>
      <tbody onClick={handleDate}>{renderDate()}</tbody>
    </table>
  );
};

export default Day;
