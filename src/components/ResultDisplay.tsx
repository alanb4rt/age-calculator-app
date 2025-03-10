interface ResultDisplayProps {
  label: string;
  value: number | "";
}

export default function ResultDisplay({ label, value }: ResultDisplayProps) {
  const opacity = value === 0 ? "0.2" : "1";

  return (
    <p
      className="text-5xl sm:text-8xl font-extrabold italic"
      style={{ opacity }}
    >
      <span className="text-[var(--color-primary)]">
        {value !== "" ? value : "--"}
      </span>{" "}
      {Number(value) > 1 ? label : label.slice(0, -1)}
    </p>
  );
}
