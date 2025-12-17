import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>

      {/* HERO */}
      <section
        className="py-5 text-center text-white"
        style={{
          background: 'linear-gradient(135deg, #6f42c1, #40188b)'
        }}
      >
        <div className="container">
          <h1 className="fw-bold mb-3">
            Bienvenido a Crazy Diamonds 💎
          </h1>
          <p className="fs-5 mb-4">
            Manga original, noticias anime y cultura japonesa en un solo lugar.
          </p>

          <Link
            to="/productos"
            className="btn btn-light btn-lg fw-semibold"
          >
            Explorar Mangas
          </Link>
        </div>
      </section>

      {/* ¿POR QUÉ CRAZY DIAMOND? */}
      <section className="container my-5">
        <h2
          className="text-center fw-bold mb-4"
          style={{ color: '#6f42c1' }}
        >
          ¿Por qué elegir Crazy Diamond?
        </h2>

        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h1>📚</h1>
                <h5 className="fw-bold mt-2">Mangas Originales</h5>
                <p>
                  Productos oficiales de tus series favoritas.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h1>📰</h1>
                <h5 className="fw-bold mt-2">Noticias Actualizadas</h5>
                <p>
                  Lo último del mundo del anime y manga.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h1>🚚</h1>
                <h5 className="fw-bold mt-2">Compra Segura</h5>
                <p>
                  Proceso rápido y protegido.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h1>💜</h1>
                <h5 className="fw-bold mt-2">Comunidad</h5>
                <p>
                  Un espacio creado por y para fans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTICIAS DESTACADAS */}
      <section
        className="py-5"
        style={{ backgroundColor: '#f5f0ff' }}
      >
        <div className="container">
          <h2
            className="text-center fw-bold mb-4"
            style={{ color: '#6f42c1' }}
          >
            Noticias Destacadas
          </h2>

        <div className="row">

          {/* NOTICIA 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow border-0">
              <img
                src="https://media.vandalsports.com/i/640x360/11-2025/2025118164122_1.jpg"
                className="card-img-top"
                alt="Jujutsu Kaisen"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="fw-bold" style={{ color: '#6f42c1' }}>
                  Nueva temporada de Jujutsu Kaisen
                </h5>
                <p>
                  MAPPA confirma la continuación del popular anime.
                </p>
              </div>
            </div>
          </div>

          {/* NOTICIA 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow border-0">
              <img
                src="https://alfabetajuega.com/hero/2024/11/one-piece-alcanza-un-nuevo-y-fascinante-record-que-confirma-su-popularidad.jpg?width=1200"
                className="card-img-top"
                alt="One Piece"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="fw-bold" style={{ color: '#6f42c1' }}>
                  One Piece rompe récords históricos
                </h5>
                <p>
                  El manga supera cifras récord y sigue haciendo historia.
                </p>
              </div>
            </div>
          </div>

          {/* NOTICIA 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow border-0">
              <img
                src="https://tierragamer.com/wp-content/uploads/2023/09/Attack-on-Titan-Proyecto-02.webp"
                className="card-img-top"
                alt="Attack on Titan"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="fw-bold" style={{ color: '#6f42c1' }}>
                  Nuevo proyecto de Attack on Titan
                </h5>
                <p>
                  El universo de Shingeki no Kyojin sigue expandiéndose.
                </p>
              </div>
            </div>
          </div>

        </div>


          <div className="text-center mt-3">
            <Link
              to="/noticias"
              className="btn text-white"
              style={{ backgroundColor: '#6f42c1' }}
            >
              Ver todas las noticias
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="py-5 text-center text-white"
        style={{
          background: 'linear-gradient(135deg, #40188b, #6f42c1)'
        }}
      >
        <h2 className="fw-bold mb-3">
          Únete a la comunidad Crazy Diamond
        </h2>
        <p className="mb-4">
          Descubre mangas increíbles y mantente informado.
        </p>
        <Link
          to="/register"
          className="btn btn-light btn-lg fw-semibold"
        >
          Crear Cuenta
        </Link>
      </section>

    </div>
  );
};

export default Home;
