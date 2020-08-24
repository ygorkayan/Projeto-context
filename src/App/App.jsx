import React from "react";
import { NumerosProvider } from "./Context/Numeros";

import Placar from "./Components/Placar";
import Soma from "./Components/Soma";
import Multiplicaçao from "./Components/Multiplicaçao";
import Divisao from "./Components/Divisao";

export default (props) => {
  return (
    <NumerosProvider>
      <div className="container">
        <Placar />
        <div className="row border text-center">
          <Soma />
          <Multiplicaçao />
          <Divisao />
        </div>
      </div>
    </NumerosProvider>
  );
};
