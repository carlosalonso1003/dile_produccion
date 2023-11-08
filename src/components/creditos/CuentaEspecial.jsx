import Molde from "../common/Molde";
import CardInfo from "../common/card/CardInfo";
import CardInfo1 from "../common/card/CardInfo1";
import InfoItems from "./InfoItems";

export default function CuentaEspecial() {
  return (
    <>
      <Molde
        image={"/images/pagodiario_new.jpg"}
        title={"Cuenta Especial"}
        description={
          "Es una alternativa de financiamiento de corto plazo que permite al socio pagar el credito de manera diaria en la comodidad de su negocio, bajo el supuesto de que sus ingresos son en esta frecuencia."
        }
        textButton={"Solicita tu credito paga-diario hoy!"}
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
            Title={"Conoce nuestras Condiciones"}
            textColor={"text-primary-50"}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
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
            </div>
          </InfoItems>
        }
      />
    </>
  );
}
