import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ComprasService from '../services/ComprasService';

const DetalleBoleta = () => {
  const { id } = useParams();
  const [detalle, setDetalle] = useState([]);
  const [boleta, setBoleta] = useState(null);

  useEffect(() => {
    ComprasService.getBoletaDetalle(id)
      .then(res => {
        setBoleta(res.data.boleta);
        setDetalle(res.data.detalle);
      })
      .catch(err => {
        console.error(err);
        alert('Error al cargar boleta');
      });
  }, [id]);

  if (!boleta) return <p>Cargando...</p>;

  return (
    <div className="container mt-4">
      <h2>📄 Boleta #{boleta.id}</h2>
      <p>Total: ${boleta.total}</p>
      <p>Fecha: {new Date(boleta.fecha).toLocaleString()}</p>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {detalle.map(item => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>${item.precio_unitario}</td>
              <td>{item.cantidad}</td>
              <td>${(item.precio_unitario * item.cantidad).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetalleBoleta;
