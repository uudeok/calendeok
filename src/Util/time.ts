export const generateTimeArray = (interval: number) => {
  const hours = 24;
  const minutes = 60;
  const result = [];

  for (let hour = 0; hour < hours; hour++) {
    for (let minute = 0; minute < minutes; minute += interval) {
      const formattedHour = hour.toString().padStart(2, "0");
      const formattedMinute = minute.toString().padStart(2, "0");
      const timeObject = {
        label: `${formattedHour}:${formattedMinute}`,
        value: `${formattedHour}:${formattedMinute}`,
        selectable: true,
      };
      result.push(timeObject);
    }
  }

  return result;
};
