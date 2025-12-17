import React from 'react';

const SobreNosotros = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {/* Card principal */}
        <div className="col-lg-8 col-md-10 col-12">
          <div className="card shadow-lg border-0">

            {/* Header */}
            <div
              className="card-header text-center text-white"
              style={{
                background: 'linear-gradient(135deg, #6f42c1, #6f42c1)',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px'
              }}
            >
              <h2 className="fw-bold mb-0">¿Quiénes Somos?
                
              </h2>
            </div>

            {/* Body */}
            <div className="card-body p-4">
              {/* Imagen de portada */}
              <div className="text-center mb-4">
                <img
                  src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/12/35-best-manga-of-all-time.jpg"  // Reemplaza con la URL de tu imagen
                  alt="Crazy Diamond"
                  className="img-fluid rounded"
                  style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
                />
              </div>

              {/* Descripción */}
              <h3 className="fw-bold mb-3 text-center" style={{ color: '#6f42c1' }}>
                Crazy Diamond</h3>
              <p className="lead">
                <strong>Crazy Diamond</strong> es una plataforma digital especializada en la comercialización de manga y en la difusión de noticias del mundo del anime, orientada a fanáticos de la cultura japonesa en América Latina.
              </p>
              <p>
                La compañía ofrece una experiencia integral que combina una tienda online moderna con contenido informativo actualizado, permitiendo a los usuarios descubrir, informarse y acceder a productos oficiales de manera simple y segura.
              </p>

              <h5 className="mt-4">¿Qué hacemos?</h5>
              <ul className="list-group">
                <li className="list-group-item">Venta de mangas y artículos oficiales.</li>
                <li className="list-group-item">Noticias y actualizaciones sobre anime y cultura japonesa.</li>
                <li className="list-group-item">Recomendaciones personalizadas para cada fanático.</li>
              </ul>

              <h5 className="mt-4">Nuestra Misión</h5>
              <p>
                Nos dedicamos a ofrecer una plataforma segura, fácil de usar y confiable para que los fanáticos del anime puedan acceder a todo lo relacionado con el mundo del manga de forma sencilla. Creemos en la <strong>transparencia</strong>, <strong>la calidad</strong> y la <strong>innovación</strong>.
              </p>

              <div className="text-center mt-4">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/014/455/911/non_2x/illustration-of-diamond-icon-on-transparent-background-free-png.png" // Reemplaza con la URL de tu imagen
                  alt="Equipo de Crazy Diamond"
                  
                  style={{ width: '150px', height: '150px', objectFit: 'contain' }}
                />
                <p className="mt-2">Crazy Diamond</p>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
