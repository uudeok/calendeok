type DayProps = {
  month: number;
  year: number;
};

const Day = ({ year, month }: DayProps) => {
  const calculateMonthInfo = (year: number, month: number) => {
    const firstDay = new Date(year, month).getDay();
    const lastDate = new Date(year, month + 1, 0);
    console.log(firstDay, lastDate);

    return { firstDay, lastDate };
  };

  calculateMonthInfo(year, month);

  return (
    <>
      <div></div>
    </>
  );
};

export default Day;
