import { useEffect } from "react";
import MoldeFormulario from "./MoldeFormulario";

export default function FormDigital() {
  useEffect(() => {
    document.title = "DILE Solicitar Digital";
  }, []);
  const slides = [
    {
      title: "Pertenece a CLUB FAMILIA DILE",
      icon: "/icons/beneficios.svg",
      description: "Tenemos convenio con más de 27 Empresas Cusqueñas.",
    },
    {
      title: "Aumenta tu Historial Créditicio",
      icon: "/icons/mejorar-finanzas.svg",
      description: "Te ayudamos a tener un buen historial créditicio.",
    },
    {
      title: "Cursos para Emprendedores",
      icon: "/icons/educacion-financiera.svg",
      description: "Contamos con 5 Cursos para emprendedores.",
    },
  ];

  const title =
    "Pide tu crédito digital y conoce los beneficios que tenemos para ti";
  return (
    <>
      <MoldeFormulario
        title={title}
        slides={slides}
        labelProducto={"Digital"}
      />
    </>
  );
}
