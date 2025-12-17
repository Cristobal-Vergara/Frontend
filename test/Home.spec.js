import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/components/Home';
import { BrowserRouter } from 'react-router-dom';

describe("Componente Home", () => {
  it("debería renderizar sin errores", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText(/Bienvenido/i)).toBeTruthy(); // ajusta el texto según tu Home
  });
});
