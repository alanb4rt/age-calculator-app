export default function ResultDisplay({ label, value }) {
  return (
    <p className="text-8xl font-extrabold italic">
      <span className="text-[var(--color-primary)]">
        {value ? value : "--"}
      </span>{" "}
      {label}
    </p>
  );
}
