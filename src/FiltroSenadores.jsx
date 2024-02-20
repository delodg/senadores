import React, { useState, useEffect } from 'react';

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
  const [opcionesDisponibles, setOpcionesDisponibles] = useState({
    BLOQUE: [],
    'PARTIDO O ALIANZA': [],
    PROVINCIA: []
  });

  // Lógica para actualizar las opciones disponibles basada en senadores filtrados
  useEffect(() => {
    const bloques = new Set(senadores.map(s => s.BLOQUE));
    const alianzas = new Set(senadores.map(s => s['PARTIDO O ALIANZA']));
    const provincias = new Set(senadores.map(s => s.PROVINCIA));

    setOpcionesDisponibles({
      BLOQUE: Array.from(bloques),
      'PARTIDO O ALIANZA': Array.from(alianzas),
      PROVINCIA: Array.from(provincias)
    });
  }, [senadores]);

  const manejarCambioCheckbox = (categoria, valor) => {
    const actualizado = filtros[categoria].includes(valor)
      ? filtros[categoria].filter(v => v !== valor)
      : [...filtros[categoria], valor];
    
    const nuevosFiltros = { ...filtros, [categoria]: actualizado };
    setFiltros(nuevosFiltros);
    
    // Filtrar senadores basado en nuevos filtros y notificar al componente padre
    onFiltrar(nuevosFiltros);
  };

  const toggleDesplegable = (categoria) => {
    setDesplegables(prevState => ({ ...prevState, [categoria]: !prevState[categoria] }));
  };

  // Función para limpiar todos los filtros
  const limpiarFiltros = () => {
    setFiltros({
      BLOQUE: [],
      'PARTIDO O ALIANZA': [],
      PROVINCIA: []
    });
    // Restablecer a todos los senadores
    onFiltrar({
      BLOQUE: [],
      'PARTIDO O ALIANZA': [],
      PROVINCIA: []
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      {Object.keys(opcionesDisponibles).map((categoria) => (
        <div key={categoria} className="relative">
          <button
            onClick={() => toggleDesplegable(categoria)}
            className="w-full py-2 px-4 bg-gray-200 rounded-md hover:bg-gray-300 flex justify-between items-center"
          >
            {categoria}
            <i className={`ri-arrow-${desplegables[categoria] ? 'up' : 'down'}-s-line`}></i>
          </button>
          {desplegables[categoria] && (
            <div className="absolute z-10 bg-white border rounded shadow-lg mt-1 w-full overflow-auto">
              {opcionesDisponibles[categoria].map((opcion) => (
                <div key={opcion} className="p-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filtros[categoria].includes(opcion)}
                      onChange={() => manejarCambioCheckbox(categoria, opcion)}
                      className="form-checkbox mr-2"
                    />
                    {opcion}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <button
        onClick={limpiarFiltros}
        className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-700 mt-4 self-start"
      >
        Limpiar Filtros
      </button>
    </div>
  );
};

export default FiltroSenadores;
