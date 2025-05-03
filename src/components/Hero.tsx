import React from "react";

const Hero = () => {
  return (
    <section className="bg-primary text-white text-center p-5">
      <div className="container">
        <h1 className="display-4 fw-bold">Capacítate en Programación</h1>
        <p className="lead">
          Aprende desde cero hasta dominar tecnologías modernas como React,
          Node.js, y más.
        </p>
        <a href="#cursos" className="btn btn-light mt-3">
          Ver cursos
        </a>
      </div>
    </section>
  );
};

export default Hero;
