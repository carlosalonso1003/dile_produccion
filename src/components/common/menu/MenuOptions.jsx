import { useState } from "react";
import "./styles.css";
import ContainerOptions from "./ContainerSubOptions";
import { Link } from "react-router-dom";

export default function MenuOptions({ className, creditos, ahorros, familia }) {
  const [option, setOption] = useState(1);
  const [activeOption, setActiveOption] = useState(true);

  return (
    <>
      <div className={className}>
        <div className="text-[16px]">
          <div className="container-options">
            <div className="container-options__titles">
              <button
                className={`${
                  option === 1 &&
                  activeOption &&
                  "text-[#13498C] text-opacity-100"
                }`}
                onMouseEnter={() => setOption(1)}
              >
                Creditos
              </button>
              <button
                className={`${
                  option === 2 && activeOption && "text-[#13498C]"
                }`}
                onMouseEnter={() => setOption(2)}
              >
                Ahorros
              </button>
              <button
                className={`${
                  option === 3 && activeOption && "text-[#13498C]"
                }`}
                onMouseEnter={() => setOption(3)}
              >
                Familia Dile
              </button>
            </div>

            {option === 1 && <ContainerOptions creditos={creditos} />}
            {option === 2 && <ContainerOptions creditos={ahorros} />}
            {option === 3 && <ContainerOptions creditos={familia} />}
          </div>
        </div>
      </div>
    </>
  );
}
