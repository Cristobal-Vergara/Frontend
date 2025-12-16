import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ComprasService from '../services/ComprasService';

const ConfirmarCompra = () => {
  const navigate = useNavigate();
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(carritoGuardado);
  }, []);

  const actualizarCantidad = (id, cantidad) => {
    const nuevoCarrito = carrito.map(item =>
      item.id === id ? { ...item, cantidad } : item
    );
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  const quitarProducto = (id) => {
    const nuevoCarrito = carrito.filter(item => item.id !== id);
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const handleConfirmar = async () => {
    if (carrito.length === 0) {
      alert('Carrito vacío');
      return;
    }

    const items = carrito.map(p => ({ producto_id: p.id, cantidad: p.cantidad }));

    try {
      setLoading(true);
      const res = await ComprasService.crearCompra(items);
      alert(`Compra realizada ✅ (Boleta ID: ${res.data.boleta_id})`);
      localStorage.removeItem('carrito');
      navigate('/mis-compras');
    } catch (err) {
      console.error(err);
      alert('Error al realizar compra');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>🛒 Confirmar Compra</h2>

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
            {carrito.map(item => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>${item.precio}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={item.cantidad}
                    onChange={e => actualizarCantidad(item.id, parseInt(e.target.value))}
                    className="form-control"
                    style={{ width: '70px' }}
                  />
                </td>
                <td>${(item.precio * item.cantidad).toFixed(2)}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => quitarProducto(item.id)}>
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
          <button className="btn btn-success" onClick={handleConfirmar} disabled={loading}>
            {loading ? '⏳ Confirmando...' : '✅ Confirmar Compra'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ConfirmarCompra;
