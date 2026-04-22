import React, { createContext, useContext, useState } from "react";

const NotasContext = createContext();

export function NotasProvider({ children }) {
  const [notas, setNotas] = useState([]);
  const [categorias, setCategorias] = useState([]);

  function adicionarNota(titulo, texto, categoria) {
    const novaNota = {
      titulo,
      texto,
      categoria,
    };
    setNotas([...notas, novaNota]);
  }

  function apagarNota(indice) {
    setNotas(notas.filter((_, index) => index !== indice));
  }

  function adicionarCategoria(novaCategoria) {
    setCategorias([...categorias, novaCategoria]);
  }

  return (
    <NotasContext.Provider
      value={{
        notas,
        categorias,
        adicionarNota,
        apagarNota,
        adicionarCategoria,
      }}
    >
      {children}
    </NotasContext.Provider>
  );
}

export function useNotas() {
  const context = useContext(NotasContext);
  if (!context) {
    throw new Error("useNotas deve ser usado dentro de um NotasProvider");
  }
  return context;
}
