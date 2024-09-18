export const calculateAge = (dateInput) => {
    const { day, month, year } = dateInput;
    const currentDate = new Date();

    let yearDifference = currentDate.getFullYear() - year;
    let monthDifference = currentDate.getMonth() - month;
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