import React from 'react';

const SenadorCard = ({ senador }) => {
  return (
    <div className="flex flex-col w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="flex justify-start items-center p-5">
        <img src={senador.FOTO} alt={`${senador.NOMBRE} ${senador.APELLIDO}`} className="w-16 h-16 rounded-full object-cover mr-4" />
        <div>
          <h2 className="text-xl font-semibold text-left">{`${senador.NOMBRE} ${senador.APELLIDO}`}</h2>
          <p className="text-gray-600 text-left">{senador.BLOQUE}</p>
        </div>
      </div>
      <ul className="text-sm text-gray-700 p-4 text-left">
        <li className="mb-3"><i className="ri-government-line mr-2"></i>Partido/Alianza: {senador["PARTIDO O ALIANZA"]}</li>
        <li className="mb-3"><i className="ri-map-pin-line mr-2"></i>Provincia: {senador.PROVINCIA}</li>
        <li className="mb-3"><i className="ri-calendar-check-line mr-2"></i>C. Legal: {senador.C_LEGAL}</li>
        <li className="mb-3"><i className="ri-time-line mr-2"></i>D. Legal: {senador.D_LEGAL}</li>
        {senador.EMAIL && <li className="mb-3"><i className="ri-mail-line mr-2"></i>{senador.EMAIL}</li>}
        {senador.TELEFONO && <li className="mb-3"><i className="ri-phone-line mr-2"></i>{senador.TELEFONO}</li>}
        {senador.FACEBOOK && <li className="mb-3"><i className="ri-facebook-box-fill mr-2"></i><a href={senador.FACEBOOK} className="hover:text-blue-600">Facebook</a></li>}
        {senador.INSTAGRAM && <li className="mb-3"><i className="ri-instagram-line mr-2"></i><a href={senador.INSTAGRAM} className="hover:text-pink-600">Instagram</a></li>}
        {senador.TWITTER && <li className="mb-3"><i className="ri-twitter-line mr-2"></i><a href={senador.TWITTER} className="hover:text-blue-400">Twitter</a></li>}
        {senador.YOUTUBE && <li className="mb-3"><i className="ri-youtube-fill mr-2"></i><a href={senador.YOUTUBE} className="hover:text-red-600">YouTube</a></li>}
      </ul>
    </div>
  );
};

export default SenadorCard;
