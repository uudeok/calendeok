import { MONTH_LABEL_VALUES } from "../@types";
import { MONTH_LABEL } from "../const";
import { getDateLabelColor } from "../util/date";
import Today from "./Today";

type DateCellType = {
  label: number;
  monthLabel: MONTH_LABEL_VALUES;
  curMonthOnly?: boolean;
  isToday: boolean;
  disabled?: boolean;
  selected: boolean;
};

const DateCell = ({
  label,
  monthLabel,
  curMonthOnly,
  isToday,
  disabled,
  selected,
}: DateCellType) => {
  const labelColor = getDateLabelColor(monthLabel);

  return (
    <td className="py-3 relative ">
      {curMonthOnly && monthLabel !== MONTH_LABEL.MONTH_CURRENT ? null : (
        <button
          className={`datecell-btn ${
            disabled ? "text-gray-400" : "hover-base"
          } ${labelColor} ${
            selected && "rounded-full bg-bright-blue text-white"
          }`}
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
