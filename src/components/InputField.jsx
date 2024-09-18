export default function InputField({
  label,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div
      className="flex flex-col gap-2"
      style={{
        color: error ? "var(--color-error)" : "var(--color-smokey-grey)",
      }}
    >
      <label htmlFor="label" className="text-current font-bold tracking-widest">
        {label}
      </label>
      <input
        className="w-full text-[var(--color-off-black)] max-w-[8ch] border rounded-lg px-6 py-4 text-[32px] font-extrabold focus:outline-none focus:border-[var(--color-primary)] caret-[var(--color-primary)]"
        style={{
          borderColor: error ? "var(--color-error)" : "var(--color-light-grey)",
        }}
        type="text"
        value={value}
        onChange={(e) => onChange(label.toLowerCase(), e.target.value)}
        placeholder={placeholder}
        inputMode="numeric"
      />
      {error && (
        <span className="text-sm italic text-[var(--color-error)]">
          {error}
        </span>
      )}
    </div>
  );
}
