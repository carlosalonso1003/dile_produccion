import Molde from "../common/Molde";
import CardInfo from "../common/card/CardInfo";
import CardInfo1 from "../common/card/CardInfo1";
import InfoItems from "./InfoItems";

export default function CuentaMovil() {
  return (
    <>
      <Molde
        image={"/images/cuenta_movil.jpg"}
        title={"Cuenta Movil"}
        description={
          "La Cuenta Móvil, una innovadora solución bancaria diseñada pensando en tu comodidad y libertad financiera. Esta cuenta revolucionaria te ofrece la flexibilidad de acceder y gestionar tu dinero en cualquier momento y en cualquier lugar."
        }
        textButton={"Solicita Mas Información!"}
        requisitos={
          <InfoItems
            Title={"Conoce nuestros Requisitos"}
            textColor={"text-primary-50"}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              <CardInfo1
                icon={"/icons/socioActivo.svg"}
                title={"Ser socio"}
              />
              <CardInfo1
                icon={"/icons/Tarjeta-Dni.svg"}
                title={"DNI Vigente"}
              />
              <CardInfo1
                icon={"/icons/desembolso_1.svg"}
                title={"Apertura con S/ 10.00"}
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
                icon={"/icons/no_cobra_comision.svg"}
                title={"No cobramos comisiones ni mantenimiento"}
              />
              <CardInfo
                icon={"/icons/mejorar-finanzas.svg"}
                title={"Gana un interes hasta 3% TREA"}
              />
            </div>
          </InfoItems>
        }
        condiciones={
          <InfoItems
            Title={"Tipos de Cuenta"}
            textColor={"text-primary-50"}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              <CardInfo1
                icon={"/icons/socioActivo.svg"}
                title={"Individual"}
              />
              <CardInfo1
                icon={"/icons/mancomunada_indistinta.svg"}
                title={"Mancomunada Indistinta"}
              />
              <CardInfo1
                icon={"/icons/mancomunada_conjunta.svg"}
                title={"Mancomunada Conjunta"}
              />
            </div>
          </InfoItems>
        }
      />
    </>
  );
}
