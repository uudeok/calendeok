import dayjs from "dayjs";
import { MONTH_LABEL_VALUES } from "../@types";
import { MONTH_LABEL } from "../const";

export const getDateLabelColor = (monthLabel: MONTH_LABEL_VALUES) => {
  switch (monthLabel) {
    case MONTH_LABEL.MONTH_PREV:
      return "text-gray-400";
    case MONTH_LABEL.MONTH_CURRENT:
      return "text-black";
    case MONTH_LABEL.MONTH_NEXT:
      return "text-gray-400";
    default:
      throw new Error("dateLabel color error");
  }
};

export const getDateWithoutTime = (date: Date) => {
  return new Date(date.setHours(0, 0, 0, 0));
};
