import React, { useContext } from "react";
import { NumerosContext } from "../Context/Numeros";

export default (props) => {
  const { n1, n2 } = useContext(NumerosContext);

  return (
    <form>
      <div className="row text-center">
        <div className="form-group col-6">
          <label htmlFor="numero1">Numero1 </label>
          <input
            type="number"
            className="form-control"
            id="numero1"
            value={n1.getN1}
            onChange={(v) => n1.setN1(Number(v.target.value))}
          />
        </div>
        <div className="form-group col-6">
          <label htmlFor="numero1">Numero2 </label>
          <input
            type="number"
            className="form-control"
            id="numero1"
            value={n2.getN2}
            onChange={(v) => n2.setN2(Number(v.target.value))}
          />
        </div>
      </div>
    </form>
  );
};
