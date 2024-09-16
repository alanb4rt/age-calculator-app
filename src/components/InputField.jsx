export default function InputField({ label, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="label"
        className="text-[var(--color-smokey-grey)] font-bold tracking-widest"
      >
        {label}
      </label>
      <input
        className="w-full max-w-[8ch] border border-[var(--color-light-grey)] rounded-lg px-6 py-4 text-[32px] font-extrabold focus:outline-none focus:border-[var(--color-primary)] caret-[var(--color-primary)]"
        type="text"
        value={value}
        onChange={(e) => onChange(label.toLowerCase(), e.target.value)}
        placeholder={placeholder}
        inputMode="numeric"
      />
    </div>
  );
}
