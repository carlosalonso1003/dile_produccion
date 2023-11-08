import { Link } from "react-router-dom";
import "./styles.css";

export default function ContainerOptions({ creditos }) {
  return (
    <>
      <div className="group container-group">
        <div className="flex group-hover:text-gray-700 group-hover:text-opacity-60">
          {creditos.map((credito, index) => {
            return (
              <button
                className="flex-1 container-cardoptions"
                key={`credito ${index}`}
              >
                {credito.title === "Beneficios" ? (
                  <Link
                    to={credito.pathlink}
                    target="_blank"
                    preventScrollReset={true}
                    className="w-full h-full"
                  >
                    <div className={`container-card__iconoptions`}>
                      {credito.icon}
                    </div>
                    <h1>{credito.title}</h1>
                  </Link>
                ) : (
                  <Link to={credito.pathlink} className="w-full h-full">
                    <div className={`container-card__iconoptions`}>
                      {credito.icon}
                    </div>
                    <h1>{credito.title}</h1>
                  </Link>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
