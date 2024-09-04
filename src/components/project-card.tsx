import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import type { Project } from "../types/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  const images = project.images.map(image => {
    return { original: image.url };
  });

  return (
    <article className="p-3 gap-3 flex flex-col text-sm">
      <div className="min-h-[250px]">
        <ImageGallery
          showBullets={true}
          showPlayButton={false}
          showFullscreenButton={false}
          items={images}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-2xl text-primary font-bold">{project.title}</h4>
        <p className="">{project.subtitle}</p>
        {project.description.length > 0 &&
          project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
      </div>
      <footer className="flex flex-col mt-5 gap-5">
        <ul className=" text-xs flex flex-wrap  gap-3 ">
          {project.technologies.map((tec, index) => (
            <li
              key={index}
              className="p-2 rounded-3xl bg-secondary min-w-12 text-center"
            >
              {tec}
            </li>
          ))}
        </ul>
        <div className="flex gap-2  text-primary [&>a]:p-2 [&>a]:border-[1px] [&>a]:border-primary [&>a]:rounded-full [&>a]:flex [&>a]:justify-center [&>a]:items-center [&>a]:gap-1">
          <a href={project.links.liveDemo} target="_blank">
            Preview
            <IconArrowUpRight stroke={1} />
          </a>
          <a href={project.links.sourceCode} target="_blank">
            Code
            <IconBrandGithub stroke={1} />
          </a>
        </div>
      </footer>
    </article>
  );
};

export default ProjectCard;
