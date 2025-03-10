import { DateInputType } from "../types/date.type";

interface InputFieldProps {
  label: keyof DateInputType;
  value: number | "";
  onChange: (label: keyof DateInputType, value: string) => void;
  placeholder: string;
  error?: string;
}

export default function InputField({
  label,
  value,
  onChange,
  placeholder,
  error,
}: InputFieldProps) {
  return (
    <div
      className="flex flex-col gap-2"
      style={{
        color: error ? "var(--color-error)" : "var(--color-smokey-grey)",
      }}
    >
      <label
        htmlFor={label}
        className="uppercase text-current font-bold leading-none tracking-widest"
      >
        {label}
      </label>
      <input
        id={label}
        className="w-full text-[var(--color-off-black)] max-w-[8ch] border rounded-lg px-3 sm:px-6 py-2 sm:py-4 text-xl sm:text-3xl leading-none font-extrabold focus:outline-none focus:border-[var(--color-primary)] caret-[var(--color-primary)]"
        style={{
          borderColor: error ? "var(--color-error)" : "var(--color-light-grey)",
        }}
        type="text"
        value={value}
        onChange={(e) => onChange(label, e.target.value)}
        placeholder={placeholder}
        inputMode="numeric"
      />
      {error && (
        <span className="text-[0.6rem] sm:text-sm italic text-[var(--color-error)]">
          {error}
        </span>
      )}
    </div>
  );
}
