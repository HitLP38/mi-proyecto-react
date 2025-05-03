import React from "react";

const Cursos = () => {
  return (
    <section id="cursos" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Cursos destacados</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Curso de HTML, CSS y JS</h5>
                <p className="card-text">
                  Ideal para quienes recién comienzan en el mundo web.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">React desde Cero</h5>
                <p className="card-text">
                  Construye interfaces dinámicas con componentes reutilizables.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Backend con Node.js</h5>
                <p className="card-text">
                  Aprende a crear APIs y manejar bases de datos con Express y
                  MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cursos;
