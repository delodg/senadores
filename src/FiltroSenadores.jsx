import React, { useState } from 'react';

const FiltroSenadores = ({ onFiltrar }) => {
  const [filtro, setFiltro] = useState({
    categoria: 'BLOQUE', // O 'PARTIDO O ALIANZA', 'PROVINCIA'
    valor: ''
  });

  const categorias = [
    { label: 'Bloque', value: 'BLOQUE' },
    { label: 'Partido o Alianza', value: 'PARTIDO O ALIANZA' },
    { label: 'Provincia', value: 'PROVINCIA' }
  ];

  const manejarCambioCategoria = (e) => {
    setFiltro({ ...filtro, categoria: e.target.value });
  };

  const manejarCambioValor = (e) => {
    setFiltro({ ...filtro, valor: e.target.value });
  };

  const manejarFiltrado = () => {
    onFiltrar(filtro);
  };

  return (
    <div className="flex space-x-4 mb-4">
      <select
        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        value={filtro.categoria}
        onChange={manejarCambioCategoria}
      >
        {categorias.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Filtrar por..."
        value={filtro.valor}
        onChange={manejarCambioValor}
      />
      <button
        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={manejarFiltrado}
      >
        Filtrar
      </button>
    </div>
  );
};

export default FiltroSenadores;
