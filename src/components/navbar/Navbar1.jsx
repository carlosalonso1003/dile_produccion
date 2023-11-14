import { useState } from "react";
import LogoDile from "../../assets/LogoDile";
import ContainerItemsDefault from "./ContainerItemsDefault";
import "./stylesNavbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTiktok, BsWhatsapp } from "react-icons/bs";

export default function Navbar1() {
  const [idItem, setIdItem] = useState(1);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <header className="o_footer_container">
        <nav className="o_navbar_container">
          <LogoDile className={"w-[120px] h-8 lg:w-[168px] lg:h-12"} />
          <div className="o_navbar_container_a">
            <div className="o_productos">
              <div className="o_navbar_container_a__lb">productos</div>
            </div>
            <div className="o_navbar__menu">
              <div className="w-full max-w-7xl bg-primary-100 mx-auto rounded-xl relative h-36">
                <div className="h-12 flex justify-between">
                  <div
                    className="uppercase h-full text-black font-bold text-[12px] flex-1 cursor-pointer "
                    onMouseEnter={() => setIdItem(1)}
                  >
                    <div className="o_nav_prod flex items-center justify-center w-full h-full">
                      créditos
                    </div>
                  </div>
                  <div
                    className="uppercase h-full text-black font-bold text-[12px] flex-1 cursor-pointer"
                    onMouseEnter={() => setIdItem(2)}
                  >
                    <div className="o_nav_prod flex items-center justify-center w-full h-full">
                      ahorros
                    </div>
                  </div>
                  <div
                    className="uppercase h-full text-black font-bold text-[12px] flex-1 cursor-pointer"
                    onMouseEnter={() => setIdItem(3)}
                  >
                    <div className="o_nav_prod flex items-center justify-center w-full h-full">
                      club familia dile
                    </div>
                  </div>
                </div>
                <ContainerItemsDefault id={idItem} />
              </div>
            </div>
            <Link
              to={"/nuestra-historia/nosotros"}
              className="o_navbar_container_header"
            >
              <div className="o_navbar_container_a__lb">¿QUIÉNES SOMOS?</div>
            </Link>
            <Link to={"/agencias"} className="o_navbar_container_header">
              <div className="o_navbar_container_a__lb">agencias</div>
            </Link>
            <Link
              to={"https://dile.com.pe:2096/"}
              target="_blank"
              preventScrollReset={true}
              className="o_navbar_container_header"
            >
              <div className="o_navbar_container_a__lb">
                Correo Institucional
              </div>
            </Link>
          </div>
          <div className="md:hidden cursor-pointer">
            <GiHamburgerMenu
              className="w-[32px] h-[32px] text-primary-800"
              onClick={() => setIsOpenMenu(true)}
            />
          </div>
        </nav>
        {isOpenMenu && (
          <>
            <div className="bg-gray-400 bg-opacity-50 w-full fixed z-[60] top-0 left-0 bottom-0">
              <nav className="fixed z-[60] top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-primary-50 border-r overflow-y-auto bg-opacity-100">
                <div className="flex items-center justify-between relative mb-4">
                  <div className="h-10">
                    <LogoDile className={"h-10"} />
                  </div>
                  <button
                    className="navbar-close"
                    onClick={() => setIsOpenMenu(false)}
                  >
                    <AiOutlineClose className="w-[32px] h-[32px] text-primary-800" />
                  </button>
                </div>
                <div>
                  <ul>
                    <li className="mb-1">
                      <p className="block px-4 pt-4 pb-2 text-sm font-bold text-gray-400 hover:bg-blue-50 rounded">
                        Productos
                      </p>
                      <div>
                        <p className="block px-8 py-2 text-sm font-bold text-gray-400 hover:bg-blue-50 rounded">
                          Créditos
                        </p>
                        <Link
                          className="block px-12 py-2 text-sm font-semibold text-primary-800 hover:bg-primary-800 hover:text-primary-50 rounded"
                          to={"/credito-pago-diario"}
                          onClick={() => setIsOpenMenu(false)}
                        >
                          Crédito Pago Diario
                        </Link>
                        <Link
                          className="block px-12 py-2 text-sm font-semibold text-primary-800 hover:bg-primary-800 hover:text-primary-50 rounded"
                          to={"/credito-mas-inclusivo"}
                          onClick={() => setIsOpenMenu(false)}
                        >
                          Crédito Mas Inclusivo
                        </Link>
                        <Link
                          className="block px-12 py-2 text-sm font-semibold text-primary-800 hover:bg-primary-800 hover:text-primary-50 rounded"
                          to={"/credito-rapidin"}
                          onClick={() => setIsOpenMenu(false)}
                        >
                          Crédito Rapidin
                        </Link>
                        <Link
                          className="block px-12 py-2 text-sm font-semibold text-primary-800 hover:bg-primary-800 hover:text-primary-50 rounded"
                          to={"/credito-digital"}
                          onClick={() => setIsOpenMenu(false)}
                        >
                          Crédito Digital
                        </Link>
                        <p className="block px-8 py-2 text-sm font-bold text-gray-400 hover:bg-blue-50 rounded">
                          Ahorros
                        </p>
                        <Link
                          className="block px-12 py-2 text-sm font-semibold text-primary-800 hover:bg-primary-800 hover:text-primary-50 rounded"
                          to={"/cuenta-movil"}
                          onClick={() => setIsOpenMenu(false)}
                        >
                          Ahorro Móvil
                        </Link>
                        <Link
                          className="block px-12 py-2 text-sm font-semibold text-primary-800 hover:bg-primary-800 hover:text-primary-50 rounded"
                          to={"/cuenta-especial"}
                          onClick={() => setIsOpenMenu(false)}
                        >
                          Ahorro Fijo
                        </Link>
                        <Link 
                          className="block px-8 py-2 text-sm font-bold text-gray-400 hover:bg-blue-50 rounded"
                          to={"https://www.clubfamiliadile.com/"}
                          onClick={()=>setIsOpenMenu(false)}
                          >
                          Familia Dile
                          
                        </Link>
                      </div>
                    </li>
                    <li className="mb-1">
                      <Link
                        className="block p-4 text-sm font-bold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                        to={"/nuestra-historia/nosotros"}
                        onClick={() => setIsOpenMenu(false)}
                      >
                        ¿Quienes Somos?
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link
                        className="block p-4 text-sm font-bold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                        to={"/agencias"}
                        onClick={() => setIsOpenMenu(false)}
                      >
                        Agencias
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mt-auto w-full">
                  <div className="grid grid-cols-5 mx-auto justify-items-center">
                    <Link
                      to={"https://www.facebook.com/cooperativadile"}
                      target="_blank"
                      preventScrollReset={true}
                    >
                      <BsFacebook className="w-6 h-6 sm:w-10 sm:h-10 text-primary-800 hover:text-primary-600" />
                    </Link>
                    <Link
                      to={"https://wa.me/message/L2O46QSKIEUQH1"}
                      target="_blank"
                      preventScrollReset={true}
                    >
                      <BsWhatsapp className="w-6 h-6 sm:w-10 sm:h-10 text-primary-800 hover:text-primary-600" />
                    </Link>
                    <Link
                      to={"https://www.instagram.com/cooperativa.dile/"}
                      target="_blank"
                      preventScrollReset={true}
                    >
                      <BsInstagram className="w-6 h-6 sm:w-10 sm:h-10 text-primary-800 hover:text-primary-600" />
                    </Link>
                    <Link
                      to={"https://www.tiktok.com/@coopacdile"}
                      target="_blank"
                      preventScrollReset={true}
                    >
                      <BsTiktok className="w-6 h-6 sm:w-10 sm:h-10 text-primary-800 hover:text-primary-600" />
                    </Link>
                    <BsFacebook className="w-6 h-6 sm:w-10 sm:h-10 text-primary-800 hover:text-primary-600" />
                  </div>
                  <div className="pt-6"></div>
                  <p className="my-4 text-xs text-center text-gray-400">
                    <span>Cooperativa Dile Copyright © 2023</span>
                  </p>
                </div>
              </nav>
            </div>
          </>
        )}
      </header>
    </>
  );
}
