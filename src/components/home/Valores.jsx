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
              title={"ÉTICA"}
              description={
                "Contamos con un ambiente de trabajo positivo donde promovemos la confianza, la integridad y la responsabilidad para cumplir con las expectativas de nuestros socios. "
              }
            />
            <Estrella
              textNumber={"02"}
              icon={"/images/estrella_naranja.png"}
              title={"EFICIENCIA"}
              description={
                "Tenemos un equipo altamente eficiente lo que nos conduce a un mayor éxito, competitividad y rentabilidad en la cooperativa DILE, permitiéndonos agilizar procesos y estar mejor preparados para enfrentar los desafíos del mercado. "
              }
            />
            <Estrella
              textNumber={"03"}
              icon={"/images/estrella_rojo.png"}
              title={"INCLUSIÓN"}
              description={
                "Garantizamos que todos nuestros socios tengan la oportunidad de salir adelante a través de nuestros servicios financieros creando un ambiente donde juntos podamos superar muchas desigualdades y mejoremos la calidad de vida de nuestros más de 25 mil socios cooperativistas."
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
