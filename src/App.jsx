import { useState } from "react";
import iconArrow from "./assets/images/icon-arrow.svg";
import InputField from "./components/InputField";
import ResultDisplay from "./components/ResultDisplay";
import { calculateAge } from "./utils/calculateAge";
import { validateInputs } from "./utils/validateInputs";

const initialInput = {
  day: "",
  month: "",
  year: "",
};

export default function App() {
  const [dateInput, setDateInput] = useState({ ...initialInput });
  const [errors, setErrors] = useState({});
  const [dateDifference, setDateDifference] = useState({ ...initialInput });

  const handleInputChange = (key, newValue) => {
    const numberRegex = /^\d+$/;
    const value = newValue ? Number(newValue) : "";

    if (numberRegex.test(newValue) || !newValue) {
      setDateInput((prev) => ({ ...prev, [key]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputErrors = validateInputs(dateInput);
    setErrors(inputErrors);

    const hasErrors = Object.keys(inputErrors).length > 0;
    setDateDifference(
      hasErrors ? { ...initialInput } : calculateAge(dateInput)
    );
  };

  return (
    <>
      <div className="flex items-center min-h-screen">
        <div className="w-full max-w-[900px] mx-auto p-4">
          <main className="gap-8 bg-[var(--color-white)] rounded-2xl rounded-br-[8rem] shadow p-6 sm:p-12">
            <form onSubmit={handleSubmit}>
              <div className="flex gap-4 sm:gap-8">
                <InputField
                  label="day"
                  value={dateInput.day}
                  onChange={handleInputChange}
                  placeholder="DD"
                  error={errors.day}
                />
                <InputField
                  label="month"
                  value={dateInput.month}
                  onChange={handleInputChange}
                  placeholder="MM"
                  error={errors.month}
                />
                <InputField
                  label="year"
                  value={dateInput.year}
                  onChange={handleInputChange}
                  placeholder="YYYY"
                  error={errors.year}
                />
              </div>
              {errors.date && (
                <p className="text-sm italic text-[var(--color-error)] mt-2">
                  {errors.date}
                </p>
              )}
              <div className="flex items-center my-6 sm:my-4">
                <hr className="w-full border-t-[var(--color-light-grey)]" />
                <button className="cursor-pointer bg-[var(--color-primary)] rounded-full p-4 sm:p-6 hover:bg-[var(--color-off-black)]">
                  <img src={iconArrow} alt="Icon arrow" />
                </button>
                <hr className="sm:hidden w-full border-t-[var(--color-light-grey)]" />
              </div>
            </form>
            <div>
              <ResultDisplay label="years" value={dateDifference.year} />
              <ResultDisplay label="months" value={dateDifference.month} />
              <ResultDisplay label="days" value={dateDifference.day} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
