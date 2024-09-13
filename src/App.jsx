import InputField from "./components/InputField";

export default function App() {
  return (
    <>
      <div className="flex items-center min-h-screen">
        <div className="w-full max-w-screen-md mx-auto p-8">
          <main className="bg-[var(--color-white)] rounded-xl rounded-br-[8rem] shadow p-12">
            <div className="flex gap-8">
              <InputField label="DAY" value="" placeholder="DD" />
              <InputField label="MONTH" value="" placeholder="MM" />
              <InputField label="YEAR" value="" placeholder="YYYY" />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
