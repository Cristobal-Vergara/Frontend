import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as authLogin } from '../services/AuthService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const data = await authLogin(email, password);

      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('usuario', JSON.stringify(data.usuario));
        window.location.href = '/'; // Redirige al Dashboard
      } else {
        setError(data.error || 'Error al iniciar sesión');
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
    }
  };

  // ===== Estilos en línea =====
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',  // centra verticalmente
    alignItems: 'center',
    minHeight: '100vh',        // ocupa toda la altura de la pantalla
    background: 'linear-gradient(to bottom, #6a11cb, #ffffffff)',
    padding: '20px'
  };

  const cardStyle = {
    background: '#fff',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    width: '100%',
    maxWidth: '400px'
  };

  const inputStyle = {
    borderRadius: '8px',
    border: '1px solid #ccc',
    padding: '10px 12px',
    width: '100%',
    marginTop: '5px',
    marginBottom: '15px',
    fontSize: '1rem'
  };

  const buttonStyle = {
    backgroundColor: '#2575fc',
    border: 'none',
    padding: '12px',
    fontWeight: 500,
    borderRadius: '8px',
    width: '100%',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.2s ease'
  };

  const alertStyle = {
    borderRadius: '8px',
    padding: '10px 15px',
    marginBottom: '15px',
    fontSize: '0.9rem',
    backgroundColor: '#f8d7da',
    color: '#842029'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#333' }}>Login</h2>
        {error && <div style={alertStyle}>{error}</div>}

        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input 
            type="email" 
            style={inputStyle} 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />

          <label>Password:</label>
          <input 
            type="password" 
            style={inputStyle} 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
          />

          <button type="submit" style={buttonStyle}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#6a11cb'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#2575fc'}>
            Ingresar
          </button>
        </form>
      </div>
      {/* footer se mantendrá al final de la página */}
    </div>
  );
};

export default Login;
