import { useEffect } from "react";
import MisionAndVision from "./MisioAndVision";
import Valores from "./Valores";
import MoldeFuncionario from "./MoldeFuncionario";
import MoldeFuncionario1 from "./MoldeFuncionario1";

export default function Nosotros() {
  useEffect(() => {
    document.title = `DILE Nosotros`;
  }, []);
  return (
    <>
      <div className="relative">
        <img
          className={`pagadiario-container`}
          src={`${process.env.PUBLIC_URL}${"/images/Nosotros_21.png"}`}
        />
        <div className="absolute w-full h-full top-0 ">
          <div className="w-full h-full l mx-auto max-w-7xl grid content-center px-16">
            <h2 className="my-auto text-[24px] md:text-[32px] lg:text-[64px] font-bold text-primary-50">
              {"NOSOTROS"}
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full max-w-7xl mx-auto px-10 my-16">

        <h1 className="font-bold text-center text-[28px] md:text-[48px] text-primary-800 mb-8">
           NUESTRA HISTORIA
        </h1>
        <div className="mb-16">
            <div className="flex flex-col lg:flex-row">
              
              <div className="w-full lg:w-6/12  p-8 py-28 items-center">
                <p className="font-light text-justify">
                En el año 2007 un grupo de profesionales, empresarios y docentes de la Universidad Nacional 
                de San Antonio Abad del Cusco, movidos por el deseo genuino de ayudar e incluir financieramente 
                a las personas con menores recursos, deciden asociarse y crear una entidad financiera.</p>
                <br />
                <p className="font-light text-justify">
                Es así que el 18 de abril del 2011, nace legalmente la Cooperativa de Ahorro y Crédito DILE. 
                Una entidad que hace microfinanzas de una manera honesta, inclusiva y humana y que ha generado progreso en 
                más de 25 000 familias, siendo a la fecha la Cooperativa de Ahorro y Crédito con mayor número de socios en 
                toda la región del Cusco.</p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img
                  className="w-full shadow-2xl"
                  src={`${process.env.PUBLIC_URL}/images/historia.png`}
                  alt="proposito"
                />
              </div>
            </div>
          </div>

          <h1 className="font-bold text-center text-[28px] md:text-[48px]  text-primary-800 mb-8">
            FUNCIONARIOS PRINCIPALES
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-8  content-between justify-between">
            <MoldeFuncionario
                  imgPerfil={"/images/funcionario-gerente.jpg"}
                  name={"MAG. ANDRÉ ALONSO MORALES CHIRINOS"}
                  title={"GERENTE GENERAL"}
                  descripcion={"Ingeniero Industrial con Maestría en Finanzas de ESADE (España) con 18 años de experiencia en el Sistema Financiero. Anteriormente ocupo cargos gerenciales en Compartamos Financiera. Con estudios de Postgrado en dos de las mejores y más prestigiosas instituciones educativas globales (MIT en Usa y ESADE de España) así como ESAN en Perú. Especialización en Dirección Financiera, Fintech y Data Science. Tiene 4 años de trabajo en la Cooperativa Dile."}
            />
            <MoldeFuncionario1
                  imgPerfil={"/images/funcionario-contador.jpg"}
                  name={"C.P.C KAREN TORVISCO ZEGARRA"}
                  title={"CONTADOR GENERAL"}
                  descripcion={"Contador Público por la Universidad Tecnológica de los Andes – UTEA, estudios de Maestría en Auditoría por la Universidad Nacional San Antonio Abad del Cusco – UNSAAC; cuenta con 6 años de experiencia profesional en contabilidad de cooperativas con especialización en finanzas (ZEGEL IPAE) y certificaciones en Auditoría tributaria preventiva y fiscalización tributaria (UNIVERSIDAD CATOLICA SAN PABLO), Contabilidad de Cooperativas (FENACREP), Prevención de lavado de activos y financiamiento del terrorismo (UNIVERSIDAD CONTINENTAL). Tiene 6 años de trabajo en la Cooperativa Dile."}
                 
            />
            <MoldeFuncionario
                  imgPerfil={"/images/funcionario-auditoria.jpg"}
                  name={"MAG. ANA MILAGROS JUAREZ MAMANI"}
                  title={"AUDITORA INTERNA"}
                  descripcion={"Magister en Auditoria emitido por la Universidad San Antonio de Abad del Cusco titulada como Contadora Púbica en la Universidad Católica Santa María de Arequipa. Tiene 10 años de experiencia en entidades financieras (cooperativas). A la fecha cuenta con Especialización en Gestión de Riesgos, Banca y Finanzas: Estrategias de Modelamiento emitido por ESAN lo que permite desarrollar sus actividades de control reportando al Consejo de Vigilancia de la Cooperativa. Tiene 5 años de trabajo en la Cooperativa Dile."}
                  
            />
            <MoldeFuncionario1
                  imgPerfil={"/images/funcionario-negocios.jpg"}
                  name={"MBA. CESAR EDUARDO BUSTAMANTE BACA"}
                  title={"NEGOCIOS"}
                  descripcion={"Licenciado en administración, Administración y gestión de empresas Universidad Nacional San Antonio Abad del Cusco Master of Business Administration - MBA, Administración y gestión de empresas, general · CENTRUM PUCP, con Especialización en cobranzas., Banca y servicios financieros, Universidad Nacional Mayor de San Marcos, Diplomatura, Gestión de recursos humanos Universidad Ricardo Palma. Tiene 5 años de trabajo en la Cooperativa Dile."}
                  
            />
            <MoldeFuncionario
                  imgPerfil={"/images/funcionario-presidente.jpg"}
                  name={"C.P.C ARNOLD MIKHAIL ENRIQUEZ CHACON"}
                  title={"PRESIDENTE DEL CONSEJO DE ADMINISTRACIÓN"}
                  descripcion={"Contador Publico por la Universidad Nacional de San Antonio Abad del Cusco – UNSAAC, Asesor tributario empresarial, propietario de estudio contable, miembro del staff en BORCON INVERSIONES & CONSULTING GROUP SAC, ex funcionario en la Superintendencia Nacional de Aduanas y de la Administración Tributaria – SUNAT. "}
                  
            />
            </div>


          <h1 className="font-bold text-center text-[28px] md:text-[48px] text-primary-800 mb-8">
           NUESTRO PROPOSITO
          </h1>
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 flex items-center justify-center">
                <img
                  className="w-full shadow-2xl"
                  src={`${process.env.PUBLIC_URL}/images/dile_somos.jpeg`}
                  alt="proposito"
                />
              </div>
              <div className="w-full lg:w-6/12  p-4">
                <p className="font-light text-justify">
                  El propósito de la cooperativa de ahorro y crédito DILE es
                  proporcionar a sus miembros una variedad de servicios
                  financieros orientados a satisfacer sus necesidades de ahorro,
                  inversión y financiamiento, mientras se rige por los
                  principios cooperativos.
                </p>
                <br />
                <ul className="font-light text-justify list-disc ml-8">
                  <li>Fomentar el ahorro.</li>
                  <li>Proporcionar acceso a crédito.</li>
                  <li>Promover la equidad y la inclusión financiera.</li>
                  <li>Operar de manera democrática.</li>
                  <li>Servir a la comunidad.</li>
                  <li>Ofrecer educación financiera.</li>
                </ul>
                <br />
                <p className="font-light text-justify">
                  Es por ello que la cooperativa de ahorro y crédito DILE cumple
                  en servir a sus miembros al promover el ahorro, proporcionar
                  acceso a créditos asequibles y fomentar la inclusión
                  financiera, todo mientras opera de manera democrática y sirve
                  a la comunidad en general.
                </p>
              </div>
            </div>
          </div>

          <MisionAndVision />

          <Valores />
        </div>
      </div>
    </>
  );
}
