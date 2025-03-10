import { DateInputType } from "../types/date.type";

export const calculateAge = (dateInput: DateInputType): DateInputType => {
  const { day, month, year } = dateInput;

  if (
    typeof day !== "number" ||
    typeof month !== "number" ||
    typeof year !== "number"
  ) {
    return { day: "", month: "", year: "" };
  }

  const currentDate = new Date();

  let yearDifference = currentDate.getFullYear() - year;
  let monthDifference = currentDate.getMonth() + 1 - month;
  let dayDifference = currentDate.getDate() - day;

  if (dayDifference < 0) {
    monthDifference--;
    dayDifference += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (monthDifference < 0) {
    yearDifference--;
    monthDifference += 12;
  }

  return {
    year: yearDifference,
    month: monthDifference,
    day: dayDifference,
  };
};
