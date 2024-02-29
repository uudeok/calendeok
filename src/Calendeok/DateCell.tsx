import { MONTH_LABEL_VALUES } from "../@types";
import { MONTH_LABEL } from "../const";
import { getDateLabelColor } from "../Util/date";
import Today from "./Today";

type DateCellType = {
  label: number;
  monthLabel: MONTH_LABEL_VALUES;
  curMonthOnly?: boolean;
  isToday: boolean;
  disabled?: boolean;
};

const DateCell = ({
  label,
  monthLabel,
  curMonthOnly,
  isToday,
  disabled,
}: DateCellType) => {
  const labelColor = getDateLabelColor(monthLabel);
  const hover =
    "rounded-full transition duration-300 ease-in-out hover:bg-regal-blue hover:text-white";

  return (
    <td className={`py-3 relative ${disabled && "bg-zinc-50"}`}>
      {curMonthOnly && monthLabel !== MONTH_LABEL.MONTH_CURRENT ? null : (
        <button
          className={`w-12 h-12 flex justify-center items-center text-center relative ${
            !disabled && hover
          }  ${labelColor}`}
          data-name={monthLabel}
          disabled={disabled}
        >
          {label}
        </button>
      )}
      <Today isToday={isToday} />
    </td>
  );
};
export default DateCell;
