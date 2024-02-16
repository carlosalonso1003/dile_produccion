import Molde from "../common/MoldeAhorro";
import CardInfo from "../common/card/CardInfo";
import CardInfo1 from "../common/card/CardInfo1";
import InfoItems from "./InfoItems";

export default function CuentaMovil() {
  return (
    <>
      <Molde
        image={"/images/cuenta_movil.jpg"}
        title={"ESTRELLA"}
        textButton={"Abrir mi cuenta"}
        linkForm={"/solicita/ahorro"}
        condiciones={
          <InfoItems Title={"TIPOS DE CUENTA"} textColor={"text-primary-800"}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <CardInfo
                icon={"/icons/socioActivo.svg"}
                title={"Individual"}
                description={
                  "Solo participa una persona, y es el único que puede efectuar retiros, consultar sobre el saldo de su cuenta, etc."
                }
              />
              <CardInfo
                icon={"/icons/mancomunada_indistinta.svg"}
                title={"Mancomunada Indistinta"}
                description={
                  "Participan dos o más personas, hasta un máximo de tres titulares, la característica de esta cuenta, es que cualquiera de los titulares puede realizar retiros."
                }
              />
              <CardInfo
                icon={"/icons/mancomunada_conjunta.svg"}
                title={"Mancomunada Conjunta"}
                description={
                  "Participan dos o más personas, hasta un máximo de tres titulares, la característica de esta cuenta, es que al momento de realizar retiros deberán presentarse los tres titulares, y firmar en el respectivo voucher de retiro."
                }
              />
            </div>
          </InfoItems>
        }
        requisitos={
          <InfoItems
            Title={"CONOCE NUESTROS REQUISITOS"}
            textColor={"text-primary-800"}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <CardInfo
                icon={"/icons/socioActivo.svg"}
                title={"Ser socio"}
                description={""}
              />
              <CardInfo
                icon={"/icons/Tarjeta-Dni.svg"}
                title={"DNI Vigente"}
                description={"del titular o titulares"}
              />
              <CardInfo
                icon={"/icons/desembolso_1.svg"}
                title={"Apertura con S/ 10.00"}
                description={"monto mínimo para realizar la apertura de cuenta"}
              />
            </div>
          </InfoItems>
        }
        beneficios={
          <InfoItems
            Title={"CONOCE NUESTROS BENEFICIOS"}
            textColor={"text-primary-800"}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <CardInfo
                icon={"/icons/beneficios.svg"}
                title={"CLUB FAMILIA DILE"}
                description={
                  "Una iniciativa para ayudarte a aumentar tus ahorros."
                }
              />
              <CardInfo
                icon={"/icons/mejorar-finanzas.svg"}
                title={"Interes"}
                description={
                  "Ganas buenos intereses, calculados a la tasa minima del 3.00 % TREA."
                }
              />
              <CardInfo
                icon={"/icons/no_cobra_comision.svg"}
                title={"cero comisiones"}
                description={
                  "No cobramos comisiones, mantenimiento e impuesto a las transacciones financieras (ITF)."
                }
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:ml-40 lg:mr-40">
              <CardInfo
                icon={"/icons/libre_disponible.svg"}
                title={"Disponible"}
                description={
                  "Libre disponibilidad de tu dinero en cualquier momento"
                }
              />
              <CardInfo
                icon={"/icons/desembolso_fijo.svg"}
                title={"Crédito facil"}
                description={"Puede usarse como garantía de sus préstamos."}
              />
            </div>
          </InfoItems>
        }
      />
    </>
  );
}
