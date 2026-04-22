import React from "react";
import { useNotas } from "../../contexts/NotasContext.jsx";
import CardNota from "../CardNota";

function ListaDeNotas() {
  const { notas, apagarNota } = useNotas();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Suas Notas</h2>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {notas.length} {notas.length === 1 ? "nota" : "notas"}
        </span>
      </div>

      {notas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {notas.map((nota, index) => (
            <CardNota
              key={index}
              indice={index}
              apagarNota={apagarNota}
              titulo={nota.titulo}
              texto={nota.texto}
              categoria={nota.categoria}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Nenhuma nota ainda
          </h3>
          <p className="text-gray-500">
            Comece criando sua primeira nota ao lado!
          </p>
        </div>
      )}
    </div>
  );
}

export default ListaDeNotas;
