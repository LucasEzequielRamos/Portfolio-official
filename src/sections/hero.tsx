import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandTelegram } from "@tabler/icons-react";

const Hero = () => {
  return (
    <section className="flex flex-col mt-40 w-11/12 mx-auto">
      <div className="text-sm flex flex-col text-center">
        <h3 className="text-2xl md:text-4xl pb-2">Yo soy Lucas</h3>
        <h2 className="text-4xl md:text-6xl pb-8 font-bold bg-gradient-to-r from-primary via-primary/90 to-font bg-clip-text text-transparent">
          Web Fullstack Developer
        </h2>
        <p className="pb-4 md:text-lg md:w-8/12 mx-auto">
          Estoy disponible para trabajar, contactame, ideemos y desarrollemos tu
          proyecto juntos
        </p>
        <div className="flex items-center justify-center gap-3  text-primary md:text-lg [&>a>svg]:md:size-7 [&>a]:border-[1px] [&>a]:border-primary [&>a]:rounded-full [&>a]:p-2.5 ">
          <a href="ES CV-Dev.pdf" download="LucasRamos-Resume.pdf">
            Descargar CV
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lucas-ramos-5b4aa1246/"
          >
            <IconBrandLinkedin stroke={1} />
          </a>
          <a target="_blank" href="https://github.com/LucasEzequielRamos">
            <IconBrandGithub stroke={1} />
          </a>
          <a target="_blank" href="https://t.me/Lucas_Ezequiel_Ramos">
            <IconBrandTelegram stroke={1} />
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <img src="/assets/3d-image.webp" alt="image 3d to illustration" />
      </div>
    </section>
  );
};

export default Hero;
