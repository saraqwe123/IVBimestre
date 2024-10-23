// TemaContext.js
import React, { createContext, useState } from 'react';

// Criação do contexto para o tema
export const TemaContext = createContext();

//criação do componente que irá prover o contexto
export function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro');

  //verificando qual o tema para poder altera-lo
  const alternarTema = () => {
    setTema(tema  === 'claro' ? 'escuro' : 'claro');
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}
