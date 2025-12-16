// ListaProductosCliente.js
import React, { useEffect, useState, useContext } from 'react';
import ProductoService from '../services/ProductoService';
import { AuthContext } from '../services/AuthContext';
import { useNavigate } from 'react-router-dom';

const ListaProductosCliente = () => {
  const { usuario } = useContext(AuthContext);
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  // Cargar productos
  const cargarProductos = async () => {
    try {
      const res = await ProductoService.getAllProductos();
      setProductos(res.data);
    } catch (err) {
      console.error('Error cargando productos:', err);
      alert('Error al cargar productos');
    }
  };

  useEffect(() => {
    cargarProductos();
    // Cargar carrito desde localStorage
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(carritoGuardado);
  }, []);

  const agregarAlCarrito = (producto) => {
    const existente = carrito.find(item => item.id === producto.id);
    let nuevoCarrito;

    if (existente) {
      nuevoCarrito = carrito.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
    } else {
      nuevoCarrito = [...carrito, { ...producto, cantidad: 1 }];
    }

    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    alert(`✅ ${producto.nombre} agregado al carrito`);
  };

  const irACarrito = () => {
    navigate('/confirmar-compra');
  };

  if (!usuario || usuario.rol !== 'cliente') return null;

  return (
    <div className="container mt-4">
      <h2>🛍️ Productos</h2>

      <button className="btn btn-primary mb-3" onClick={irACarrito}>
        🛒 Ver Carrito ({carrito.reduce((acc, item) => acc + item.cantidad, 0)})
      </button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(p => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>${p.precio}</td>
              <td>
                <button className="btn btn-success btn-sm" onClick={() => agregarAlCarrito(p)}>
                  ➕ Agregar al carrito
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaProductosCliente;
