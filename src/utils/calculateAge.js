export const calculateAge = (date) => {
    const currentDate = new Date();
    let yearDifference = currentDate.getFullYear() - date.getFullYear();
    let monthDifference = currentDate.getMonth() - date.getMonth();
    let dayDifference = currentDate.getDate() - date.getDate();

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
        years: yearDifference,
        months: monthDifference,
        days: dayDifference,
    };
};