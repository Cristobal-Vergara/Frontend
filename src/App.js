// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './services/AuthContext';
import ProtectedRoute from './services/ProtectedRoute';
import Navbar from './components/Navbar';
import { CarritoProvider } from './services/CarritoContext';

import ListaBoletas from './components/ListaBoletas';

import ListaCategorias from './components/ListaCategorias';


import ListaProductos from './components/ListaProductos';
import ConfirmarCompra from './components/ConfirmarCompra';
import MisCompras from './components/MisCompras';
import DetalleBoleta from './components/DetalleBoleta';
import ListaProductosCliente from './components/ListaProductosCliente';

import ListaCompras from './components/ListaCompras';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';


import ProductoComponent from './components/ProductoComponent';

import ListaUsuarios from './components/ListaUsuarios';
import UsuarioComponent from './components/UsuarioComponent';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <CarritoProvider>

        <Routes>
          {/* AUTENTICACIÓN */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* DASHBOARD neutro */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute roles={['admin', 'vendedor', 'cliente']}>
                <Dashboard />
              </ProtectedRoute>
            }
          />



            

          {/* COMPRAS - ADMIN */}
            <Route
              path="/compras"
              element={
                <ProtectedRoute roles={['admin']}>
                  <ListaCompras />
                </ProtectedRoute>
              }
            />


          {/* PRODUCTOS */}
          <Route
            path="/productos"
            element={
              <ProtectedRoute roles={['admin', 'vendedor', 'cliente']}>
                <ListaProductos />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/add-producto"
            element={
              <ProtectedRoute roles={['admin']}>
                <ProductoComponent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-producto/:id"
            element={
              <ProtectedRoute roles={['admin']}>
                <ProductoComponent />
              </ProtectedRoute>
            }
          />

          {/* USUARIOS - solo admin */}
          <Route
            path="/usuarios"
            element={
              <ProtectedRoute roles={['admin']}>
                <ListaUsuarios />
              </ProtectedRoute>
            }
          />
          <Route
            path="/usuarios/nuevo"
            element={
              <ProtectedRoute roles={['admin']}>
                <UsuarioComponent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/usuarios/editar/:id"
            element={
              <ProtectedRoute roles={['admin']}>
                <UsuarioComponent />
              </ProtectedRoute>
            }
          

          />
            {/* CATEGORÍAS */}
            <Route path="/categorias" element={
              <ProtectedRoute roles={['admin']}>
                <ListaCategorias />
              </ProtectedRoute>
            } />

            {/* BOLETAS */}
            <Route path="/boletas" element={
              <ProtectedRoute roles={['admin']}>
                <ListaBoletas />
              </ProtectedRoute>
            } />




              <Route
                path="/mis-compras"
                element={
                  <ProtectedRoute roles={['cliente']}>
                    <ListaCompras />
                  </ProtectedRoute>
                }
              />


              {/* COMPRAS  */}
              <Route path="/productos" element={
                <ProtectedRoute roles={['cliente']}>
                  <ListaProductosCliente />
                </ProtectedRoute>
              } />

              <Route path="/confirmar-compra" element={
                <ProtectedRoute roles={['cliente']}>
                  <ConfirmarCompra />
                </ProtectedRoute>
              } />

              <Route path="/mis-compras" element={
                <ProtectedRoute roles={['cliente', 'admin']}>
                  <MisCompras />
                </ProtectedRoute>
              } />

              <Route path="/detalle-boleta/:id" element={
                <ProtectedRoute roles={['cliente','admin']}>
                  <DetalleBoleta />
                </ProtectedRoute>
              } />

              <Route path="/comprar" element={
              <ProtectedRoute roles={['cliente']}>
              <ListaProductosCliente />
          </ProtectedRoute>
        } />
              


        </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;