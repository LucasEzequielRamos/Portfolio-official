import { useEffect, useState } from "react";

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
          window.scrollY >= sectionTop - sectionHeight / 3 &&
          window.scrollY < sectionTop + sectionHeight - sectionHeight / 3
        ) {
          currentSection = section.getAttribute("id");
        }

        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
          currentSection = "contact";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="flex w-screen fixed z-20">
      <nav className="flex mt-1 m-auto p-2 md:p-3 gap-3 md:gap-5 text-sm md:text-base items-center justify-center rounded-[99px] backdrop-blur-md bg-background/10 [&>a:hover]:text-primary [&>a]:duration-300 shadow-box-shadow">
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
