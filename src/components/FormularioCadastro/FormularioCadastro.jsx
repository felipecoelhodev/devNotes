import React, { useRef } from "react";
import { useNotas } from "../../contexts/NotasContext.jsx";

function FormularioCadastro() {
  const { categorias, adicionarNota } = useNotas();
  const tituloRef = useRef(null);
  const textoRef = useRef(null);
  const categoriaRef = useRef(null);

  function criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();

    const titulo = tituloRef.current.value;
    const texto = textoRef.current.value;
    const categoria = categoriaRef.current.value;
    if (!texto.trim()) return;

    adicionarNota(titulo, texto, categoria);

    // Limpar os campos após criar a nota
    tituloRef.current.value = "";
    textoRef.current.value = "";
    categoriaRef.current.value = "Sem Categoria";
  }

  return (
    <div className="bg-slate-900/80 rounded-2xl shadow-lg p-6 sticky top-8 border border-slate-800 backdrop-blur-sm">
      <h2 className="text-xl font-semibold text-slate-100 mb-4">Nova Nota</h2>

      <form onSubmit={criarNota} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Categoria
          </label>
          <select
            ref={categoriaRef}
            defaultValue="Sem Categoria"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none bg-slate-900 text-slate-100"
          >
            <option>Sem Categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria}>{categoria}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Título
          </label>
          <input
            ref={tituloRef}
            type="text"
            placeholder="Digite o título..."
            className="w-full px-4 py-2.5 rounded-lg border border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none bg-slate-900 text-slate-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Conteúdo
          </label>
          <textarea
            ref={textoRef}
            rows={12}
            required
            placeholder="Escreva sua nota..."
            className="w-full px-4 py-2.5 rounded-lg border border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none resize-none bg-slate-900 text-slate-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-linear-to-r from-indigo-600 to-cyan-600 text-white font-semibold py-3 rounded-lg hover:from-indigo-700 hover:to-cyan-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Criar Nota
        </button>
      </form>
    </div>
  );
}

export default FormularioCadastro;
