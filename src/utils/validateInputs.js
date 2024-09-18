export const validateInputs = (dateInput) => {
    const errors = {};

    const day = Number(dateInput.day);
    const month = Number(dateInput.month);
    const year = Number(dateInput.year);

    const currentDate = new Date();

    if (!day) {
        errors.day = 'This field is required';
    } else if (isNaN(day) || day < 1 || day > 31) {
        errors.day = 'Must be a valid day';
    }

    if (!month) {
        errors.month = 'This field is required';
    } else if (isNaN(month) || month < 1 || month > 12) {
        errors.month = 'Must be a valid month';
    }

    if (!year) {
        errors.year = 'This field is required';
    } else if (isNaN(year)) {
        errors.year = 'Must be a valid year';
    } else if (year > currentDate.getFullYear()) {
        errors.year = "Must be in the past";
    }

    if (Object.keys(errors).length > 0) {
        return errors;
    }

    const inputDate = new Date(year, month - 1, day);

    if (inputDate.getDate() !== day || inputDate.getMonth() !== month - 1 || inputDate.getFullYear() !== year) {
        errors.date = 'Must be a valid date';
        return errors;
    }

    if (inputDate > currentDate) {
        errors.year = 'Must be in the past';
        return errors;
    }

    return {};
};
