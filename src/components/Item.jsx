export default function Item({ children: value = 'valor', label = 'None' }) {
  return (
    <span className="text-sm">
      <strong>{label}</strong> {value}
    </span>
  );
}
