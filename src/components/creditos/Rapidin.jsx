import Molde from "../common/Molde";
import CardInfo from "../common/card/CardInfo";
import CardInfo1 from "../common/card/CardInfo1";
import InfoItems from "./InfoItems";

export default function Rapidin() {
  return (
    <>
      <Molde
        image={"/images/rapidin.jpg"}
        title={"Credito Rapidin"}
        description={
          "En DILE, entendemos que en la vida pueden surgir situaciones inesperadas que requieren una solución financiera rápida. Nuestra misión es proporcionar a nuestros clientes la ayuda que necesitan cuando más la necesitan, de manera rápida y eficiente."
        }
        textButton={"Solicita tu credito Rapidín hoy!"}
        linkForm={"/solicitar/rapidin"}
        requisitos={
          <InfoItems
            Title={"Conoce nuestros Requisitos"}
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
                title={"Historial Créditicio"}
              />
            </div>
          </InfoItems>
        }
        beneficios={
          <InfoItems
            Title={"Conoce nuestros Beneficios"}
            textColor={"text-primary-800"}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <CardInfo
                icon={"/icons/reloj.svg"}
                title={"De 1 a 2 Horas para desembolsar"}
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
            Title={"Conoce nuestras Condiciones"}
            textColor={"text-primary-50"}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
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
