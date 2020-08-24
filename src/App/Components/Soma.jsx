import React, { useContext } from "react";
import { NumerosContext } from "../Context/Numeros";

export default (props) => {
  const { n1, n2 } = useContext(NumerosContext);
  const N1 = n1.getN1;
  const N2 = n2.getN2;
  return (
    <div className="col-4 border-right">
      <h1>Soma</h1>
      <p>{`${N1} + ${N2} = ${N1 + N2}`}</p>
    </div>
  );
};
