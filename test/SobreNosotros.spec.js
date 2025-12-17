import React from 'react';
import { render, screen } from '@testing-library/react';
import SobreNosotros from '../src/components/SobreNosotros';
import { BrowserRouter } from 'react-router-dom';

describe("Componente SobreNosotros", () => {
  it("debería renderizar sin errores", () => {
    render(
      <BrowserRouter>
        <SobreNosotros />
      </BrowserRouter>
    );
    expect(screen.getByText(/¿Quiénes Somos?/i)).toBeTruthy(); // ajusta el texto según tu componente
  });
});
