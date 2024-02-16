import { useEffect } from "react";
import MoldeFormulario from "./MoldeFormularioAhorro";

export default function FormAhorroGeneral() {
  useEffect(() => {
    document.title = "DILE Solicitar Cuenta";
  }, []);
  const slides = [
    {
      title: "Accede a nuestros",
      subtitle: " CURSOS DE CAPACITACIÓN",
      icon: "/icons/educacion-financiera.svg",
      description:
        "Impulsa tu negocio aprendiendo las claves para hacerte crecer con nuestros 5 cursos de capacitación.",
    },
    {
      title: "Forma parte del",
      subtitle: " CLUB FAMILIA DILE",
      icon: "/icons/negocio.svg",
      description:
        "Acumula beneficios por los consumos que realices en los establecimientos comerciales autorizados.",
    },
    {
      title: "Realiza tus consultas",
      subtitle: " MI CUMPA",
      icon: "/icons/telemedicina.svg",
      description:
        "Accede a la atención de nuestros servicios profesionales en telemedicina, asesoría legal, contable, psicológica y nutricional.",
    },
  ];

  const title = "ABRE TU CUENTA DE AHORROS Y ACCEDE A NUESTROS BENEFICIOS";
  return (
    <>
      <MoldeFormulario title={title} slides={slides} labelProducto={"Ahorro"} />
    </>
  );
}
