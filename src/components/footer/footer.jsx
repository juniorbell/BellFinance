import React from 'react';
import './footer.css'; // Importa o estilo CSS para o footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-version">V 1.0.2.0</span>
        <img src="/logo.png" alt="Logo" className="footer-logo" />
      </div>
    </footer>
  );
}

export default Footer;
