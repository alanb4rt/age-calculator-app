export default function ResultDisplay({ label, value }) {
  return (
    <p
      className="text-5xl sm:text-8xl font-extrabold italic"
      style={{
        opacity: value !== 0 ? "1" : "0.2",
      }}
    >
      <span className="text-[var(--color-primary)]">
        {value !== "" ? value : "--"}
      </span>{" "}
      {value > 1 ? label : label.slice(0, -1)}
    </p>
  );
}
