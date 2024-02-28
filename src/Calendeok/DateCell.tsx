import { MONTH_LABEL_VALUES } from "../@types";
import { MONTH_LABEL } from "../const";
import { getDateLabelColor } from "../Util/date";
import Today from "./Today";

type DateCellType = {
  label: number;
  monthLabel: MONTH_LABEL_VALUES;
  curMonthOnly?: boolean;
  isToday: boolean;
};

const DateCell = ({
  label,
  monthLabel,
  curMonthOnly,
  isToday,
}: DateCellType) => {
  const labelColor = getDateLabelColor(monthLabel);

  return (
    <td className="py-3 border relative">
      {curMonthOnly && monthLabel !== MONTH_LABEL.MONTH_CURRENT ? null : (
        <button
          className={`w-12 h-12 flex justify-center items-center rounded-full transition duration-300 ease-in-out hover:bg-regal-blue hover:text-white text-center relative ${labelColor}`}
          data-name={monthLabel}
        >
          {label}
        </button>
      )}
      <Today isToday={isToday} />
    </td>
  );
};
export default DateCell;
