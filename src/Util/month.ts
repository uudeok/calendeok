export const calculateMonthInfo = (year: number, month: number) => {
  const firstDay = new Date(year, month).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  return { firstDay, lastDate };
};
