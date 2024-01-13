// Footer.jsx
import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="mapa">
        <a href="https://www.google.com/maps/place/Ferreteria+Laudani/@-34.898488,-56.1693091,17z/data=!3m1!4b1!4m6!3m5!1s0x959f81acd1db24fb:0xd54a058136bad714!8m2!3d-34.898488!4d-56.1667342!16s%2Fg%2F11f0_fvq1h?entry=ttu" target="_blank">
          <img src="../imagenes/mapa .png" alt="Mapa" />
        </a>
        <p>Avda. 18 de Julio</p>
      </div>
      <div className="tel">
        <a href="https://wa.me/+598099336133" target="_blank">
          <img src="../imagenes/telefono.png" alt="Teléfono" />
        </a>
        <p>099 33 61 33</p>
      </div>
      <div className="redes">
        <a href="https://www.instagram.com/" target="_blank">
          <img src="../imagenes/ig.png" alt="Instagram" width="32px" height="auto" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src="../imagenes/facebook .png" alt="Facebook" width="32px" height="auto" />
        </a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Des" target="_blank">
          <img src="../imagenes/twiter.png" alt="Twitter" />
        </a>
        <a href="https://www.youtube.com/?hl=es" target="_blank">
          <img src="../imagenes/youtube .png" alt="YouTube" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;