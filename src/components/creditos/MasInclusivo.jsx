import Molde from "../common/Molde";
import CardInfo from "../common/card/CardInfo";
import CardInfo1 from "../common/card/CardInfo1";
import InfoItems from "./InfoItems";

export default function MasInclusivo() {
  return (
    <>
      <Molde
        image={"/images/mas_inclusivo.jpg"}
        title={"CRÉDITO MÁS INCLUSIVO"}
        description={
          "En DILE, comprendemos que las dificultades financieras pueden afectar a cualquiera en algún momento de la vida. Creemos en brindar oportunidades a quienes enfrentan desafíos crediticios, reconociendo que detrás de cada calificación crediticia hay una historia individual. Nuestro compromiso es ayudar a las personas a reconstruir su historial crediticio y recuperar su estabilidad financiera."
        }
        textButton={"Solicita tu crédito Más Inclusivo ¡AHORA!"}
        linkForm={"/solicitar/mas-inclusivo"}
        requisitos={
          <InfoItems
            Title={"CONOCE NUESTROS REQUISITOS"}
            textColor={"text-primary-50"}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <CardInfo1
                icon={"/icons/recibo_servicio.svg"}
                title={"Recibo de Servicios"}
              />
              <CardInfo1
                icon={"/icons/Tarjeta-Dni.svg"}
                title={"DNI Vigente"}
              />
              <CardInfo1
                icon={"/icons/negocio.svg"}
                title={"Fotos del Negocio"}
              />
              <CardInfo1
                icon={"/icons/evaluacion_dile.svg"}
                title={"Historial Crediticio"}
              />
            </div>
          </InfoItems>
        }
        beneficios={
          <InfoItems
            Title={"CONOCE NUESTROS BENEFICIOS"}
            textColor={"text-primary-800"}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              <CardInfo
                icon={"/icons/beneficios.svg"}
                title={"Beneficios CLUB FAMILIA DILE"}
              />
              <CardInfo
                icon={"/icons/educacion-financiera.svg"}
                title={"Educación Financiera"}
              />
              <CardInfo
                icon={"/icons/mejorar-finanzas.svg"}
                title={"Mejorar tu Historial Crediticio"}
              />
            </div>
          </InfoItems>
        }
        condiciones={
          <InfoItems
            Title={"CONOCE NUESTRAS CONDICIONES"}
            textColor={"text-primary-50"}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <CardInfo1
                icon={"/icons/calendario.svg"}
                title={"De 30 a 120 Días"}
              />
              <CardInfo1
                icon={"/icons/ingresos.svg"}
                title={"Informe de Ingresos"}
              />
              <CardInfo1
                icon={"/icons/negocio_1.svg"}
                title={"Tener un Negocio"}
              />
              <CardInfo1
                icon={"/icons/desembolso_1.svg"}
                title={"De S/.1'000 Hasta S/.10'000"}
              />
            </div>
          </InfoItems>
        }
      />
    </>
  );
}
