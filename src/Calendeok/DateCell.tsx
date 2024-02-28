import { MONTH_LABEL_VALUES } from "../@types";
import { MONTH_LABEL } from "../const";

type DateCellType = {
  label: number;
  monthLabel: MONTH_LABEL_VALUES;
  curMonthOnly?: boolean;
  isToday?: boolean;
};

const DateCell = ({
  label,
  monthLabel,
  curMonthOnly,
  isToday,
}: DateCellType) => {
  console.log(isToday);

  return (
    <td className="relative py-4">
      {curMonthOnly && monthLabel !== MONTH_LABEL.MONTH_CURRENT ? null : (
        <button
          className="w-full h-full flex justify-center items-center"
          data-name={monthLabel}
        >
          {label}
        </button>
      )}
      {isToday && (
        <span className="text-xs text-center absolute bottom-0 left-0 right-0 flex justify-center items-center">
          오늘
        </span>
      )}
    </td>
  );
};

export default DateCell;
