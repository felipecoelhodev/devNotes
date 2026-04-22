import React from "react";
import DeleteSVG from "../../assets/img/delete.svg?react";

function CardNota(props) {
  function apagar() {
    props.apagarNota(props.indice);
  }

  const cores = {
    "Sem Categoria": "bg-gray-100 text-gray-700 border-gray-200",
    default: "bg-indigo-100 text-indigo-700 border-indigo-200",
  };

  const corCategoria = cores[props.categoria] || cores["default"];

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-200">
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800 flex-1 pr-3">
            {props.titulo || "Sem título"}
          </h3>
          <button
            onClick={apagar}
            className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-lg hover:bg-red-50 cursor-pointer"
            aria-label="Apagar nota"
          >
            <DeleteSVG className="w-5 h-5" />
          </button>
        </div>

        {props.categoria && (
          <span
            className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 border ${corCategoria}`}
          >
            {props.categoria}
          </span>
        )}

        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
          {props.texto}
        </p>
      </div>
    </div>
  );
}

export default CardNota;
