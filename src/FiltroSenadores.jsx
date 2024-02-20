import React, { useState, useEffect } from 'react';

const FiltroSenadores = ({ senadores, onFiltrar, senadoresFiltrados }) => {
  const [filtros, setFiltros] = useState({
    BLOQUE: [],
    'PARTIDO O ALIANZA': [],
    PROVINCIA: []
  });
  const [desplegables, setDesplegables] = useState({
    BLOQUE: false,
    'PARTIDO O ALIANZA': false,
    PROVINCIA: false
  });

  // Opciones disponibles inicialmente basadas en todos los senadores
  const opcionesIniciales = {
    BLOQUE: [...new Set(senadores.map(senador => senador.BLOQUE))],
    'PARTIDO O ALIANZA': [...new Set(senadores.map(senador => senador['PARTIDO O ALIANZA']))],
    PROVINCIA: [...new Set(senadores.map(senador => senador.PROVINCIA))]
  };

  // Estado para manejar las opciones de filtro dinámicamente
  const [opcionesFiltro, setOpcionesFiltro] = useState(opcionesIniciales);

  // Actualizar opciones de filtro basadas en los senadores filtrados
  useEffect(() => {
    setOpcionesFiltro({
      BLOQUE: [...new Set(senadoresFiltrados.map(senador => senador.BLOQUE))],
      'PARTIDO O ALIANZA': [...new Set(senadoresFiltrados.map(senador => senador['PARTIDO O ALIANZA']))],
      PROVINCIA: [...new Set(senadoresFiltrados.map(senador => senador.PROVINCIA))]
    });
  }, [senadoresFiltrados]);

  const manejarCambioCheckbox = (categoria, valor) => {
    const nuevosFiltros = { ...filtros };
    nuevosFiltros[categoria] = filtros[categoria].includes(valor) ? filtros[categoria].filter(item => item !== valor) : [...filtros[categoria], valor];
    setFiltros(nuevosFiltros);
    onFiltrar(nuevosFiltros);
  };

  const toggleDesplegable = (categoria) => {
    setDesplegables(prevState => ({ ...prevState, [categoria]: !prevState[categoria] }));
  };

  const limpiarFiltros = () => {
    setFiltros({
      BLOQUE: [],
      'PARTIDO O ALIANZA': [],
      PROVINCIA: []
    });
    onFiltrar({
      BLOQUE: [],
      'PARTIDO O ALIANZA': [],
      PROVINCIA: []
    });
  };

  return (
    <div className="flex flex-col space-y-2">
      {Object.keys(opcionesFiltro).map((categoria) => (
        <div key={categoria} className="relative">
          <button
            onClick={() => toggleDesplegable(categoria)}
            className="flex justify-between items-center w-full py-2 px-4 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <span>{categoria}</span>
            <i className={`ri-arrow-${desplegables[categoria] ? 'up' : 'down'}-s-line`}></i>
          </button>
          {desplegables[categoria] && (
            <div className="absolute z-10 bg-white border rounded shadow-lg mt-1 w-full max-h-60 overflow-auto">
              {opcionesFiltro[categoria].map((opcion) => (
                <label key={opcion} className="flex items-center p-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filtros[categoria].includes(opcion)}
                    onChange={() => manejarCambioCheckbox(categoria, opcion)}
                  />
                  {opcion}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
      <button
        onClick={limpiarFiltros}
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Limpiar Filtros
      </button>
    </div>
  );
};

export default FiltroSenadores;
