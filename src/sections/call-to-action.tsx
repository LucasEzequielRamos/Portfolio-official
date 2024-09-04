import PulsatingButton from "@/components/magicui/pulsating-button";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const CallToAction = () => {
  return (
    <section className="mt-20 w-11/12 mx-auto">
      <div className="flex gap-2  justify-between items-center bg-secondary py-2 px-4 rounded-3xl border border-primary">
        <div>
          <h2 className="text-lg w-48 ">¿Tienes algun proyecto en mente?</h2>
          <p className="text-xs mt-1">Trabajemos juntos, lo haremos realidad</p>
        </div>

        <a href="#contact" className=" ">
          <PulsatingButton>Contactame</PulsatingButton>
        </a>
      </div>

      <div className="mt-20">
        <VelocityScroll
          className="text-base md:text-xl  font-bold text-primary "
          text="Podemos programarlo! "
        />
      </div>
    </section>
  );
};

export default CallToAction;
