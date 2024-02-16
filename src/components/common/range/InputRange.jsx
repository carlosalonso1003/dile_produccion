import { useState } from "react";
import "./styles.css";

export default function InputRange({
  className,
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
  return (
    <>
      <div className={className}>
        <div className="h-[50px] flex flex-col items-center">
          <p className="self-start text-[16px] text-primary-800 font-medium">
            Solicitar
          </p>
          <p className="self-start text-[18px] text-primary-800">
            Monto de crédito S/. {rangeValue}
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
        </div>
      </div>
    </>
  );
}
