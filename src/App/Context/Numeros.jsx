import React, { createContext, useState } from "react";

export const NumerosContext = createContext();

export function NumerosProvider({ children }) {
  const [getN1, setN1] = useState(0);
  const [getN2, setN2] = useState(0);

  const valores = {
    n1: { getN1, setN1 },
    n2: { getN2, setN2 },
  };
  return (
    <NumerosContext.Provider value={valores}>
      {children}
    </NumerosContext.Provider>
  );
}
