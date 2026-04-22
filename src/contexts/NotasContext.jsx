import React, { createContext, useContext, useEffect, useState } from "react";

const NotasContext = createContext();
const STORAGE_KEY = "devnotes:estado";

export function NotasProvider({ children }) {
  const [notas, setNotas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [chek, setChek] = useState(false);

  useEffect(() => {
    const salvo = localStorage.getItem(STORAGE_KEY);
    if (!salvo) {
      setChek(true);
      return;
    }

    try {
      const estado = JSON.parse(salvo);
      const notasNormalizadas = Array.isArray(estado.notas)
        ? estado.notas.map((nota) => ({
            id: nota.id || crypto.randomUUID(),
            titulo: nota.titulo || "",
            texto: nota.texto || "",
            categoria: nota.categoria || "Sem Categoria",
            criadaEm: nota.criadaEm || new Date().toISOString(),
          }))
        : [];
      setNotas(notasNormalizadas);
      setCategorias(Array.isArray(estado.categorias) ? estado.categorias : []);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setChek(true);
    }
  }, []);

  useEffect(() => {
    if (!chek) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ notas, categorias }));
  }, [notas, categorias, chek]);

  function adicionarNota(titulo, texto, categoria) {
    const tituloNormalizado = titulo.trim();
    const textoNormalizado = texto.trim();
    if (!textoNormalizado) return;

    const novaNota = {
      id: crypto.randomUUID(),
      titulo: tituloNormalizado,
      texto: textoNormalizado,
      categoria: categoria?.trim() || "Sem Categoria",
      criadaEm: new Date().toISOString(),
    };
    setNotas((estadoAnterior) => [...estadoAnterior, novaNota]);
  }

  function apagarNota(idNota) {
    setNotas((estadoAnterior) =>
      estadoAnterior.filter((nota) => nota.id !== idNota),
    );
  }

  function adicionarCategoria(novaCategoria) {
    const nomeCategoria = novaCategoria.trim();
    if (!nomeCategoria) return;

    setCategorias((estadoAnterior) => {
      const existe = estadoAnterior.some(
        (categoria) => categoria.toLowerCase() === nomeCategoria.toLowerCase(),
      );
      return existe ? estadoAnterior : [...estadoAnterior, nomeCategoria];
    });
  }

  function apagarCategoria(categoriaRemovida) {
    setCategorias((estadoAnterior) =>
      estadoAnterior.filter((categoria) => categoria !== categoriaRemovida),
    );

    setNotas((estadoAnterior) =>
      estadoAnterior.map((nota) =>
        nota.categoria === categoriaRemovida
          ? { ...nota, categoria: "Sem Categoria" }
          : nota,
      ),
    );
  }

  return (
    <NotasContext.Provider
      value={{
        notas,
        categorias,
        adicionarNota,
        apagarNota,
        adicionarCategoria,
        apagarCategoria,
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
