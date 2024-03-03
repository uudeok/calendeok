export const generateTimeArray = (interval: number) => {
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
