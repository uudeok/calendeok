import dayjs from "dayjs";

export const generateTimeArray2 = (interval: number) => {
  const result = [];

  const totalMinutes = 24 * 60;
  let currentMinute = 0;

  while (currentMinute < totalMinutes) {
    const hour = Math.floor(currentMinute / 60);
    const minute = currentMinute % 60;
    const formattedHour = hour.toString().padStart(2, "0");
    const formattedMinute = minute.toString().padStart(2, "0");
    const timeObject = {
      label: `${formattedHour}:${formattedMinute}`,
      value: `${formattedHour}:${formattedMinute}`,
      selectable: true,
    };
    result.push(timeObject);
    currentMinute += interval;
  }

  return result;
};

export const generateTimeArray = (interval: number, date: Date) => {
  const result = [];

  const totalMinutes = 24 * 60;
  let currentMinute = 0;

  while (currentMinute < totalMinutes) {
    const hour = Math.floor(currentMinute / 60);
    const minute = currentMinute % 60;
    const formattedHour = hour.toString().padStart(2, "0");
    const formattedMinute = minute.toString().padStart(2, "0");

    const setting = new Date(date).setHours(
      Number(formattedHour),
      Number(formattedMinute),
      0
    );
    const dateLabel = new Date(setting);

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
