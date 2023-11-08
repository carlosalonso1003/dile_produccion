import Estrella from "../common/Estrella";
import "./stylesValores.css";

export default function Valores() {
  return (
    <>
      <div className="text-center mt-16 mb-8 text-primary-800">
        <h1 className="font-bold text-[28px] md:text-[48px]">
          VALORES CORPORATIVOS
        </h1>
      </div>
      <div className="w-full h-full flex">
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            <Estrella
              textNumber={"01"}
              icon={"/images/estrella_full.png"}
              title={"ETICA"}
              description={
                "Es fundamental para establecer un ambiente de trabajo positivo, promover la confianza, mantener la integridad y la responsabilidad, y cumplir con las expectativas de la sociedad en general."
              }
            />
            <Estrella
              textNumber={"02"}
              icon={"/images/estrella_naranja.png"}
              title={"EFICIENCIA"}
              description={
                "Es un objetivo importante para las organizaciones, ya que puede conducir a un mayor éxito, competitividad y rentabilidad. Las empresas que operan de manera eficiente son más ágiles y están mejor preparadas para enfrentar los desafíos del mercado y aprovechar las oportunidades que se les presentan."
              }
            />
            <Estrella
              textNumber={"03"}
              icon={"/images/estrella_rojo.png"}
              title={"INCLUSIÓN"}
              description={
                "Al garantizar que todos tengan la oportunidad de participar en la economía a través de servicios financieros accesibles, se pueden superar muchas desigualdades y mejorar la calidad de vida de las personas en todo el mundo."
              }
            />
            
          </div>
        </div>
        <div className="flex-1 hidden lg:block ">
          <div className="bg-primary-800 w-full h-full">
            <div
              className="h-full w-full bg-no-repeat bg-cover bg-center opacity-80"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL
                }${"/images/imagen_nosotros_1.png"})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
