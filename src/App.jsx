import { useEffect, useState } from "react";
import iconArrow from "./assets/images/icon-arrow.svg";
import InputField from "./components/InputField";
import ResultDisplay from "./components/ResultDisplay";
import { calculateAge } from "./utils/calculateAge";

const initialInput = {
  day: "",
  month: "",
  year: "",
};

export default function App() {
  const [dateInput, setDateInput] = useState({ ...initialInput });
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

    if (Object.values(dateInput).some((val) => val === "")) return;

    const { day, month, year } = dateInput;
    const date = new Date(year, month - 1, day);

    const age = calculateAge(date);

    setDateDifference(age);
  };

  useEffect(() => {
    console.log("input", dateInput);
    console.log(dateDifference);
  }, [dateInput, dateDifference]);

  return (
    <>
      <div className="flex items-center min-h-screen">
        <div className="w-full max-w-[900px] mx-auto p-8">
          <main className="gap-8 bg-[var(--color-white)] rounded-xl rounded-br-[8rem] shadow p-12">
            <form onSubmit={handleSubmit}>
              <div className="flex gap-8">
                <InputField
                  label="DAY"
                  value={dateInput.day}
                  onChange={handleInputChange}
                  placeholder="DD"
                />
                <InputField
                  label="MONTH"
                  value={dateInput.month}
                  onChange={handleInputChange}
                  placeholder="MM"
                />
                <InputField
                  label="YEAR"
                  value={dateInput.year}
                  onChange={handleInputChange}
                  placeholder="YYYY"
                />
              </div>
              <div className="flex items-center mb-4">
                <hr className="w-full border-t-[var(--color-light-grey)]" />
                <button className="cursor-pointer bg-[var(--color-primary)] rounded-full p-6 hover:bg-[var(--color-off-black)]">
                  <img src={iconArrow} alt="Icon arrow" />
                </button>
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
