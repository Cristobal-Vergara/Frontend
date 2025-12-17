import React from 'react';

const noticias = [
  {
    id: 1,
    titulo: 'Nueva temporada de Jujutsu Kaisen confirmada',
    descripcion:
      'MAPPA confirma oficialmente la producción de una nueva temporada de Jujutsu Kaisen, generando gran expectativa entre los fans.',
    imagen:
      'https://media.vandalsports.com/i/640x360/11-2025/2025118164122_1.jpg',
    fecha: 'Septiembre 2025'
  },
  {
    id: 2,
    titulo: 'One Piece alcanza un nuevo récord histórico',
    descripcion:
      'El manga de One Piece supera una cifra histórica de ventas, consolidándose como uno de los mangas más exitosos de todos los tiempos.',
    imagen:
      'https://alfabetajuega.com/hero/2024/11/one-piece-alcanza-un-nuevo-y-fascinante-record-que-confirma-su-popularidad.jpg?width=1200',
    fecha: 'Agosto 2025'
  },
  {
    id: 3,
    titulo: 'Attack on Titan: nuevo proyecto anunciado',
    descripcion:
      'El estudio anuncia un nuevo proyecto relacionado con el universo de Attack on Titan, sorprendiendo a la comunidad.',
    imagen:
      'https://tierragamer.com/wp-content/uploads/2023/09/Attack-on-Titan-Proyecto-02.webp',
    fecha: 'Julio 2025'
  },
  {
  id: 4,
  titulo: 'Demon Slayer anuncia nueva película del Arco del Castillo Infinito',
  descripcion:
    'Ufotable confirma una nueva película de Kimetsu no Yaiba que adaptará uno de los arcos más esperados por los fanáticos.',
  imagen:
    'https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVhuz7XSCfu1HABxiY8RxbMXV9aJ6fuoQDHwNweuYbbauvx0IbaVrv8ZQdbtC3ZCcay45gg-Dl-kiM-QUaqMRgk2rzeVKX9UlywR.jpg?r=0e6',
  fecha: 'Octubre 2025'
},
{
  id: 5,
  titulo: 'Chainsaw Man confirma segunda temporada',
  descripcion:
    'MAPPA revela el inicio de la producción de la segunda temporada de Chainsaw Man, aumentando la expectativa de los seguidores.',
  imagen:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxABwKMla686PdsKYhC06GySJENk9B0LxMWg&s',
  fecha: 'Septiembre 2025'
},
{
  id: 6,
  titulo: 'Dragon Ball celebra aniversario con nuevo proyecto',
  descripcion:
    'La franquicia Dragon Ball anuncia un proyecto especial por su aniversario, incluyendo nuevos contenidos para fans.',
  imagen:
    'https://areajugones.sport.es/wp-content/uploads/2025/10/dragon-ball-evento-final-40-aniversario-1-1560x880.jpg.webp',
  fecha: 'Agosto 2025'
}
  


];

const Noticias = () => {
  return (
    <div
      className="container my-5 p-4 rounded"
      style={{ backgroundColor: '#f5f0ff' }}
    >
      {/* TÍTULO */}
      <h2
        className="text-center fw-bold mb-4"
        style={{ color: '#6f42c1' }}
      >
        Noticias Anime & Manga
      </h2>

      <div className="row">
        {noticias.map((noticia) => (
          <div className="col-md-4 mb-4" key={noticia.id}>
            <div className="card h-100 shadow border-0">

              {/* IMAGEN */}
              <img
                src={noticia.imagen}
                alt={noticia.titulo}
                className="card-img-top"
                style={{
                  height: '180px',
                  objectFit: 'cover'
                }}
              />

              {/* BODY */}
              <div className="card-body">
                <small
                  className="fw-semibold"
                  style={{ color: '#8e44ad' }}
                >
                  {noticia.fecha}
                </small>

                <h5
                  className="card-title mt-2 fw-bold"
                  style={{ color: '#6f42c1' }}
                >
                  {noticia.titulo}
                </h5>

                <p className="card-text">
                  {noticia.descripcion}
                </p>
              </div>



            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticias;
