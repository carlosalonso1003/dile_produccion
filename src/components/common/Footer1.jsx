import { Link } from "react-router-dom";
import LogoDile from "../../assets/LogoDile";
import { BsFacebook, BsInstagram, BsTiktok, BsWhatsapp } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer1() {
  return (
    <footer className="w-full bg-primary-50 py-8">
      <div className="w-full max-w-7xl mx-auto px-0 lg:px-10 flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0">
        <div className="w-full lg:w-4/12 lg:space-y-4 flex flex-row lg:flex-col justify-between  lg:justify-start">
          <div className="w-[150px] sm:w-[250px] lg:w-full px-24">
            <LogoDile className={"w-full"} />
          </div>
          <div className="sm:w-[250px] lg:w-full flex items-center justify-between px-8">
            <button className="h-6 w-6 lg:w-8 lg:h-8 items-center justify-center align-center rounded-full mr-2">
              <Link
                to={"https://www.facebook.com/cooperativadile"}
                target="_blank"
                preventScrollReset={true}
              >
                <BsFacebook className="w-full h-full text-primary-800 hover:scale-125" />
              </Link>
            </button>
            <button className="h-6 w-6 lg:w-8 lg:h-8 items-center justify-center align-center rounded-full mr-2">
              <Link
                to={"https://wa.me/message/L2O46QSKIEUQH1"}
                target="_blank"
                preventScrollReset={true}
              >
                <BsWhatsapp className="w-full h-full text-primary-800 hover:hover:scale-125" />
              </Link>
            </button>
            <button className="h-6 w-6 lg:w-8 lg:h-8 items-center justify-center align-center rounded-full mr-2">
              <Link
                to={"https://www.instagram.com/cooperativa.dile/"}
                target="_blank"
                preventScrollReset={true}
              >
                <BsInstagram className="w-full h-full text-primary-800 hover:hover:scale-125" />
              </Link>
            </button>
            <button className="h-6 w-6 lg:w-8 lg:h-8 items-center justify-center align-center rounded-full mr-2">
              <Link
                to={"https://www.tiktok.com/@coopacdile"}
                target="_blank"
                preventScrollReset={true}
              >
                <BsTiktok className="w-full h-full text-primary-800 hover:scale-125" />
              </Link>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-8/12 flex-1 flex flex-col sm:flex-row space-y-8 sm:space-y-0">
          <div className="w-full sm:w-1/2 px-8">
            <div className="row-span-2 ">
              <div>
                <h3 className="text-lg font-bold text-primary-800 uppercase flex items-center space-x-2">
                  <p>Agencias</p>
                </h3>

                <div className="flex flex-col items-start mt-1 space-y-1">
                  <Link
                    to={"https://maps.app.goo.gl/43D31zTJuPZaCatP9"}
                    target="_blank"
                    preventScrollReset={true}
                    className="text-black transition-colors font-light duration-200 hover:font-bold hover:text-primary-800"
                  >
                    Wanchaq: Av. Garcilazo N° 415
                  </Link>
                  <Link
                    to={"https://maps.app.goo.gl/WsYKXFok4uxQVfRY6"}
                    target="_blank"
                    preventScrollReset={true}
                    className="text-black transition-colors font-light duration-200 hover:font-bold hover:text-primary-800"
                  >
                    San Jeronimo: Av. Llocllapata A-4, Urb. Retamales
                  </Link>
                  <Link
                    to={"https://maps.app.goo.gl/vkp9pyHEorLjceQS6"}
                    target="_blank"
                    preventScrollReset={true}
                    className="text-black transition-colors font-light duration-200 hover:font-bold hover:text-primary-800"
                  >
                    Santiago: Calle Siete Mascarones 1190
                  </Link>
                  <Link
                    to={"https://maps.app.goo.gl/ytGZM3gqYzRAxjiA8"}
                    target="_blank"
                    preventScrollReset={true}
                    className="text-black transition-colors font-light duration-200 hover:font-bold hover:text-primary-800"
                  >
                    Sicuani: Jr. Tacna N° 106
                  </Link>
                  <Link
                    to={"https://maps.app.goo.gl/VhZ2qMcKqMgMBK4V9"}
                    target="_blank"
                    preventScrollReset={true}
                    className="text-black transition-colors font-light duration-200 hover:font-bold hover:text-primary-800"
                  >
                    Quillabamba: Jr. Martin Pio Concha N° 120
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 px-8">
            <div className="">
              <div>
                <h3 className="text-lg font-bold text-primary-800 uppercase">
                  Accesos rapidos
                </h3>

                <div className="flex flex-col items-start mt-1 space-y-1">
                <Link
                    to={"/nuestra-historia/nosotros"}
                    target="_blank"
                    preventScrollReset={true}
                    className="text-black transition-colors font-light duration-200 hover:font-bold hover:text-primary-800"
                  >
                    ¿Quiénes somos?
                  </Link>
                  <Link
                    to={"https://clubfamiliadile.com/"}
                    target="_blank"
                    preventScrollReset={true}
                    className="text-black transition-colors font-light duration-200 hover:font-bold hover:text-primary-800"
                  >
                    CLUB FAMILIA DILE
                  </Link>
                  <Link
                    to={"#"}
                    target="_blank"
                    preventScrollReset={true}
                    className="text-black transition-colors font-light duration-200 hover:font-bold hover:text-primary-800"
                  >
                    Transparencia
                  </Link>
                  <Link
                    to={"https://www.sbs.gob.pe/coopac"}
                    target="_blank"
                    preventScrollReset={true}
                    className="text-black transition-colors font-light duration-200 hover:font-bold hover:text-primary-800"
                  >
                    SBS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
