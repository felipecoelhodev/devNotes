import React, { useRef } from "react";
import { useNotas } from "../../contexts/NotasContext.jsx";
import DeleteSVG from "../../assets/img/delete.svg?react";

function ListaDeCategorias() {
  const { categorias, adicionarCategoria, apagarCategoria } = useNotas();
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const valorCategoria = inputRef.current.value;
    if (valorCategoria.trim()) {
      adicionarCategoria(valorCategoria);
      inputRef.current.value = "";
    }
  }

  function handleDelete(categoria) {
    apagarCategoria(categoria);
  }

  return (
    <div className="bg-slate-900/80 rounded-2xl shadow-lg p-6 border border-slate-800 backdrop-blur-sm">
      <h2 className="text-xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
        <span>Categorias</span>
      </h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Nova categoria..."
          className="w-full px-4 py-2.5 rounded-lg border border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-sm bg-slate-900 text-slate-100"
        />
      </form>

      {categorias.length > 0 ? (
        <ul className="space-y-2">
          {categorias.map((categoria) => (
            <li
              key={categoria}
              className="px-4 py-2.5 bg-linear-to-r from-indigo-500/10 to-cyan-500/10 rounded-lg text-sm font-medium text-slate-200 border border-indigo-400/20 hover:border-indigo-300/40 transition-all"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="truncate">{categoria}</span>
                <button
                  type="button"
                  onClick={() => handleDelete(categoria)}
                  className="text-slate-400 hover:text-red-400 transition-colors p-1 rounded-lg hover:bg-red-500/10 cursor-pointer shrink-0"
                  aria-label={`Apagar categoria ${categoria}`}
                >
                  <DeleteSVG className="w-4 h-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-slate-400 text-center py-4">
          Nenhuma categoria criada
        </p>
      )}
    </div>
  );
}

export default ListaDeCategorias;
