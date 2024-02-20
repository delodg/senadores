// Importaciones necesarias
import React, { useState, useEffect } from 'react';
import SenadorCard from './SenadorCard';
import FiltroSenadores from './FiltroSenadores';
import senadoresData from './data/senadores.json'; // Asegúrate de ajustar la ruta según tu estructura de archivos

const SenadoresList = () => {
  const [senadores, setSenadores] = useState([]);
  const [filtro, setFiltro] = useState({ categoria: '', valor: '' });

  useEffect(() => {
    setSenadores(senadoresData.table.rows); // Ajusta esta línea según la estructura de tu JSON
  }, []);

  const onFiltrar = (filtro) => {
    const { categoria, valor } = filtro;
    if (valor === '') {
      setSenadores(senadoresData.table.rows); // Restablece a todos los senadores si el filtro está vacío
    } else {
      const senadoresFiltrados = senadoresData.table.rows.filter((senador) =>
        senador[categoria]?.toUpperCase().includes(valor.toUpperCase())
      );
      setSenadores(senadoresFiltrados);
    }
  };

  return (
    <div>
      <FiltroSenadores onFiltrar={onFiltrar} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {senadores.map((senador) => (
          <SenadorCard key={senador.ID} senador={senador} />
        ))}
      </div>
    </div>
  );
};

export default SenadoresList;
