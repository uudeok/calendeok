import { MONTH_LABEL_VALUES } from "../@types";

type DateCellType = {
  label: number;
  monthLabel: MONTH_LABEL_VALUES;
};

const DateCell = ({ label, monthLabel }: DateCellType) => {
  // console.log(label, monthLabel);

  return (
    <td>
      <button className="bg-amber-200 w-full" data-name={monthLabel}>
        {label}
      </button>
    </td>
  );
};

export default DateCell;
