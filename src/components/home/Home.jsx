import React, { useEffect } from "react";

import Slider3 from "../slider/Slider3";
import "./stylesHome.css";
import { useInView } from "react-intersection-observer";
import CardInfoHome from "./CardInfoHome";
import CardSegura from "./CardSegura";

export default function Home() {
  const { ref: refTitle1, inView: inViewTitle1 } = useInView({
    threshold: 0.25,
  });
  const slidesInfo = [
    {
      title: "¿SABÍAS QUE TUS CRÉDITOS SE PUEDEN PAGAR SOLOS?",
      description:
        "Únete al CLUB FAMILIA DILE y haz que tus compras en los comercios autorizados paguen tus cuotas o sumen tus cuentas de ahorro. ",
      textButton: "Ver más",
      linkPath: "https://www.clubfamiliadile.com/",
    },
    {
      title: "¡HAZ CRECER TU DINERO CON NUESTRA SUPER TASA! ",
      description:
        "Abre tu CUENTA DE AHORROS A PLAZO FIJO y gana hasta el 20% con la seguridad y confianza de nuestros más de 12 años de trabajo y con la supervisión de la SBS.  ",
      textButton: "Ver más",
      linkPath: "/cuenta-especial",
    },
    {
      title: "¡NO HAY EXCUSAS PARA SEGUIR CRECIENDO JUNTOS!",
      description:
        "Somos tu SOCIO FINANCIERO siempre listos para apoyar tus sueños y el de miles de emprendedores con nuestros productos crediticios. ",
      textButton: "Ver más",
      linkPath: "/cuenta-movil",
    },
    {
      title: "¡SACA TU CRÉDITO DIGITAL AL TOQUE!",
      description:
        "Con un solo clic saca tu crédito desde la comodidad de tu hogar o donde quiera que te encuentres y 𝗗𝗘𝗦𝗘𝗠𝗕𝗢𝗟𝗦𝗔 𝗔𝗟 𝗜𝗡𝗦𝗧𝗔𝗡𝗧𝗘. ",
      textButton: "Ver más",
      linkPath: "/solicitar/digital",
    },
  ];

  useEffect(() => {
    document.title = "DILE Cooperativa de ahorro y Credito";
  }, []);
  return (
    <>
      <Slider3 slidesInfo={slidesInfo} />

      <div className="o_products_container_home">
        <div className="o_products_container-content">
          <div className="o_card2_title_home">
            <h2 className="">OBSERVA LO QUE TENEMOS PARA TI</h2>
          </div>
          <div className="container-home-cards">
            <CardInfoHome
              title={"CRÉDITOS"}
              image={`${process.env.PUBLIC_URL}/images/prestamos_principal.png`}
              link={"/solicitar/credito"}
              output={false}
            />
            <CardInfoHome
              title={"CUENTAS DE AHORRO"}
              image={`${process.env.PUBLIC_URL}/images/ahorro_principal.png`}
              link={"/cuenta-especial"}
              output={false}
            />
            <CardInfoHome
              title={"CLUB FAMILIA DILE"}
              image={`${process.env.PUBLIC_URL}/images/club_principal.png`}
              link={"https://www.clubfamiliadile.com/"}
              output={true}
            />
          </div>
        </div>
      </div>
      <div className="o_products_container_home">
        <div className="o_products_container-content">
          <div className="o_card2_title_home">
            <h2>SEGUIMOS CRECIENDO JUNTOS</h2>
          </div>
          <div className="w-full h-full grid grid-cols-3 sm:grid-cols-7 gap-8 px-0 sm:px-8 my-12 flex-wrap mt-16">
            <CardInfoHome
              image={`${process.env.PUBLIC_URL}/images/creciendo_principal.png`}
            />
            <CardInfoHome
              image={`${process.env.PUBLIC_URL}/images/socio_cooperativa.png`}
            />
            <CardInfoHome
              image={`${process.env.PUBLIC_URL}/images/desembolso_credito.png`}
            />
            <CardInfoHome
              image={`${process.env.PUBLIC_URL}/images/agencia_nacional.png`}
            />
            <CardInfoHome
              image={`${process.env.PUBLIC_URL}/images/mujeres_credito.png`}
            />
            <CardInfoHome
              image={`${process.env.PUBLIC_URL}/images/socio_migrante.png`}
            />
            <CardInfoHome
              image={`${process.env.PUBLIC_URL}/images/socio_certificado.png`}
            />
            
          </div>
        </div>
      </div>
      <div className="o_products_container_home">
        <div className="o_products_container-content">
          <div className="o_card2_title_home">
            <h2>LO QUE NECESITAS CONOCER</h2>
          </div>
          <div className="o_card_home_2_container">
            <CardSegura
              image={"/images/card_segura1.jpg"}
              title={"Tu información siempre segura"}
              description={"Conoce nuestras recomendaciones de ciberseguridad."}
            />
            <CardSegura
              image={"/images/card_segura2.png"}
              title={"Educación Financiera"}
              description={
                "Conoce nuestros cursos de Educación Financiera para emprendedores."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
