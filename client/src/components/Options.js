import React, { useState } from "react";
import "../styles/Options.css";
import {useNavigate} from 'react-router-dom';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import icon7 from '../assets/icon7.png';
import icon8 from '../assets/icon8.png';
import icon9 from '../assets/icon9.png';

const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9];
const routes = ["/mapa", "/mapa", "/mapa", "/mapa", "/mapa", "/mapa", "/mapa", "/mapa", "/mapa"];

const Options = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleIconClick = (index) => {
    setSelected(index);
    navigate(routes[index]);
  };

  return (
    <div className="container">
      <div className="header">
        <button className="back-button" onClick={() => navigate('/buscar')}>←</button>
      </div>
      <div className="grid">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`grid-item ${selected === index ? "selected" : ""}`}
            onClick={() => handleIconClick(index)}
          >
            <img src={icon} alt={`icon${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
