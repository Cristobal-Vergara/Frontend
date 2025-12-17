// test/Noticias.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Noticias from '../src/components/Noticias';

describe("Componente Noticias", () => {

  it("debería renderizar sin errores y mostrar el título principal", () => {
    render(<Noticias />);
    expect(screen.getByText(/Noticias Anime & Manga/i)).toBeTruthy();
  });

  it("debería mostrar todos los títulos de noticias", () => {
    render(<Noticias />);
    const titulos = [
      'Nueva temporada de Jujutsu Kaisen confirmada',
      'One Piece alcanza un nuevo récord histórico',
      'Attack on Titan: nuevo proyecto anunciado',
      'Demon Slayer anuncia nueva película del Arco del Castillo Infinito',
      'Chainsaw Man confirma segunda temporada',
      'Dragon Ball celebra aniversario con nuevo proyecto'
    ];

    titulos.forEach(titulo => {
      expect(screen.getByText(new RegExp(titulo, 'i'))).toBeTruthy();
    });
  });

  it("debería mostrar todas las descripciones de noticias", () => {
    render(<Noticias />);
    const descripciones = [
      'MAPPA confirma oficialmente la producción de una nueva temporada de Jujutsu Kaisen, generando gran expectativa entre los fans.',
      'El manga de One Piece supera una cifra histórica de ventas, consolidándose como uno de los mangas más exitosos de todos los tiempos.',
      'El estudio anuncia un nuevo proyecto relacionado con el universo de Attack on Titan, sorprendiendo a la comunidad.',
      'Ufotable confirma una nueva película de Kimetsu no Yaiba que adaptará uno de los arcos más esperados por los fanáticos.',
      'MAPPA revela el inicio de la producción de la segunda temporada de Chainsaw Man, aumentando la expectativa de los seguidores.',
      'La franquicia Dragon Ball anuncia un proyecto especial por su aniversario, incluyendo nuevos contenidos para fans.'
    ];

    descripciones.forEach(desc => {
      expect(screen.getByText(new RegExp(desc, 'i'))).toBeTruthy();
    });
  });

  it("debería mostrar imágenes con alt correcto", () => {
    render(<Noticias />);
    const imagenesAlt = [
      'Nueva temporada de Jujutsu Kaisen confirmada',
      'One Piece alcanza un nuevo récord histórico',
      'Attack on Titan: nuevo proyecto anunciado',
      'Demon Slayer anuncia nueva película del Arco del Castillo Infinito',
      'Chainsaw Man confirma segunda temporada',
      'Dragon Ball celebra aniversario con nuevo proyecto'
    ];

    imagenesAlt.forEach(altText => {
      expect(screen.getByAltText(new RegExp(altText, 'i'))).toBeTruthy();
    });
  });

});
