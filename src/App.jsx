import InputField from "./components/InputField";
import iconArrow from "./assets/images/icon-arrow.svg";
import ResultDisplay from "./components/ResultDisplay";

export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("ok");
  };

  return (
    <>
      <div className="flex items-center min-h-screen">
        <div className="w-full max-w-[900px] mx-auto p-8">
          <main className="gap-8 bg-[var(--color-white)] rounded-xl rounded-br-[8rem] shadow p-12">
            <form onSubmit={handleSubmit}>
              <div className="flex gap-8">
                <InputField label="DAY" value="" placeholder="DD" />
                <InputField label="MONTH" value="" placeholder="MM" />
                <InputField label="YEAR" value="" placeholder="YYYY" />
              </div>
              <div className="flex items-center mb-4">
                <hr className="w-full border-t-[var(--color-light-grey)]" />
                <button className="cursor-pointer bg-[var(--color-primary)] rounded-full p-6 hover:bg-[var(--color-off-black)]">
                  <img src={iconArrow} alt="Icon arrow" />
                </button>
              </div>
            </form>
            <div>
              <ResultDisplay label="years" value="" />
              <ResultDisplay label="months" value="" />
              <ResultDisplay label="days" value="" />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
