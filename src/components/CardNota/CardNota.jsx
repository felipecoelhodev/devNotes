import React from "react";
import DeleteSVG from "../../assets/img/delete.svg?react";

function CardNota(props) {
  function apagar() {
    props.apagarNota(props.id);
  }

  const cores = {
    "Sem Categoria": "bg-slate-800/70 text-slate-300 border-slate-700",
    default: "bg-indigo-500/15 text-indigo-300 border-indigo-400/30",
  };

  const corCategoria = cores[props.categoria] || cores["default"];

  return (
    <div className="group bg-slate-900/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-800 hover:border-indigo-400/40 backdrop-blur-sm">
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-slate-100 flex-1 pr-3">
            {props.titulo || "Sem título"}
          </h3>
          <div className="flex items-center gap-1">
            <button
              onClick={apagar}
              className="text-slate-400 hover:text-red-400 transition-colors p-1 rounded-lg hover:bg-red-500/10 cursor-pointer"
              aria-label="Apagar nota"
            >
              <DeleteSVG className="w-5 h-5" />
            </button>
          </div>
        </div>

        {props.categoria && (
          <span
            className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 border ${corCategoria}`}
          >
            {props.categoria}
          </span>
        )}

        <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
          {props.texto}
        </p>
      </div>
    </div>
  );
}

export default CardNota;
