import ProjectCard from "../components/project-card";
import TitleSection from "../components/title-section";
import projectsArr from "../lib/projects.json";
import { Project } from "../types/projects";

const Projects = () => {
  return (
    <section id="projects" className=" mt-20 w-11/12 md:w-9/12 mx-auto">
      <TitleSection title="Mis proyectos" />
      <main className="mt-10 xl:mt-24 2xl:mt-32">
        <div className="grid lg:grid-cols-2 gap-5  md:gap-10 2xl:gap-20 divide-font/30 divide-y md:divide-y-2 lg:divide-y-0 divide-dashed ">
          {projectsArr.length > 0 &&
            projectsArr.map((proj: Project) => {
              return <ProjectCard key={proj.id} project={proj} />;
            })}
        </div>
      </main>
    </section>
  );
};

export default Projects;
