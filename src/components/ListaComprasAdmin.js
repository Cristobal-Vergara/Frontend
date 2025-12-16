import React, { useEffect, useState } from 'react';
import ComprasService from '../services/ComprasService';

const ListaComprasAdmin = () => {
  const [boletas, setBoletas] = useState([]);

  const cargarBoletas = async () => {
    try {
      const res = await ComprasService.getTodasLasCompras();
      setBoletas(res.data);
    } catch (err) {
      console.error('Error cargando boletas:', err);
      alert('Error al cargar boletas');
    }
  };

  useEffect(() => {
    cargarBoletas();
  }, []);

  const eliminarBoleta = async (id) => {
    if (!window.confirm('¿Seguro quieres eliminar esta boleta?')) return;
    try {
      await ComprasService.eliminarBoleta(id);
      alert('Boleta eliminada ✅');
      cargarBoletas();
    } catch (err) {
      console.error(err);
      alert('Error al eliminar boleta');
    }
  };

  return (
    <div className="container mt-4">
      <h2>📋 Boletas (Admin)</h2>

      {boletas.length === 0 ? (
        <p>No hay boletas registradas</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Email</th>
              <th>Total</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {boletas.map(b => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.nombre}</td>
                <td>{b.email}</td>
                <td>${b.total}</td>
                <td>{new Date(b.fecha).toLocaleString()}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarBoleta(b.id)}
                  >
                    🗑️ Eliminar
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

export default ListaComprasAdmin;
