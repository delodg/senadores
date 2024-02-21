import React, { useState, useEffect } from 'react';

const FiltroSenadores = ({ senadores, onFiltrar }) => {
  const [filtros, setFiltros] = useState({
    BLOQUE: [],
    'PARTIDO O ALIANZA': [],
    PROVINCIA: []
  });
  const [desplegableActivo, setDesplegableActivo] = useState(null);

  // Actualizar las opciones disponibles basadas en los senadores filtrados
  const actualizarOpcionesDisponibles = () => {
    const bloques = new Set();
    const alianzas = new Set();
    const provincias = new Set();

    senadores.forEach(senador => {
      bloques.add(senador.BLOQUE);
      alianzas.add(senador['PARTIDO O ALIANZA']);
      provincias.add(senador.PROVINCIA);
    });

    return {
      BLOQUE: Array.from(bloques),
      'PARTIDO O ALIANZA': Array.from(alianzas),
      PROVINCIA: Array.from(provincias)
    };
  };

  const opcionesDisponibles = actualizarOpcionesDisponibles();

  const manejarCambioCheckbox = (categoria, valor) => {
    const nuevosFiltros = { ...filtros };
    if (nuevosFiltros[categoria].includes(valor)) {
      nuevosFiltros[categoria] = nuevosFiltros[categoria].filter(v => v !== valor);
    } else {
      nuevosFiltros[categoria].push(valor);
    }
    setFiltros(nuevosFiltros);
    onFiltrar(nuevosFiltros);
  };

  const toggleDesplegable = (categoria) => {
    setDesplegableActivo(desplegableActivo === categoria ? null : categoria);
  };

  const eliminarFiltro = (categoria, valor) => {
    const nuevosFiltros = { ...filtros, [categoria]: filtros[categoria].filter(v => v !== valor) };
    setFiltros(nuevosFiltros);
    onFiltrar(nuevosFiltros);
  };

  return (
    <div className="flex flex-col space-y-4">
      {Object.keys(opcionesDisponibles).map(categoria => (
        <div key={categoria} className="relative">
          <button
            onClick={() => toggleDesplegable(categoria)}
            className="w-full py-2 px-4 bg-white rounded-md hover:bg-white flex justify-between items-center"
          >
            {categoria}
            <i className={`ri-arrow-${desplegableActivo === categoria ? 'up' : 'down'}-s-line`}></i>
          </button>
          {desplegableActivo === categoria && (
            <div className="absolute z-10 bg-white border rounded shadow-lg mt-1 w-full max-h-60 overflow-auto">
              {opcionesDisponibles[categoria].map(opcion => (
                <label key={opcion} className="flex items-center p-2">
                  <input
                    type="checkbox"
                    checked={filtros[categoria].includes(opcion)}
                    onChange={() => manejarCambioCheckbox(categoria, opcion)}
                    className="form-checkbox mr-2"
                  />
                  {opcion}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="flex flex-wrap gap-2">
        {Object.keys(filtros).flatMap(categoria =>
          filtros[categoria].map(valor => (
            <div key={`${categoria}-${valor}`} className="flex items-center border border-blue-700 text-blue-700 px-4 py-1 rounded-full text-sm">
              {valor}
              <button onClick={() => eliminarFiltro(categoria, valor)} className="ml-2 text-sm">
                <i className="ri-close-line"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FiltroSenadores;
