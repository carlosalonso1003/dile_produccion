import "./styles.css";

export default function InputPersonalizado({ label, requiredMessage }) {
  return (
    <div className="container-input">
      <input type="text" required />
      <label className="lbl-nom">
        <span className="text-nomb">{label}</span>
      </label>
    </div>
  );
}
