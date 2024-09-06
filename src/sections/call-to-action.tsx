import PulsatingButton from "@/components/magicui/pulsating-button";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const CallToAction = () => {
  return (
    <section className="mb-40 md:mb-52 mt-20  mx-auto">
      <div className="flex gap-2 w-11/12 mx-auto justify-between items-center bg-secondary py-2 md:py-8 px-4 md:px-6 rounded-3xl border border-primary">
        <div className="">
          <h2 className="text-lg md:text-2xl font-bold ">
            ¿Tienes algun proyecto en mente?
          </h2>
          <p className="text-xs md:text-base mt-1">
            Trabajemos juntos, lo haremos realidad
          </p>
        </div>

        <a href="#contact" className="">
          <PulsatingButton>Contactame</PulsatingButton>
        </a>
      </div>

      <div className="mt-16  absolute">
        <VelocityScroll
          className="text-base md:text-xl  font-bold bg-primary text-font my-1 "
          text="Podemos programarlo! "
        />
      </div>
    </section>
  );
};

export default CallToAction;
