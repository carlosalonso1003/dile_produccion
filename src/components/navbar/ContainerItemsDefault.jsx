import Containeritems from "./ContainerItems";
import CalendarioSvg from "../../assets/Calendario";
import MasInclusivoSvg from "../../assets/MasInclusivoSvg";
import RelojSvg from "../../assets/RelojSvg";
import CelularSvg from "../../assets/CelularSvg";
import ChanchitoSvg from "../../assets/ChanchitoSvg";
import PlazoFijoSvg from "../../assets/PlazoFijoSvg";
import BeneficiosSvg from "../../assets/BeneficiosSvg";
import TarjetaSvg from "../../assets/TarjetaSvg";

export default function ContainerItemsDefault({ id }) {
  const iconsPagoDiario = [
    {
      src: <CalendarioSvg />,
      title: "Pago Diario",
      linkPath: "/credito-pago-diario",
    },
    {
      src: <MasInclusivoSvg />,
      title: "Más Inclusivo",
      linkPath: "/credito-mas-inclusivo",
    },
    {
      src: <RelojSvg />,
      title: "Rapidin",
      linkPath: "/credito-rapidin",
    },
    {
      src: <CelularSvg />,
      title: "Digital",
      linkPath: "/credito-digital",
    },
  ];

  const iconsAhorros = [
    {
      src: (
        <img
          src={`${process.env.PUBLIC_URL}/icons/ahorro-movil.svg`}
          className="w-10 h-10 hover:scale-125"
        />
      ),
      title: "Cuenta estrella",
      linkPath: "/cuenta-movil",
    },
    {
      src: <PlazoFijoSvg />,
      title: "Plazo Fijo",
      linkPath: "/cuenta-especial",
    },
  ];

  const iconsFamiliaDile = [
    {
      src: <TarjetaSvg />,
      title: "familia dile",
      linkPath: "/solicitar/credito",
    },
    {
      src: <BeneficiosSvg />,
      title: "Beneficios",
      linkPath: "https://www.clubfamiliadile.com/",
    },
  ];

  return (
    <>
      {id === 1 ? <Containeritems icons={iconsPagoDiario} /> : <></>}
      {id === 2 ? <Containeritems icons={iconsAhorros} /> : <></>}
      {id === 3 ? <Containeritems icons={iconsFamiliaDile} /> : <></>}
    </>
  );
}
