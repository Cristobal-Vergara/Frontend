import React, { useContext, useState } from 'react';
import { CarritoContext } from '../services/CarritoContext';
import ComprasService from '../services/ComprasService';

const Carrito = () => {
  const { carrito, quitarProducto, actualizarCantidad, vaciarCarrito } = useContext(CarritoContext);
  const [loading, setLoading] = useState(false);

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const handleConfirmarCompra = async () => {
    if (carrito.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    const items = carrito.map(p => ({
      producto_id: p.id,
      cantidad: p.cantidad
    }));

    try {
      setLoading(true);
      const res = await ComprasService.realizarCompra(items);
      alert(`Compra realizada ✅ (Boleta ID: ${res.data.boleta_id})`);
      vaciarCarrito();
    } catch (err) {
      console.error(err);
      alert('Error al realizar compra');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>🛒 Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio Unitario</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map(p => (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td>${p.precio}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={p.cantidad}
                    onChange={e => actualizarCantidad(p.id, parseInt(e.target.value))}
                    className="form-control"
                    style={{ width: '70px' }}
                  />
                </td>
                <td>${(p.precio * p.cantidad).toFixed(2)}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => quitarProducto(p.id)}>
                    🗑️ Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {carrito.length > 0 && (
        <div className="d-flex justify-content-between align-items-center">
          <h5>Total: ${total.toFixed(2)}</h5>
          <button
            className="btn btn-success"
            onClick={handleConfirmarCompra}
            disabled={loading}
          >
            {loading ? '⏳ Confirmando...' : '✅ Confirmar Compra'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Carrito;
