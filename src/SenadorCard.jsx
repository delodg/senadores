import React from 'react';

const SenadorCard = ({ senador }) => {
  return (
    <div className="senador-card" style={styles.card}>
      <img src={senador.FOTO} alt={`${senador.NOMBRE} ${senador.APELLIDO}`} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{`${senador.NOMBRE} ${senador.APELLIDO}`}</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><i className="ri-group-line" style={styles.icon}></i>{senador.BLOQUE}</li>
          <li style={styles.listItem}><i className="ri-home-heart-line" style={styles.icon}></i>{senador["PARTIDO O ALIANZA"]}</li>
          <li style={styles.listItem}><i className="ri-map-pin-line" style={styles.icon}></i>{senador.PROVINCIA}</li>
          {senador.EMAIL && <li style={styles.listItem}><i className="ri-mail-line" style={styles.icon}></i>{senador.EMAIL}</li>}
          {senador.TELEFONO && <li style={styles.listItem}><i className="ri-phone-line" style={styles.icon}></i>{senador.TELEFONO}</li>}
          {senador.FACEBOOK && <li style={styles.listItem}><i className="ri-facebook-circle-fill" style={styles.icon}></i><a href={senador.FACEBOOK} style={styles.link}>Facebook</a></li>}
          {senador.INSTAGRAM && <li style={styles.listItem}><i className="ri-instagram-fill" style={styles.icon}></i><a href={senador.INSTAGRAM} style={styles.link}>Instagram</a></li>}
          {senador.TWITTER && <li style={styles.listItem}><i className="ri-twitter-fill" style={styles.icon}></i><a href={senador.TWITTER} style={styles.link}>Twitter</a></li>}
          {senador.YOUTUBE && <li style={styles.listItem}><i className="ri-youtube-fill" style={styles.icon}></i><a href={senador.YOUTUBE} style={styles.link}>YouTube</a></li>}
        </ul>
      </div>
    </div>
  );
};

// Estilos en JavaScript
const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    alignItems:'start'
  },
  image: {
    width: '48px',
    height: '48px',
    objectFit: 'cover',
  },
  content: {
    padding: '20px',
  },
  title: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  icon: {
    marginRight: '10px',
    fontSize: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#007BFF', // Bootstrap primary color
  },
};

export default SenadorCard;
