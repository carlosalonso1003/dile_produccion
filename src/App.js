import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagaDiario from "./components/creditos/PagaDiario";
import MasInclusivo from "./components/creditos/MasInclusivo";
import ScrollTop from "./components/common/ScrollTop";
import Rapidin from "./components/creditos/Rapidin";
import CreditoDigital from "./components/creditos/CreditoDigital";
import CuentaMovil from "./components/creditos/CuentaMovil";
import CuentaEspecial from "./components/creditos/CuentaEspecial";
import Home from "./components/home/Home";

import Nosotros from "./components/home/Nosotros";
import Agencias from "./components/agencias/Agencias";
import FormPagoDiario from "./components/home/FormPagoDiario";
import CustomPage from "./components/common/CustomPage";
import FormMasInclusivo from "./components/home/FormMasInclusivo";
import FormDigital from "./components/home/FormDigital";
import FormRapidin from "./components/home/FormRapidin";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import FormGeneral from "./components/home/FormGeneral";
import MoldeFormularioAhorro from "./components/home/MoldeFormularioAhorro";
import FormAhorroGeneral from "./components/home/FormAhorroGeneral";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <>
          <ScrollTop />

          <Routes>
            <Route
              exact
              path="/"
              element={<CustomPage component={<Home />} />}
            />
            <Route
              exact
              path="/credito-pago-diario"
              element={<CustomPage component={<PagaDiario />} />}
            />
            <Route
              exact
              path="/credito-mas-inclusivo"
              element={<CustomPage component={<MasInclusivo />} />}
            />
            <Route
              exact
              path="/credito-rapidin"
              element={<CustomPage component={<Rapidin />} />}
            />
            <Route
              exact
              path="/credito-digital"
              element={<CustomPage component={<CreditoDigital />} />}
            />
            <Route
              exact
              path="/cuenta-movil"
              element={<CustomPage component={<CuentaMovil />} />}
            />
            <Route
              exact
              path="/cuenta-especial"
              element={<CustomPage component={<CuentaEspecial />} />}
            />
            <Route exact path="/solicitar/credito" element={<FormGeneral />} />
            <Route
              exact
              path="/solicitar/pago-diario"
              element={<FormPagoDiario />}
            />
            <Route
              exact
              path="/solicitar/mas-inclusivo"
              element={<FormMasInclusivo />}
            />
            <Route exact path="/solicitar/rapidin" element={<FormRapidin />} />
            <Route exact path="/solicitar/digital" element={<FormDigital />} />
            <Route
              exact
              path="/agencias"
              element={<CustomPage component={<Agencias />} />}
            />
            <Route
              exact
              path="/nuestra-historia/nosotros"
              element={<CustomPage component={<Nosotros />} />}
            />
            <Route
              exact
              path="/solicita/ahorro"
              element={<FormAhorroGeneral />}
            />
            <Route
              path="*"
              element={
                <div>
                  <p>Error 404</p>
                </div>
              }
            />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
