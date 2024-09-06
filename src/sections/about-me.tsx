import TitleSection from "../components/title-section";

const AboutMe = () => {
  return (
    <section id="about-me" className=" mt-20 w-11/12 md:w-9/12 mx-auto">
      <TitleSection title="Sobre mi" />
      <main className="mt-10 flex flex-col-reverse gap-10  md:mx-auto md:text-lg">
        <div className="flex flex-col gap-4 ">
          <p>
            Mi nombre es Lucas Ezequiel Ramos, tengo 20 años y actualmente
            estudio Licenciatura en Informática. Mi pasión es la{" "}
            <span className="text-primary font-bold">
              programación de soluciones web
            </span>{" "}
            y el{" "}
            <span className="text-primary font-bold">
              diseño de páginas estéticas
            </span>{" "}
            y minimalistas.
          </p>
          <p>
            Mi formación comenzó en 2022 en la escuela Coder House, y la
            completé en 2023. Desde entonces, me he dedicado a aprender de
            manera autodidacta a través de{" "}
            <span className="text-primary font-bold">
              proyectos personales y trabajos
            </span>
            , lo que me ha permitido desarrollar habilidades prácticas en el
            campo.
          </p>
          <p>
            Entendí que el mercado laboral ha cambiado, y que sin estudios
            académicos certificados, mi perfil podría pasar desapercibido. Por
            eso, decidí continuar mi formación bajo el respaldo institucional, y
            estoy emocionado por la oportunidad de encontrar mi{" "}
            <span className="text-primary font-bold">
              primer trabajo profesional.
            </span>
          </p>
        </div>
        <div className="flex justify-center p-2 ">
          <img
            className="size-52 md:size-60 bg-primary rounded-[90px]"
            src="/assets/fotocv.webp"
            alt="Foto de presentacion"
          />
        </div>
      </main>
    </section>
  );
};

export default AboutMe;
