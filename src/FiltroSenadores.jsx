import React, { useState, useEffect } from 'react';

const FiltroSenadores = ({ senadores, onFiltrar }) => {
  const [filtros, setFiltros] = useState({
    BLOQUE: [],
    'PARTIDO O ALIANZA': [],
    PROVINCIA: []
  });

  const obtenerOpciones = (categoria) => {
    const opciones = new Set(senadores.map(senador => senador[categoria]));
    return Array.from(opciones);
  };

  const manejarCambioCheckbox = (categoria, valor, checked) => {
    const nuevosFiltros = { ...filtros };
    if (checked) {
      nuevosFiltros[categoria].push(valor);
    } else {
      nuevosFiltros[categoria] = nuevosFiltros[categoria].filter(item => item !== valor);
    }
    setFiltros(nuevosFiltros);
    onFiltrar(nuevosFiltros);
  };

  useEffect(() => {
    // Resetear filtros si los senadores cambian (por ejemplo, al recargar datos)
    setFiltros({
      BLOQUE: [],
      'PARTIDO O ALIANZA': [],
      PROVINCIA: []
    });
  }, [senadores]);

  return (
    <div className="space-y-4">
      {['BLOQUE', 'PARTIDO O ALIANZA', 'PROVINCIA'].map((categoria) => (
        <div key={categoria}>
          <h3 className="font-bold">{categoria}</h3>
          {obtenerOpciones(categoria).map((opcion) => (
            <div key={opcion} className="flex items-center">
              <input
                type="checkbox"
                id={`${categoria}-${opcion}`}
                name={`${categoria}-${opcion}`}
                value={opcion}
                onChange={(e) => manejarCambioCheckbox(categoria, opcion, e.target.checked)}
                className="mr-2"
              />
              <label htmlFor={`${categoria}-${opcion}`}>{opcion}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FiltroSenadores;
