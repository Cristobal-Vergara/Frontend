import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../services/AuthContext';

const Navbar = () => {
  const { usuario, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const rol = usuario?.rol?.toLowerCase(); // convertimos a minúscula para consistencia

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Crazy Diamond</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">

          {/* Mostrar solo si hay usuario logeado */}
          {usuario && (
            <>
              {/* Productos: Todos los roles */}
              <li className="nav-item">
                <Link className="nav-link" to="/productos">Productos</Link>
              </li>





              {/* Usuarios: Solo Admin */}
              {rol === 'admin' && (
                <li className="nav-item">
                  <Link className="nav-link" to="/usuarios">Usuarios</Link>
                </li>
              )}

              {/* Compras: Cliente y Admin */}
              {rol === 'cliente' && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/comprar">Comprar</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/mis-compras">Mis Compras</Link>
                  </li>
                </>
              )}

              {rol === 'admin' && (
                <li className="nav-item">
                  <Link className="nav-link" to="/compras">Compras</Link>
                </li>
              )}
            </>
          )}
        </ul>

        <ul className="navbar-nav ms-auto">
          {/* Si no hay usuario logeado */}
          {!usuario && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}

          {/* Si hay usuario logeado */}
          {usuario && (
            <>
              <li className="nav-item">
                <span className="nav-link">
                  Bienvenido! {usuario.email} - ({usuario.rol})
                </span>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
