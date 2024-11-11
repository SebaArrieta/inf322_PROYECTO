import React from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/home.png'
import mapa from '../assets/maps.png'
import descripcion from '../assets/descripcion.png'

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
      <li style={styles.navItem}>
          <Link to="/ServiceForm" style={styles.link}>
            <img
            src={descripcion}
            alt="" 
            style={{
                width: '30px',    
                height: '30px',
            }}
            />
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>
            <img
            src={home}
            alt="" 
            style={{
                width: '30px',    
                height: '30px',
            }}
            />
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/mapa" style={styles.link}>
            <img
            src={mapa}
            alt="" 
            style={{
                width: '30px',    
                height: '30px',
            }}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
    navbar: {
      position: 'fixed',  
      bottom: 0,         
      width: '100%',      
      backgroundColor: '#113946',
      padding: '10px',
      textAlign: 'center',
      zIndex: 1000,  
    },
    navList: {
      display: 'flex',
      justifyContent: 'space-around',  // Distribuye los íconos uniformemente
      alignItems: 'center',   // Centra los elementos en horizontal
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
    navItem: {
      marginRight: '5px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
    },
  };

export default NavBar;