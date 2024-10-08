import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import type { Project } from "../types/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  const images = project.images.map(image => {
    return {
      original: image.url,
      bulletClass: "backGround: #000;",
      originalAlt: image.alt,
    };
  });

  return (
    <article className="p-3 gap-3 flex flex-col text-sm md:text-base 2xl:text-lg md:mx-auto ">
      <div className="lg:min-h-[250px] xl:min-h-[370px] 2xl:min-h-[510px] flex items-center !cursor-help ">
        <ImageGallery
          showBullets={false}
          showPlayButton={false}
          showFullscreenButton={false}
          items={images}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h5 className="text-2xl md:text-3xl 2xl:text-4xl text-primary font-bold">
          {project.title}
        </h5>
        <p className="font-bold">{project.subtitle}</p>
        {project.description.length > 0 &&
          project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
      </div>
      <footer className="flex flex-col mt-5 gap-5 lg:h-full lg:justify-between">
        <ul className=" text-xs md:text-sm 2xl:text-base flex flex-wrap  gap-3 ">
          {project.technologies.map((tec, index) => (
            <li
              key={index}
              className="py-2 px-3 md:py-2.5 md:px-3.5 rounded-3xl bg-secondary  text-center"
            >
              {tec}
            </li>
          ))}
        </ul>
        <div className="flex gap-4  text-primary [&>a]:p-2 [&>a]:border-[1px] [&>a]:border-primary [&>a]:rounded-full [&>a]:flex [&>a]:justify-center [&>a]:items-center [&>a]:gap-1 [&>a:hover]:scale-105 [&>a:hover]:bg-primary [&>a:hover]:text-font  [&>a]:duration-300">
          <a
            href={project.links.liveDemo}
            aria-label="Link to liveDemo"
            target="_blank"
          >
            Preview
            <IconArrowUpRight stroke={1} />
          </a>
          <a
            href={project.links.sourceCode}
            aria-label="Link to Source code"
            target="_blank"
          >
            Code
            <IconBrandGithub stroke={1} />
          </a>
        </div>
      </footer>
    </article>
  );
};

export default ProjectCard;
