// ListaCompras.jsx
import React, { useEffect, useState, useContext } from 'react';
import ComprasService from '../services/ComprasService';
import { AuthContext } from '../services/AuthContext';

const ListaCompras = () => {
  const [boletas, setBoletas] = useState([]);
  const { usuario } = useContext(AuthContext);

  const cargarCompras = () => {
    if (usuario.rol === 'admin') {
      ComprasService.getTodasLasCompras()
        .then(res => setBoletas(res.data))
        .catch(() => alert('Error al cargar compras'));
    } else {
      ComprasService.getMisCompras()
        .then(res => setBoletas(res.data))
        .catch(() => alert('Error al cargar tus compras'));
    }
  };

  useEffect(() => {
    cargarCompras();
  }, [usuario]);

  const handleEliminar = (id) => {
    if (!window.confirm('¿Deseas eliminar esta boleta?')) return;
    ComprasService.eliminarBoleta(id)
      .then(() => {
        alert('Boleta eliminada');
        cargarCompras();
      })
      .catch(() => alert('Error al eliminar boleta'));
  };

  const handleEditar = (id) => {
    const nuevoTotal = parseFloat(prompt('Nuevo total de la boleta:'));
    if (isNaN(nuevoTotal)) return alert('Total inválido');

    ComprasService.editarBoleta(id, { total: nuevoTotal })
      .then(() => {
        alert('Boleta editada');
        cargarCompras();
      })
      .catch(() => alert('Error al editar boleta'));
  };

  return (
    <div className="container mt-4">
      <h2>📋 Compras {usuario.rol === 'admin' ? '(Admin)' : ''}</h2>

      {boletas.length === 0 ? (
        <p>No hay compras registradas</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              {usuario.rol === 'admin' && <th>Cliente</th>}
              {usuario.rol === 'admin' && <th>Email</th>}
              <th>Total</th>
              <th>Fecha</th>
              {usuario.rol === 'admin' && <th>Acciones</th>}
            </tr>
          </thead>
          <tbody>
            {boletas.map(b => (
              <tr key={b.id}>
                <td>{b.id}</td>
                {usuario.rol === 'admin' && <td>{b.nombre}</td>}
                {usuario.rol === 'admin' && <td>{b.email}</td>}
                <td>${b.total}</td>
                <td>{new Date(b.fecha).toLocaleString()}</td>
                {usuario.rol === 'admin' && (
                  <td>
                    <button className="btn btn-sm btn-warning me-2" onClick={() => handleEditar(b.id)}>✏️ Editar</button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleEliminar(b.id)}>🗑️ Eliminar</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaCompras;
