import TitleSection from "@/components/title-section";
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "express",
  "prisma",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "vite",
  "nextdotjs",
  "mysql",
  "mongodb",
  "mui",
  "bootstrap",
];

const Technologies = () => {
  return (
    <section id="technologies" className=" mt-20 w-11/12 mx-auto">
      <TitleSection title="Tecnologias" />
      <div className="relative flex h-full w-full mx-auto max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  mt-10 bg-radial-gradient">
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
};

export default Technologies;
