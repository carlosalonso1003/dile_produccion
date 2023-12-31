import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./stylesForm.css";
import CustomInput from "./CustomInput";
import InputRange from "../common/range/InputRange";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function MoldeFormulario({ title, slides, labelProducto }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenO, setModalIsOpenO]=useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModalEr=()=>{
    setModalIsOpenO(true);
  }

  const closeModalEr=()=>{
    setModalIsOpenO(false);
  }

  const [labelDni, setLabelDni] = useState("");
  const [labelEmail, setLabelEmail] = useState("");
  const [labelOperador, setLabelOperador] = useState("Claro");
  const [labelCelular, setLabelCelular] = useState("");
  const [labelAgencia, setLabelAgencia] = useState("Wanchaq");
  const [labelMonto, setLabelMonto] = useState("3500");
  const [valid, setValid] = useState(false);

  const onValid = (value) => {
    setValid(value);
  };

  const handleDniChange = (value) => {
    setLabelDni(value);
  };

  const handleEmailChange = (value) => {
    setLabelEmail(value);
  };

  const handleTelChange = (value) => {
    setLabelCelular(value);
  };

  const onHandleTelefonia = (event) => {
    setLabelOperador(event.target.value);
  };

  const onHandleAgencia = (event) => {
    setLabelAgencia(event.target.value);
  };

  const onHandleMonto = (val) => {
    setLabelMonto(val);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!valid) {
      console.log("campos imcompletos");
      return valid;
    }

    const url =
      "https://clubfamiliaadmin.escuelagenial.com/Fideli/controller/metodo2.php";

    try {
      console.log(labelDni);
      console.log(labelEmail);
      console.log(labelCelular);
      console.log(labelMonto);
      console.log(labelAgencia);
      console.log(labelProducto);
      console.log(labelOperador);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Dni: labelDni,
          Correo: labelEmail,
          Celular: labelCelular,
          Monto: labelMonto,
          Agencia: labelAgencia,
          Producto: labelProducto,
          Operador: labelOperador,
        }),
      });

      const data = await response.json();

      console.log(data);
      console.log(data["message"]);
   
      if(response["status"]==201){
        openModal();
      }else {
        openModalEr();
      }
      
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  };

  return (
    <>
      <header className="w-full bg-primary-50 sticky top-0 z-50 px-8 xl:px-0">
        <nav className="w-full mx-auto max-w-7xl h-[64px] flex items-center">
          <div className="h-[60%]">
            <Link to={"/"} className="h-full">
              <img
                className="h-full"
                src={`${process.env.PUBLIC_URL}/images/logo1.png`}
                alt="logo form"
              />
            </Link>
          </div>
        </nav>
      </header>
      <div className="relative w-full">
        <div className="w-full hidden xl:flex h-[820px]">
          <div className="w-1/2 bg-primary-800"></div>
          <div className="w-1/2 bg-primary-50"></div>
        </div>
        <div className="w-full absolute top-0 left-0">
          <div className="w-full mx-auto max-w-7xl xl:h-[780px] flex flex-col xl:flex-row">
            <div className="w-full xl:w-1/2 bg-primary-800 h-[500px] xl:h-full px-8 xl:pl-14">
              <div className="flex flex-col h-full w-full justify-center">
                <h2 className="text-center xl:text-left text-[24px] md:text-[36px] xl:text-[44px] font-medium leading-none text-primary-50 px-4">
                  {title}
                </h2>
                <div className="w-full xl:hidden">
                  <Swiper
                    rewind={true}
                    effect="slide"
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="w-10/12 sm:w-[350px] mt-8"
                  >
                    {slides.map((slide, index) => {
                      return (
                        <SwiperSlide key={`slide-form-${index + 1} h-[150px]`}>
                          <div className="flex flex-col items-center justify-center">
                            <img
                              src={`${process.env.PUBLIC_URL}${slide.icon}`}
                              alt={`icon-slide-${index + 1}`}
                              className="w-24 h-24"
                            />
                            <div className="text-center">
                              <h3 className="text-primary-50 text-[18px] sm:text-[20px] font-medium">
                                {slide.title}
                              </h3>
                              <p className="text-primary-50 text-[14px]  font-light">
                                {slide.description}
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>

                <div className="mt-8 space-y-4 hidden xl:block ">
                  {slides.map((slide, index) => {
                    return (
                      <div
                        className="flex flex-row items-center  space-x-8 px-4"
                        key={`imagen lg ${index + 1}`}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}${slide.icon}`}
                          alt={`icon-slide-${index + 1}`}
                          className="w-24 h-24"
                        />
                        <div className="text-left">
                          <h3 className="text-primary-50 text-[20px] font-medium">
                            {slide.title}
                          </h3>
                          <p className="text-primary-50 text-[14px]  font-light">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-full xl:w-1/2 bg-primary-50 py-20 xl:h-full px-8 xl:px-0">
              <div className="w-full min-h-[560px] xl:h-full flex flex-col items-center  justify-center">
                <div className="w-full sm:w-4/5 xl:w-11/12">
                  <h3 className="text-primary-800 text-[24px] md:text-[36px] xl:text-[44px]  leading-none font-bold mb-16">
                    Comienza Ahora
                  </h3>
                  <form className="form-credito" onSubmit={handleSubmit}>
                    <div className="w-full flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0">
                      <CustomInput
                        className={"w-full sm:w-5/12"}
                        label={"Numero de DNI"}
                        messageErrorBlank={"Ingresa tu número de DNI"}
                        messageErrorValid={
                          "El DNI debe contar con 8 caracteres numericos"
                        }
                        maxLength={8}
                        customType={"number"}
                        value={labelDni}
                        onInputChange={handleDniChange}
                        onValid={onValid}
                      />

                      <CustomInput
                        className={"w-full sm:w-5/12"}
                        label={"Email"}
                        messageErrorBlank={"Ingresa tu email"}
                        messageErrorValid={"Ingresa un email válido"}
                        customType={"email"}
                        value={labelEmail}
                        onInputChange={handleEmailChange}
                        onValid={onValid}
                      />
                    </div>
                    <div className="w-full flex flex-col justify-between mt-8 sm:flex-row sm:items-start space-y-8 sm:space-y-0">
                      <div className="w-full sm:w-5/12">
                        <label
                          className="block text-[16px] text-primary-800 font-medium mb-2"
                          htmlFor="telefonia"
                        >
                          Operador
                        </label>
                        <select
                          id="telefonia"
                          name="telefonia"
                          className="w-full px-5 h-12 font-medium cursor-pointer text-[16px] rounded-lg focus:outline-none transition duration-300"
                          onChange={onHandleTelefonia}
                          value={labelOperador}
                        >
                          <option value="Claro">Claro</option>
                          <option value="Movistar">Movistar</option>
                          <option value="Bitel">Bitel</option>
                          <option value="Entel">Entel</option>
                        </select>
                      </div>
                      <div className="w-full sm:w-5/12">
                        <CustomInput
                          className={"w-full"}
                          label={"Celular"}
                          messageErrorBlank={"Ingresa tu numero de celular"}
                          messageErrorValid={"Ingresa un numero válido"}
                          maxLength={9}
                          placeHolder={"000000000"}
                          customType={"tel"}
                          value={labelCelular}
                          onInputChange={handleTelChange}
                          onValid={onValid}
                        />
                      </div>
                    </div>

                    <div className="w-full flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0 mt-8">
                      <div className="w-full sm:w-5/12">
                        <label
                          className="block text-[16px] text-primary-800 font-medium mb-2"
                          htmlFor="agencia"
                        >
                          {labelProducto === "Digital"
                            ? "Lugar de Desembolso"
                            : "Agencia"}
                        </label>
                        <select
                          id="agencia"
                          name="agencia"
                          className="w-full px-5 h-12 font-medium text-[16px] cursor-pointer rounded-lg focus:outline-none transition duration-300"
                          onChange={onHandleAgencia}
                        >
                          <option value="Wanchaq">Agencia Wanchaq</option>
                          <option value="Santiago">Agencia Santiago</option>
                          <option value="San Jeronimo">
                            Agencia San Jeronimo
                          </option>
                          <option value="Quillabamba">
                            Agencia Quillabamba
                          </option>
                          <option value="Sicuani">Agencia Sicuani</option>
                        </select>
                      </div>
                      {labelProducto === "" ? (
                        <div className="w-full sm:w-5/12">
                          <label
                            className="block text-[16px] text-primary-800 font-medium mb-2"
                            htmlFor="producto"
                          >
                            Producto
                          </label>
                          <select
                            id="producto"
                            name="producto"
                            className="w-full px-5 h-12 font-medium text-[16px] cursor-pointer rounded-lg focus:outline-none transition duration-300"
                            onChange={onHandleAgencia}
                          >
                            <option value="Pago Diario">Pago Diario</option>
                            <option value="Rapidin">Rapidin</option>
                            <option value="Mas Inclusivo">Mas Inclusivo</option>
                            <option value="Digital">Digital</option>
                          </select>
                        </div>
                      ) : (
                        <InputRange
                          className={"w-full sm:w-5/12"}
                          min={500}
                          max={10000}
                          step={500}
                          value={500}
                          onChange={onHandleMonto}
                        />
                      )}
                    </div>
                    {labelProducto === "" ? (
                      <div className="w-full flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0 mt-8">
                        <InputRange
                          className={"w-full"}
                          min={500}
                          max={10000}
                          step={500}
                          value={500}
                          onChange={onHandleMonto}
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="mt-16">
                      <label className="flex items-center text-black text-[14px] font-medium">
                        <input
                          type="checkbox"
                          name="suscripcion"
                          className="mr-2 leading-tight w-8 h-8 smm:w-6 smm:h-6 "
                          required
                        />
                        Acepto recibir correos electrónicos promocionales.
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="bg-primary-800 hover:bg-primary-500 text-white py-4 px-5 rounded-lg font-semibold transition duration-300 mt-8"
                    >
                      Solicitar Credito
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <div className="text-center text-primary-800">
          <div className="mx-auto mb-4 p-4 md:p-5 items-center w-28">
          <svg role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="green" d="M13 4.1974q0 .3097-.21677.5265L7.17806 10.329l-1.0529 1.0529q-.21677.2168-.52645.2168-.30968 0-.52645-.2168L4.01935 10.329 1.21677 7.5264Q1 7.3097 1 7t.21677-.5265l1.05291-1.0529q.21677-.2167.52645-.2167.30968 0 .52645.2167l2.27613 2.2839 5.07871-5.0864q.21677-.2168.52645-.2168.30968 0 .52645.2168l1.05291 1.0529Q13 3.8877 13 4.1974z"/></svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">
            SU SOLICITUD FUE ENVIADO CON EXITO
          </h2>
          <p>En las siguientes horas nos estaremos comunicando contigo.</p>
          <button
            onClick={closeModal}
            className="bg-primary-800 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            <Link to={"/"} className="h-full w-full">
              Aceptar
            </Link>
          </button>
        </div>
      </Modal>

      <Modal isOpen={modalIsOpenO} onClose={closeModalEr}>
        <div className="text-center text-primary-800">
          <div className="mx-auto mb-4 p-4 md:p-5 items-center w-28">
           <svg role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="red" d="M13 10.65657q0 .40404-.28283.68686l-1.37374 1.37374Q11.06061 13 10.65657 13t-.68687-.28283L7 9.74747l-2.9697 2.9697Q3.74747 13 3.34343 13q-.40404 0-.68686-.28283l-1.37374-1.37374Q1 11.06061 1 10.65657t.28283-.68687L4.25253 7l-2.9697-2.9697Q1 3.74747 1 3.34343q0-.40404.28283-.68686l1.37374-1.37374Q2.93939 1 3.34343 1t.68687.28283L7 4.25253l2.9697-2.9697Q10.25253 1 10.65657 1q.40404 0 .68686.28283l1.37374 1.37374Q13 2.93939 13 3.34343t-.28283.68687L9.74747 7l2.9697 2.9697Q13 10.25253 13 10.65657z"/></svg>
          </div>
        <h2 className="text-2xl font-bold mb-4">
            Su DNI ya fue registrado
          </h2>
          <p>En las siguientes horas nos estaremos comunicando contigo.</p>
          <button
            onClick={closeModalEr}
            className="bg-primary-800 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            <Link to={"/"} className="h-full w-full">
              Aceptar
            </Link>
          </button>
        </div>
      </Modal>
    </>
  );
}
