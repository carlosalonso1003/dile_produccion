import { Link } from "react-router-dom";
import "./stylesMolde.css";
import { useEffect } from "react";

export default function MoldeAhorro({
  image,
  title,
  textButton,
  description,
  linkForm,
  requisitos,
  beneficios,
  condiciones,
}) {
  useEffect(() => {
    document.title = `DILE ${title}`;
  }, [title]);
  return (
    <>
      <div className="mb-16 ">
        <div className="relative">
          <div
            className={`pagadiario-container`}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}${image})`,
            }}
          ></div>

          <div className="absolute w-full h-full top-0 ">
            <div className="w-full h-full mx-auto max-w-7xl grid content-center px-16">
              <h2 className="text-[24px] md:text-[32px] lg:text-[64px] text-primary-50 font-bold smm:text-primary-50">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary-50 ">
        <div className="w-full h-full mx-auto max-w-7xl px-10">
          <div className="relative py-8">
            <Link
              to={linkForm}
              className="absolute left-1/2 -ml-[150px] sm:-ml-[250px] md:-ml-[350px] lg:-ml-[350px] top-10 -mt-[50px]  shadow-custom  w-[200px] sm:w-[500px] md:w-[700px] lg:w-[900px] h-[100px] animate-bounce animate-infinite"
            >
              <button className="w-full h-full rounded-lg bg-secondary-400 font-bold text-primary-800 text-[16px] lg:text-[24px]">
                <span className="font-light">
                  {textButton}{" "}
                  <strong className="font-semibold">{title}</strong>{" "}
                </span>
                <br />
                <strong>!AHORA!</strong>
              </button>
            </Link>
            <div className="py-16">{condiciones}</div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary-50">
        <div className="w-full h-full mx-auto max-w-7xl px-10">
          <div className="py-0">{requisitos}</div>
        </div>
      </div>
      <div className="w-full bg-primary-50">
        <div className="w-full h-full mx-auto max-w-7xl px-10">
          <div className="py-8">{beneficios}</div>
        </div>
      </div>
    </>
  );
}
