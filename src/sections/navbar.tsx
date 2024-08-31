import { IconMoon } from "@tabler/icons-react";
// import { IconBrightnessUp } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <header className="flex w-screen fixed z-20 ">
      <nav className="flex pt-4 m-auto px-2 py-2 gap-3 text-sm items-center justify-center rounded-[99px] backdrop-blur-md bg-background/10  [&>a:hover]:text-primary [&>a]:duration-300">
        <a href="#experiencie">Experiencia</a>
        <a href="#proyects">Proyectos</a>
        <a href="#about">Sobre mi</a>
        <a href="#contact">Contacto</a>
        <div className="flex place-items-center">
          <button>
            <IconMoon stroke={1} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
