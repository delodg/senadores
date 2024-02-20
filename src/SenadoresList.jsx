import React, { useState } from 'react';
import SenadorCard from './SenadorCard';
import FiltroSenadores from './FiltroSenadores';
import senadoresData from './data/senadores.json'; // Ajusta la ruta según tu estructura de carpetas

const SenadoresList = () => {
  const [senadoresFiltrados, setSenadoresFiltrados] = useState(senadoresData.table.rows);

  const handleFiltrar = (filtros) => {
    const filtrados = senadoresData.table.rows.filter(senador => {
      return Object.keys(filtros).every(categoria => {
        if (filtros[categoria].length === 0) return true; // Si no hay filtros en la categoría, incluir todos
        return filtros[categoria].includes(senador[categoria]);
      });
    });
    setSenadoresFiltrados(filtrados);
  };

  return (
    <div>
      <FiltroSenadores senadores={senadoresData.table.rows} onFiltrar={handleFiltrar} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {senadoresFiltrados.map(senador => (
          <SenadorCard key={senador.ID} senador={senador} />
        ))}
      </div>
    </div>
  );
};

export default SenadoresList;
