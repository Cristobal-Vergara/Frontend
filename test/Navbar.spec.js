import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import { AuthContext } from '../src/services/AuthContext';

describe("Navbar", () => {


  it("muestra login si no hay usuario logeado", () => {
    render(
      <AuthContext.Provider value={{ usuario: null }}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText(/Login/i)).toBeTruthy();
    expect(screen.getByText(/Register/i)).toBeTruthy();
  });

  it("muestra logout y email si hay usuario logeado", () => {
    const mockUser = { email: 'test@correo.com', rol: 'admin' };
    render(
      <AuthContext.Provider value={{ usuario: mockUser, logout: () => {} }}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText(/Bienvenido!/i)).toBeTruthy();
    expect(screen.getByText(/Logout/i)).toBeTruthy();
  });

});
