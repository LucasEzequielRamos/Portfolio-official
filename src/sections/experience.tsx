import NumberTicker from "@/components/magicui/number-ticker";
import TitleSection from "../components/title-section";

const Experience = () => {
  return (
    <section id="experiencie" className=" mt-20 w-11/12 md:w-9/12  mx-auto">
      <TitleSection title="Mi trayectoria profesional" />
      <main className="mt-10">
        <div className=" grid justify-between lg:w-10/12 gap-2 text-sm md:text-base text-center grid-cols-2 mx-auto [&>div]:border-l-4 [&>div]:px-2 [&>div>h3]:text-xl [&>div>h3]:md:text-2xl [&>div>h3]:text-primary [&>div>h3]:font-bold ">
          <div>
            <h3>
              +<NumberTicker value={2} delay={1} />
            </h3>
            <p>Años de experiencia</p>
          </div>
          <div>
            <h3>
              <NumberTicker value={1} delay={1} />
            </h3>
            <p>Cliente satisfecho</p>
          </div>
          <div>
            <h3>
              <NumberTicker value={1} delay={1} />
            </h3>
            <p>Proyecto finalizado</p>
          </div>
          <div>
            <h3>0</h3>
            <p>Proyectos en curso</p>
          </div>
        </div>
        <div className="flex flex-col mt-16">
          <div className="text-center p-3 md:p-5 border border-secondary rounded-3xl text-sm md:text-base">
            <h3 className="text-2xl md:text-2xl font-bold">
              <span className="text-primary">Full Stack</span> Freelance
              Developer
            </h3>
            <h4 className="text-xs md:text-sm mt-2">
              Octubre 2022 - Actualidad
            </h4>
            <p className="mt-4 text-left tracking-wide md:tracking-normal">
              Hasta el momento, he trabajado en un proyecto profesional
              remunerado, del cual detallo más en la sección de "Proyectos".
              Este primer{" "}
              <span className="text-primary text-base md:text-lg">
                desafío enriquecedor
              </span>
              , desarrollado para una institución, fue una experiencia que me
              permitió poner en práctica mis habilidades y crecer como
              desarrollador.
            </p>
            <p className="mt-4 text-left tracking-wide md:tracking-normal">
              Actualmente, me encuentro{" "}
              <span className="text-primary text-base md:text-lg">
                motivado y en constante búsqueda
              </span>{" "}
              de nuevos proyectos y oportunidades laborales que me permitan
              seguir aprendiendo y aportando valor. <br /> Estoy ansioso por
              contribuir con mis conocimientos y seguir{" "}
              <span className="text-primary text-base md:text-lg">
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
