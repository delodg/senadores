// Importaciones necesarias de React y el componente SenadorCard
import React from 'react';
import SenadorCard from './SenadorCard.jsx'; // Asegúrate de que la ruta del import es correcta
import senadoresData from './data/senadores.json'; // Importa los datos de los senadores

// Componente contenedor que renderiza la lista de senadores
const SenadoresList = () => {
  return (
    <div style={styles.listContainer}>
      {senadoresData.table.rows.map(senador => (
        <SenadorCard key={senador.ID} senador={senador} />
      ))}
    </div>
  );
};

// Estilos para el contenedor de la lista, usando Flexbox para un layout responsivo
const styles = {
  listContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '20px', // Espacio entre tarjetas
    padding: '20px',
  },
};

export default SenadoresList;
