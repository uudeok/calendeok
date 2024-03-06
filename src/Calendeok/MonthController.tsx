import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

type NavigateType = {
  curMonth: number;
  curYear: number;
  setCurMonth: React.Dispatch<React.SetStateAction<number>>;
  setCurYear: React.Dispatch<React.SetStateAction<number>>;
  minDate?: Date;
  maxDate?: Date;
};

const MonthController = ({
  curMonth,
  curYear,
  setCurMonth,
  setCurYear,
  minDate,
  maxDate,
}: NavigateType) => {
  const handleNextController = () => {
    if (!maxDate) return true;
    const maxMonth = maxDate.getMonth();

    return curMonth < maxMonth;
  };

  const handlePrevController = () => {
    if (!minDate) return true;
    const minMonth = minDate.getMonth();

    return curMonth > minMonth;
  };

  const handlePrevButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (curMonth === 0) {
      setCurMonth(11);
      setCurYear(curYear - 1);
    } else {
      setCurMonth(curMonth - 1);
    }
  };

  const handleNextButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (curMonth === 11) {
      setCurMonth(0);
      setCurYear(curYear + 1);
    } else {
      setCurMonth(curMonth + 1);
    }
  };

  const getMonthLabel = (year: number, month: number) => {
    const monthLabel = new Date(year, month).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
    });

    return monthLabel;
  };

  const isVisiblePrevBtn = handlePrevController();
  const isVisibleNextBtn = handleNextController();

  return (
    <div className="flex w-96 p-5 justify-center text-lg">
      <button
        onClick={handlePrevButton}
        className={`${!isVisiblePrevBtn && "invisible"}`}
      >
        <SlArrowLeft />
      </button>

      <span className="flex-grow text-center">
        {getMonthLabel(curYear, curMonth)}
      </span>

      <button
        onClick={handleNextButton}
        className={`${!isVisibleNextBtn && "invisible"}`}
      >
        <SlArrowRight />
      </button>
    </div>
  );
};

export default MonthController;
