import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandTelegram } from "@tabler/icons-react";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center mt-40 w-11/12 mx-auto">
      <div className="text-sm md:text-lg 2xl:text-xl ml-auto flex flex-col text-center lg:text-start  lg:w-min   ">
        <h3 className="text-2xl md:text-4xl 2xl:text-5xl pb-2 lg:w-fit">
          Yo soy Lucas
        </h3>
        <h2 className="text-4xl md:text-6xl 2xl:text-7xl lg:w-[450px] 2xl:w-[500px] pb-8 font-bold  bg-gradient-to-r from-primary via-primary/90 to-font bg-clip-text text-transparent">
          Web Fullstack Developer
        </h2>
        <p className="pb-4 md:w-8/12 2xl:w-10/12 mx-auto lg:mx-0">
          Estoy disponible para trabajar, contactame, ideemos y desarrollemos tu
          proyecto juntos
        </p>
        <div className="flex items-center justify-center lg:justify-start lg:w-fit gap-3  text-primary  [&>a>svg]:md:size-7 [&>a]:border-[1px] [&>a]:border-primary [&>a]:rounded-full [&>a]:p-2.5 [&>a:hover]:scale-105 [&>a:hover]:bg-primary [&>a:hover]:text-font  [&>a]:duration-300">
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
      <div className="flex justify-center mx-auto lg:w-4/12 lg:max-w-[350px] 2xl:max-w-[380px] lg:mr-auto lg:mx-0 2xl:mx-auto lg:items-center mt-20 lg:mt-0">
        <img
          src="/assets/3d-image.webp"
          className=""
          alt="image 3d to illustration"
        />
      </div>
    </section>
  );
};

export default Hero;
