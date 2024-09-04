import { IconMoon } from "@tabler/icons-react";
import { useEffect, useState } from "react";
// import { IconBrightnessUp } from "@tabler/icons-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string | undefined>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop - sectionHeight / 3 ||
          window.scrollY + window.innerHeight >= document.body.scrollHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="flex w-screen fixed z-20">
      <nav className="flex mt-1 m-auto px-2 py-2 gap-3 text-sm items-center justify-center rounded-[99px] backdrop-blur-md bg-background/10 [&>a:hover]:text-primary [&>a]:duration-300">
        <a
          href="#experiencie"
          className={activeSection === "experiencie" ? "text-primary" : ""}
        >
          Experiencia
        </a>
        <a
          href="#projects"
          className={activeSection === "projects" ? "text-primary" : ""}
        >
          Proyectos
        </a>
        <a
          href="#about-me"
          className={activeSection === "about-me" ? "text-primary" : ""}
        >
          Sobre mí
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "text-primary" : ""}
        >
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
