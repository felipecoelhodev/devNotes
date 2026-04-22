import React, { useRef } from "react";
import { useNotas } from "../../contexts/NotasContext.jsx";

function ListaDeCategorias() {
  const { categorias, adicionarCategoria } = useNotas();
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const valorCategoria = inputRef.current.value;
    if (valorCategoria.trim()) {
      adicionarCategoria(valorCategoria);
      inputRef.current.value = "";
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <span>🏷️</span>
        <span>Categorias</span>
      </h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Nova categoria..."
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-sm"
        />
      </form>

      {categorias.length > 0 ? (
        <ul className="space-y-2">
          {categorias.map((categoria, index) => (
            <li
              key={index}
              className="px-4 py-2.5 bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-lg text-sm font-medium text-gray-700 border border-indigo-100 hover:border-indigo-300 transition-all cursor-default"
            >
              {categoria}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500 text-center py-4">
          Nenhuma categoria criada
        </p>
      )}
    </div>
  );
}

export default ListaDeCategorias;
