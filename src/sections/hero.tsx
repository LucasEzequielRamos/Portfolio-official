import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandTelegram } from "@tabler/icons-react";

const Hero = () => {
  return (
    <section className="flex flex-col mt-40 w-11/12 mx-auto">
      <div className="text-sm flex flex-col text-center">
        <h3 className="text-2xl pb-2">Yo soy Lucas</h3>
        <h2 className="text-4xl pb-8 font-bold bg-gradient-to-r from-primary via-primary/90 to-font bg-clip-text text-transparent">
          Web Fullstack Developer
        </h2>
        <p className="pb-4">
          Estoy disponible para trabajar, contactame, ideemos y desarrollemos tu
          proyecto juntos
        </p>
        <div className="flex items-center justify-center gap-3 text-primary [&>a]:border-[1px] [&>a]:border-primary [&>a]:rounded-full [&>a]:p-1 ">
          <button className="p-2 border-[1px] border-primary rounded-full">
            Descargar CV
          </button>
          <a href="#">
            <IconBrandLinkedin stroke={1} />
          </a>
          <a href="#">
            <IconBrandGithub stroke={1} />
          </a>
          <a href="#">
            <IconBrandTelegram stroke={1} />
          </a>
        </div>
      </div>
      <div>
        <img src="/assets/3d-image.webp" alt="image 3d to illustration" />
      </div>
    </section>
  );
};

export default Hero;
