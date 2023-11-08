import React, { useEffect, useState } from "react";
import MoldePerfil from "./MoldePerfil";
import Spinner from "../../Spinner";

export default function Agencias() {
  useEffect(() => {
    document.title = `DILE Agencias`;
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      // Una vez que la página esté completamente cargada, detenemos el spinner
      setLoading(false);
    };

    // Simula una carga asincrónica (puedes reemplazar esto con tu lógica real)
    setTimeout(() => {
      setLoading(false); // Detener el spinner después de 2 segundos (simulación)
    }, 2000);
  }, []);

  const [selectedOption, setSelectedOption] = useState("Agencia Wanchaq");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full lg:w-4/5 max-w-7xl mx-auto px-8 lg:px-0 my-16">
          <h1 className="font-bold text-center text-[28px] md:text-[48px] text-primary-800 mb-8">
            Agencias de Atención
          </h1>
          <div className="flex flex-col 2smm:flex-row items-center justify-center 2smm:space-x-12">
            <label
              className="block text-gray-600 text-[16px] font-semibold mb-2"
              htmlFor="agencia"
            >
              Seleccione Agencia
            </label>
            <select
              id="agencia"
              value={selectedOption}
              onChange={handleSelectChange}
              name="agencia"
              className="w-[260px] px-5 h-12 font-medium text-[16px] rounded-lg focus:outline-none transition duration-300"
            >
              <option value="Agencia Wanchaq">
                Oficina Principal - Wanchaq
              </option>
              <option value="Agencia Santiago">Agencia Santiago</option>
              <option value="Agencia San Jeronimo">Agencia San Jeronimo</option>
              <option value="Agencia Sicuani">Agencia Sicuani</option>
              <option value="Agencia Quillabamba">Agencia Quillabamba</option>
            </select>
          </div>
          {selectedOption === "Agencia Wanchaq" && (
            <>
              <div className="w-full h-[500px] my-8">
                <iframe
                  title="Agencia Wanchaq"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.211996999082!2d-71.97248232503422!3d-13.522577671132085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5e1ff37ec13%3A0x25a0da432c655b15!2sDILE!5e0!3m2!1ses!2spe!4v1695144470369!5m2!1ses!2spe"
                  width={"100%"}
                  height={"100%"}
                  style={{ border: "0px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <MoldePerfil
                imgPerfil={"/images/admi-wanchaq-1.jpg"}
                name={"MBA. Cesar Eduardo Bustamante Baca"}
                title={"Administrador Oficina Principal"}
                direccion={"Av. Garcilazo N° 415"}
                telefono={"084-786245"}
              />
            </>
          )}
          {selectedOption === "Agencia Santiago" && (
            <>
              <div className="w-full h-[500px] my-8">
                <iframe
                  title="Agencia Santiago"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.7917869455189!2d-71.98486183036775!3d-13.525331795266144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5ebfbcd345b%3A0x17ac33f40ec088c2!2sCOOPAC%20DILE!5e0!3m2!1ses-419!2spe!4v1695237564215!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: "0px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <MoldePerfil
                imgPerfil={"/images/administradores_logo.png"}
                name={"Lic. Jose Carlos Francisco Espinoza Medina"}
                title={"Administrador Agencia Santiago"}
                direccion={"Calle Siete Mascarones N° 1190"}
                telefono={"084-786245"}
              />
            </>
          )}
          {selectedOption === "Agencia San Jeronimo" && (
            <>
              <div className="w-full h-[500px] my-8">
                <iframe
                  title="Agencia San Jeronimo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.84298728754!2d-71.8922822239213!3d-13.545221671610197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916e7f810e5ce80b%3A0x8f371d3761d84834!2sCOOPAC%20DILE!5e0!3m2!1ses-419!2spe!4v1695238452593!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: "0px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <MoldePerfil
                imgPerfil={"/images/admi-jeronimo-1.jpg"}
                name={"C.P.C Katheryn Minauro Montesinos"}
                title={"Administrador Agencia San Jeronimo"}
                direccion={"Av. Llocllapata A-4, Urb. Retamales"}
                telefono={"084-623125"}
              />
            </>
          )}
          {selectedOption === "Agencia Sicuani" && (
            <>
              <div className="w-full h-[500px] my-8">
                <iframe
                  title="Agencia Sicuani"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.6850015641194!2d-71.22927082390795!3d-14.271583587308216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91692b40f7f57613%3A0x6c769967963caa8c!2sCOOPAC%20DILE!5e0!3m2!1ses-419!2spe!4v1695238164210!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: "0px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <MoldePerfil
                imgPerfil={"/images/admi-sicuani-1.jpg"}
                name={"Lic. Edson Oblitas Mogrovejo"}
                title={"Administrador Agencia Sicuani"}
                direccion={"Jr. Tacna N° 106"}
                telefono={"084-786245"}
              />
            </>
          )}
          {selectedOption === "Agencia Quillabamba" && (
            <>
              <div className="w-full h-[500px] my-8">
                <iframe
                  title="Agencia Quillabamba"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.67227260509!2d-72.69457872393352!3d-12.864431557665517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91727f9b83594a71%3A0xd451f745cf39670!2sCOOPAC%20DILE!5e0!3m2!1ses-419!2spe!4v1695238125162!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: "0px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <MoldePerfil
                imgPerfil={"/images/admi-quilla-1.jpg"}
                name={"C.P.C Christiam Lawerence Valverde Palomino"}
                title={"Administrador Agencia Quillabamba"}
                direccion={"Jr. Martin Pio Concha N° 120"}
                telefono={"084-786245"}
              />
            </>
          )}
          {selectedOption === "Agencia Lima" && (
            <>
              <div className="w-full h-[500px] my-8">
                <iframe
                  title="Agencia Lima"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.5529306904427!2d-77.07739411436286!3d-11.936169809647668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d1c6a16dcb23%3A0x95054493cc0f3043!2sAv.%20Alfredo%20Mendiola%207969%2C%20Los%20Olivos%2015307!5e0!3m2!1ses!2spe!4v1695825435239!5m2!1ses!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: "0px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <MoldePerfil
                imgPerfil={"/images/admi-lima-1.jpg"}
                name={"LIC. Kimberly Tarazona Sarmiento"}
                title={"Administrador Oficina Informativa Lima"}
                direccion={"Urb. Pro Los Olivos, Av. Alfredo Mendiola 7965"}
                telefono={"084-786245"}
              />
            </>
          )}
        </div>
      )}
    </>
  );
}
