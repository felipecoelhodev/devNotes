import React, { useMemo, useState } from "react";
import { useNotas } from "../../contexts/NotasContext.jsx";
import CardNota from "../CardNota";

function ListaDeNotas() {
  const { notas, apagarNota, categorias } = useNotas();
  const [busca, setBusca] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");
  const [ordenacao, setOrdenacao] = useState("recentes");

  const notasFiltradas = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    const base = notas.filter((nota) => {
      const combinaCategoria =
        filtroCategoria === "Todas" || nota.categoria === filtroCategoria;
      const combinaBusca =
        !termo ||
        nota.titulo.toLowerCase().includes(termo) ||
        nota.texto.toLowerCase().includes(termo);
      return combinaCategoria && combinaBusca;
    });

    base.sort((notaA, notaB) => {
      if (ordenacao === "titulo")
        return notaA.titulo.localeCompare(notaB.titulo);

      const dataA = new Date(notaA.criadaEm).getTime();
      const dataB = new Date(notaB.criadaEm).getTime();
      return ordenacao === "antigas" ? dataA - dataB : dataB - dataA;
    });

    return base;
  }, [notas, busca, filtroCategoria, ordenacao]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-100">Suas Notas</h2>
        <span className="text-sm text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
          {notas.length} {notas.length === 1 ? "nota" : "notas"}
        </span>
      </div>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          type="text"
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
          placeholder="Buscar por titulo ou conteudo..."
          className="w-full px-4 py-2.5 rounded-lg border border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-sm bg-slate-900 text-slate-100"
        />
        <select
          value={filtroCategoria}
          onChange={(evento) => setFiltroCategoria(evento.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-sm bg-slate-900 text-slate-100"
        >
          <option>Todas</option>
          <option>Sem Categoria</option>
          {categorias.map((categoria) => (
            <option key={categoria}>{categoria}</option>
          ))}
        </select>
        <select
          value={ordenacao}
          onChange={(evento) => setOrdenacao(evento.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-sm bg-slate-900 text-slate-100"
        >
          <option value="recentes">Mais recentes</option>
          <option value="antigas">Mais antigas</option>
          <option value="titulo">Titulo (A-Z)</option>
        </select>
      </div>

      {notasFiltradas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {notasFiltradas.map((nota) => (
            <CardNota
              key={nota.id}
              id={nota.id}
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
          <h3 className="text-xl font-semibold text-slate-200 mb-2">
            Nenhuma nota encontrada
          </h3>
          <p className="text-slate-400">
            Tente ajustar os filtros ou crie uma nova nota ao lado.
          </p>
        </div>
      )}
    </div>
  );
}

export default ListaDeNotas;
