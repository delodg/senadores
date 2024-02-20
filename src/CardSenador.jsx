import React from 'react';
import senadoresData from './data/senadores.json';

const SenadorCard = ({ senador }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 flex flex-col justify-center items-center">
      <img
        className="w-24 h-24"
        src={senador.FOTO}
        alt={`${senador.NOMBRE} ${senador.APELLIDO}`}
      />
      <div className="px-6 py-4 flex flex-col justify-center items-center text-left">
        <div className="font-bold text-xl mb-2">{`${senador.NOMBRE} ${senador.APELLIDO}`}</div>
        <p className="text-gray-700 text-base flex flex-col justify-center items-start">
          Bloque: {senador.BLOQUE}
          <br />
          Partido/Alianza: {senador['PARTIDO O ALIANZA']}
          <br />
          Provincia: {senador.PROVINCIA}
          <br />
          C. Legal: {senador.C_LEGAL}
          <br />
          C. Real: {senador.C_REAL}
          <br />
          D. Legal: {senador.D_LEGAL}
          <br />
          D. Real: {senador.D_REAL}
          <br />
          Email: {senador.EMAIL}
          <br />
          Teléfono: {senador.TELEFONO}
          <br />
          <a href={senador.FACEBOOK} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <br />
          <a href={senador.INSTAGRAM} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <br />
          <a href={senador.TWITTER} target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <br />
          <a href={senador.YOUTUBE} target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </p>
      </div>
    </div>
  );
};

const SenadoresList = () => {
  return (
    <div className="grid grid-cols-2  justify-center">
      {senadoresData.table.rows.map((senador) => (
        <SenadorCard key={senador.ID} senador={senador} />
      ))}
    </div>
  );
};
export default SenadoresList;
