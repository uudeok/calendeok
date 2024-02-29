import { MONTH_LABEL } from "../const";

export type MONTH_LABEL_TYPE = typeof MONTH_LABEL;
export type MONTH_LABEL_KEYS = keyof MONTH_LABEL_TYPE;
export type MONTH_LABEL_VALUES = MONTH_LABEL_TYPE[MONTH_LABEL_KEYS];

export type TimeListType = {
  label: string;
  value: string;
  selectable: boolean;
};
