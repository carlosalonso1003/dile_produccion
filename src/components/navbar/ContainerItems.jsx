import { Link } from "react-router-dom";

export default function Containeritems({ icons }) {
  return (
    <>
      <div className="w-full items-center h-24 flex">
        {icons.map((icon, index) =>
          icon.title === "Beneficios" ? (
            <Link
              className="flex-1 h-full flex flex-col items-center justify-center cursor-pointer"
              key={`icon ${index + 1}`}
              to={icon.linkPath}
              target="_blank"
              preventScrollReset={true}
            >
              {icon.src}
              <p className="text-[14px] font-medium mt-2">{icon.title}</p>
            </Link>
          ) : (
            <Link
              className="flex-1 h-full flex flex-col items-center justify-center cursor-pointer"
              key={`icon ${index + 1}`}
              to={icon.linkPath}
            >
              {icon.src}
              <p className="text-[14px] font-medium mt-2">{icon.title}</p>
            </Link>
          )
        )}
      </div>
    </>
  );
}
