import React, { useEffect, useState, useContext } from 'react';
import ComprasService from '../services/ComprasService';
import { AuthContext } from '../services/AuthContext';
import { useNavigate } from 'react-router-dom';

const MisCompras = () => {
  const { usuario } = useContext(AuthContext);
  const navigate = useNavigate();
  const [boletas, setBoletas] = useState([]);

  useEffect(() => {
    if (usuario?.rol === 'cliente') {
      ComprasService.getMisCompras()
        .then(res => setBoletas(res.data))
        .catch(err => {
          console.error(err);
          alert('Error al cargar compras');
        });
    }
  }, [usuario]);

  return (
    <div className="container mt-4">
      <h2>📋 Mis Compras</h2>
      {boletas.length === 0 ? (
        <p>No has realizado compras aún.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Total</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {boletas.map(b => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>${b.total}</td>
                <td>{new Date(b.fecha).toLocaleString()}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate(`/detalle-boleta/${b.id}`)}
                  >
                    🔍 Ver detalle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MisCompras;
