import ProjectCard from "../components/project-card";
import TitleSection from "../components/title-section";
import projectsArr from "../lib/projects.json";
import { Project } from "../types/projects";

const Projects = () => {
  return (
    <section id="projects" className=" mt-20 w-11/12 mx-auto">
      <TitleSection title="Mis proyectos" />
      <main className="mt-10">
        <div className="grid gap-5  divide-font/30 divide-y divide-dashed ">
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
