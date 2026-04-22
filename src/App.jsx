import React from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import { NotasProvider } from "./contexts/NotasContext.jsx";
import "./assets/index.css";

function App() {
  return (
    <NotasProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">📝 Ceep</h1>
            <p className="text-gray-600">Organize suas ideias e pensamentos</p>
          </header>

          <div className="flex flex-col lg:flex-row gap-6">
            <aside className="lg:w-80 flex-shrink-0">
              <FormularioCadastro />
            </aside>

            <main className="flex-1 flex flex-col lg:flex-row gap-6">
              <div className="lg:w-64 flex-shrink-0">
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
