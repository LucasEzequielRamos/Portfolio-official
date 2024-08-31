import React from "react";
import TitleSection from "../components/title-section";

const AboutMe = () => {
  return (
    <section id="about-me" className=" mt-20 w-11/12 mx-auto">
      <TitleSection title="Sobre mi" />
      <main className="mt-10">
        <div className="flex flex-col gap-2">
          <p>
            Mi nombre es Lucas Ezequiel Ramos, tengo 20 años y estudio
            Licenciatura en Informatica. Me encanta programar soluciones web y
            diseñar paginas esteticas y minimalistas.
          </p>
          <p>
            Empece mi formacion en la escuela Coder House en 2022 y termine en
            2023, desde entonces aprendo de manera autodidacta a traves de
            proyectos personales y trabajos.
          </p>
          <p>
            Comprendi que hubo un cambio en el mercado laboral, lo que cual dejo
            casi invisible mi perfil como programador por falta de estudios
            academicos certificados, por lo que decidi seguir mi formacion bajo
            el aval institucional, y estoy emocionado por encontrar mi primer
            trabajo.
          </p>
        </div>
        <div className="flex justify-center p-2 mt-10">
          <img className="size-52 bg-white" src="/assets/fotocv.webp" alt="" />
        </div>
      </main>
    </section>
  );
};

export default AboutMe;
