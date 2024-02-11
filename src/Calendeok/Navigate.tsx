type NavigateType = {
  curMonth: number;
  curYear: number;
  setCurMonth: React.Dispatch<React.SetStateAction<number>>;
  setCurYear: React.Dispatch<React.SetStateAction<number>>;
};

const Navigate = ({
  curMonth,
  curYear,
  setCurMonth,
  setCurYear,
}: NavigateType) => {
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

  return (
    <div className="flex w-96 bg-amber-50 p-2 justify-center">
      <button onClick={handlePrevButton}>«</button>
      <span className="flex-grow text-center">
        {getMonthLabel(curYear, curMonth)}
      </span>
      <button onClick={handleNextButton}>»</button>
    </div>
  );
};

export default Navigate;
