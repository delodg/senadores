import React, { useState } from 'react';

const FiltroSenadores = ({ senadores, onFiltrar }) => {
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

  // Función para obtener opciones únicas para cada categoría
  const obtenerOpciones = (categoria) => {
    const opciones = new Set(senadores.map(senador => senador[categoria]));
    return Array.from(opciones);
  };

  // Manejar cambios en los checkboxes
  const manejarCambioCheckbox = (categoria, valor) => {
    const nuevosFiltros = { ...filtros };
    nuevosFiltros[categoria] = filtros[categoria].includes(valor)
      ? filtros[categoria].filter(item => item !== valor)
      : [...filtros[categoria], valor];
    setFiltros(nuevosFiltros);
    onFiltrar(nuevosFiltros);
  };

  // Manejar desplegables
  const toggleDesplegable = (categoria) => {
    setDesplegables(prevState => ({ ...prevState, [categoria]: !prevState[categoria] }));
  };

  return (
    <div className="space-y-4">
      {['BLOQUE', 'PARTIDO O ALIANZA', 'PROVINCIA'].map((categoria) => (
        <div key={categoria}>
          <button
            onClick={() => toggleDesplegable(categoria)}
            className="flex justify-between items-center w-full py-2 px-4 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <span>{categoria}</span>
            <i className={`ri-arrow-${desplegables[categoria] ? 'up' : 'down'}-s-line`}></i>
          </button>
          {desplegables[categoria] && (
            <div className="mt-2 pl-4 flex flex-col">
              {obtenerOpciones(categoria).map((opcion) => (
                <label key={opcion} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox mr-2"
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
    </div>
  );
};

export default FiltroSenadores;
