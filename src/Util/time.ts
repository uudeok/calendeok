import { Time } from "../@types";

export const generateTimeArray = (interval: number, date: Date) => {
  const result = [];

  const totalMinutes = 24 * 60;
  let currentMinute = 0;

  while (currentMinute < totalMinutes) {
    const hour = Math.floor(currentMinute / 60);
    const minute = currentMinute % 60;
    const formattedHour = hour.toString().padStart(2, "0");
    const formattedMinute = minute.toString().padStart(2, "0");

    const formattedDate = new Date(date).setHours(
      Number(formattedHour),
      Number(formattedMinute),
      0
    );
    const dateLabel = new Date(formattedDate);

    const timeObject = {
      value: dateLabel,
      label: `${formattedHour}:${formattedMinute}`,
      selectable: true,
    };
    result.push(timeObject);
    currentMinute += interval;
  }

  return result;
};

export const adjustSelectable = (timeList: Time[], excludeTimes: Date[]) => {
  const result = timeList.map((time) => ({
    ...time,
    selectable: !excludeTimes.some(
      (excludeTime) => excludeTime.getTime() === time.value.getTime()
    ),
  }));

  return result;
};
