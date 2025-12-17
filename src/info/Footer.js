import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="mt-5 text-white pt-4"
      style={{ backgroundColor: '#6f42c1' }}
    >
      <div className="container">
        <div className="row">

          {/* COLUMNA 1 */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Crazy Diamond</h5>
            <p className="small">
              Plataforma digital dedicada al manga y anime.  
              Compra, descubre y mantente informado en un solo lugar.
            </p>
          </div>

          {/* COLUMNA 2 */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/sobre-nosotros" className="text-white text-decoration-none">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-white text-decoration-none">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white text-decoration-none">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-white text-decoration-none">
                  Registro
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3 */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Contacto</h5>
            <p className="small mb-1">📧 crazydiamond@contacto.cl</p>
            <p className="small mb-1">📞 +56 9 2344 5678</p>
            <p className="small">📍 Chile</p>

            {/* Redes */}
            <div className="mt-2">
              <a href="#" className="text-white me-3 text-decoration-none">
                🌐 Web
              </a>
              <a href="#" className="text-white me-3 text-decoration-none">
                📷 Instagram
              </a>
              <a href="#" className="text-white text-decoration-none">
                🐦 Twitter
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center border-top pt-3 mt-3 small">
          © 2025 Crazy Diamond
        </div>
      </div>
    </footer>
  );
};

export default Footer;
