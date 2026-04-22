import React from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import { NotasProvider } from "./contexts/NotasContext.jsx";
import "./assets/index.css";

function App() {
  return (
    <NotasProvider>
      <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-slate-100 mb-2">DevNotes</h1>
            <p className="text-slate-300">Organize suas ideias com foco.</p>
          </header>

          <div className="flex flex-col lg:flex-row gap-6">
            <aside className="lg:w-80 shrink-0">
              <FormularioCadastro />
            </aside>

            <main className="flex-1 flex flex-col lg:flex-row gap-6">
              <div className="lg:w-64 shrink-0">
                <ListaDeCategorias />
              </div>
              <div className="flex-1">
                <ListaDeNotas />
              </div>
            </main>
          </div>
        </div>
      </div>
    </NotasProvider>
  );
}

export default App;
