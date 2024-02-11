import { MONTH_LABEL_VALUES } from "../@types";

type DateCellType = {
  date: string;
  monthLabel: MONTH_LABEL_VALUES;
};

const DateCell = ({ date, monthLabel }: DateCellType) => {
  const cell = new Date(date).getDate();

  const handleDate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <td>
      <button onClick={handleDate}>{cell}</button>
    </td>
  );
};

export default DateCell;
