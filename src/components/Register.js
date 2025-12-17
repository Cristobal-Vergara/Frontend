import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/AuthService';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error) setError('');
  };

  const validateForm = () => {
    const { nombre, email, password, confirmPassword } = formData;
    if (!nombre.trim()) { setError('El nombre es requerido'); return false; }
    if (!email.trim()) { setError('El email es requerido'); return false; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { setError('Por favor ingresa un email válido'); return false; }
    if (!password) { setError('La contraseña es requerida'); return false; }
    if (password.length < 6) { setError('La contraseña debe tener al menos 6 caracteres'); return false; }
    if (password !== confirmPassword) { setError('Las contraseñas no coinciden'); return false; }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const { nombre, email, password } = formData;
      await register({
        nombre,
        email,
        password,
        rol: 'cliente'
      });

      setSuccess('✅ Registro exitoso como Cliente! Redirigiendo a login...');
      setTimeout(() => navigate('/login'), 2000);

    } catch (err) {
      console.error('Error en registro:', err);
      if (err.response) {
        setError(err.response.data?.error || 'Error en el registro');
      } else {
        setError('Error de conexión con el servidor');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
    >
      <div
        className="bg-white p-4 shadow rounded"
        style={{ width: '100%', maxWidth: '420px', borderRadius: '1rem' }}
      >
        <h2 className="text-center mb-4 fw-bold" style={{ color: '#333' }}>Crea tu cuenta</h2>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Nombre Completo *</label>
            <input
              type="text"
              name="nombre"
              className="form-control rounded-pill px-3"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              className="form-control rounded-pill px-3"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Contraseña *</label>
            <input
              type="password"
              name="password"
              className="form-control rounded-pill px-3"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Confirmar Contraseña *</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control rounded-pill px-3"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 rounded-pill"
            style={{ background: '#667eea', border: 'none' }}
            disabled={loading}
          >
            {loading ? 'Registrando...' : 'Registrarme'}
          </button>

          <p className="mt-3 text-center">
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
