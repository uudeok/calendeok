type HeaderType = {
  curYear: number;
  setCurYear: React.Dispatch<React.SetStateAction<number>>;
  curMonth: number;
  setCurMonth: React.Dispatch<React.SetStateAction<number>>;
};

const CalenderHeader = ({
  curYear,
  curMonth,
  setCurMonth,
  setCurYear,
}: HeaderType) => {
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

  return (
    <div className="flex w-80 bg-amber-50 p-2 justify-center">
      <button onClick={handlePrevButton}>«</button>
      <div className="flex-grow text-center">
        {curYear} {curMonth + 1}
      </div>
      <button onClick={handleNextButton}>»</button>
    </div>
  );
};

export default CalenderHeader;
