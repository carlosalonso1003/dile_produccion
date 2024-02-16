import { useState } from "react";
import "./styles.css";

export default function InputRangeAhorro({
  className,
  id,
  min,
  max,
  step,
  value,
  onChange,
}) {
  const [rangeValue, setRangeValue] = useState(value);

  const handleChangeValue = (event) => {
    setRangeValue(event.target.value);
    onChange(event.target.value);
  };
  if (id === "fijo_range") {
    return (
      <>
        <div className={className}>
          <div className="h-[50px] flex flex-col items-center">
            <p className="self-start text-[16px] text-primary-800 font-medium">
              Calcular: Plazo fijo
            </p>
            <p className="self-start text-[18px] text-primary-800">
              Monto de ahorro S/. {rangeValue}
            </p>
            <input
              type="range"
              className="mt-2"
              min={min}
              max={max}
              step={step}
              value={rangeValue}
              id="sliderRange"
              onChange={handleChangeValue}
            />
            <p className="self-start text-[16px] text-primary-800 font-medium mt-4">
              *Intereses aprox. S/.{(rangeValue * 0.17).toFixed(2)}
            </p>
          </div>
        </div>
      </>
    );
  } else if (id === "estrella_range") {
    return (
      <>
        <div className={className}>
          <div className="h-[50px] flex flex-col items-center">
            <p className="self-start text-[16px] text-primary-800 font-medium">
              Calcular: Cuenta Estrella
            </p>
            <p className="self-start text-[18px] text-primary-800">
              Monto de ahorro S/. {rangeValue}
            </p>
            <input
              type="range"
              className="mt-2"
              min={min}
              max={max}
              step={step}
              value={rangeValue}
              id="sliderRange"
              onChange={handleChangeValue}
            />
            <p className="self-start text-[16px] text-primary-800 font-medium mt-4">
              *Intereses aprox. S/.{(rangeValue * 0.1).toFixed(2)}
            </p>
          </div>
        </div>
      </>
    );
  }
}
