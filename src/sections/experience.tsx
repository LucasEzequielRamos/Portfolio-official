import TitleSection from "../components/title-section";

const Experience = () => {
  return (
    <section id="experiencie" className=" mt-20 w-11/12 mx-auto">
      <TitleSection title="Mi trayectoria profesional" />
      <main className="mt-10">
        <div className=" grid justify-between gap-2 text-sm text-center grid-cols-2 mx-auto [&>div]:border-l-4 [&>div]:px-2 [&>div>h3]:text-xl [&>div>h3]:text-primary [&>div>h3]:font-bold ">
          <div>
            <h3>+2</h3>
            <p>Años de experiencia</p>
          </div>
          <div>
            <h3>1</h3>
            <p>Cliente satisfecho</p>
          </div>
          <div>
            <h3>1</h3>
            <p>Proyecto finalizado</p>
          </div>
          <div>
            <h3>0</h3>
            <p>Proyectos en curso</p>
          </div>
        </div>
        <div className="flex flex-col mt-16">
          <div className="text-center p-3 border border-secondary rounded-3xl text-sm">
            <h3 className="text-2xl font-bold">
              <span className="text-primary">Full Stack</span> Freelance
              Developer
            </h3>
            <h4 className="text-xs mt-2">Octubre 2022 - Actualidad</h4>
            {/* <p className="mt-6 text-left tracking-wide">
              Después de completar mi formación en Coder House, comencé a
              adentrarme en entornos más profesionales dentro del desarrollo
              web. Durante este tiempo, he{" "}
              <span className="text-primary text-base">
                continuado mi aprendizaje de manera autodidacta
              </span>
              , explorando diversas áreas para identificar aquella en la que
              pueda destacarme mejor.
            </p> */}
            <p className="mt-4 text-left tracking-wide">
              Hasta el momento, he trabajado en un proyecto profesional
              remunerado, del cual detallo más en la sección de "Proyectos".
              Este primer{" "}
              <span className="text-primary text-base">
                desafío enriquecedor
              </span>
              , desarrollado para una institución, fue una experiencia que me
              permitió poner en práctica mis habilidades y crecer como
              desarrollador.
            </p>
            <p className="mt-4 text-left tracking-wide">
              Actualmente, me encuentro{" "}
              <span className="text-primary text-base">
                motivado y en constante búsqueda
              </span>{" "}
              de nuevos proyectos y oportunidades laborales que me permitan
              seguir aprendiendo y aportando valor. <br /> Estoy ansioso por
              contribuir con mis conocimientos y seguir{" "}
              <span className="text-primary text-base">
                desarrollándome profesionalmente
              </span>{" "}
              en un entorno que me permita crecer y enfrentar nuevos retos.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Experience;
