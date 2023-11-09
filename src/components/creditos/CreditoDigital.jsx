import Molde from "../common/Molde";
import CardInfo from "../common/card/CardInfo";
import CardInfo1 from "../common/card/CardInfo1";
import InfoItems from "./InfoItems";

export default function CreditoDigital() {
  return (
    <>
      <Molde
        image={"/images/credito_digital.jpg"}
        title={"CRÉDITO DIGITAL"}
        description={
          "En de la Cooperativa de ahorros y creditos DILE, creemos en la simplicidad y la accesibilidad financiera. Nuestro crédito digital está diseñado para adaptarse a tu estilo de vida moderno, permitiéndote acceder a los fondos que necesitas cuando los necesitas, desde cualquier lugar. Descubre la comodidad y la eficiencia del futuro financiero hoy mismo con nuestro crédito digital."
        }
        textButton={"Solicita un Crédito Digital ¡AHORA!"}
        linkForm={"/solicitar/digital"}
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
                icon={"/icons/celular.svg"}
                title={"Contar con un celular"}
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
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-8">
              <CardInfo
                icon={"/icons/casa.svg"}
                title={"Desde la comodidad de tu casa"}
              />
              <CardInfo
                icon={"/icons/reloj.svg"}
                title={"Desembolsa en Minutos"}
              />
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              <CardInfo1
                icon={"/icons/calendario.svg"}
                title={"De 6 a 12 Meses"}
              />
              <CardInfo1
                icon={"/icons/ingresos.svg"}
                title={"Informe de Ingresos"}
              />
              <CardInfo1
                icon={"/icons/desembolso_1.svg"}
                title={"Desde S/.500 Hasta S/.1000"}
              />
            </div>
          </InfoItems>
        }
      />
    </>
  );
}
