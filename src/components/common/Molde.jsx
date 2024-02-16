import { Link } from "react-router-dom";
import "./stylesMolde.css";
import { useEffect } from "react";

export default function Molde({
  image,
  title,
  description,
  textButton,
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
      <div className="mb-16">
        <div className="relative">
          <div
            className={`pagadiario-container`}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}${image})`,
            }}
          ></div>

          <div className="absolute w-full h-full top-0 ">
            <div className="w-full h-full mx-auto max-w-7xl grid content-center px-16">
              <h2 className="text-[24px] md:text-[32px] lg:text-[64px] font-bold text-primary-50 smm:text-primary-50">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mb-28">
        <div className="w-full max-w-7xl mx-auto font-normal text-[18px] px-10 text-center ">
          <div className="lg:w-4/6 mx-auto ">
            <p className="text-[16px] lg:text-[24px] text-justify font-normal text-primary-800">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary-800">
        <div className="w-full h-full mx-auto max-w-7xl px-10">
          <div className="relative pt-8">
            <Link
              to={linkForm}
              className="absolute left-1/2 -ml-[150px] sm:-ml-[250px] md:-ml-[350px] lg:-ml-[450px] top-0 -mt-[50px]  shadow-custom  w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px] h-[100px] animate-bounce animate-infinite"
            >
              <button className="w-full h-full rounded-lg bg-secondary-400 font-bold text-primary-800 text-[16px] lg:text-[24px]">
                {textButton}
              </button>
            </Link>
            <div className="py-16">{requisitos}</div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary-50">
        <div className="w-full h-full mx-auto max-w-7xl px-10">
          <div className="py-16">{beneficios}</div>
        </div>
      </div>

      <div className="w-full bg-primary-800">
        <div className="w-full h-full mx-auto max-w-7xl px-10">
          <div className="py-16">{condiciones}</div>
        </div>
      </div>
    </>
  );
}
