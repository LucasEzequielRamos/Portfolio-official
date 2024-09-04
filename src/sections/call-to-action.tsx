import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const CallToAction = () => {
  return (
    <section className="mt-20 w-11/12 mx-auto">
      <div className="flex gap-2  justify-between items-center bg-secondary py-2 px-4 rounded-3xl border border-primary">
        <div>
          <h2 className="text-lg w-48 ">¿Tienes algun proyecto en mente?</h2>
          <p className="text-xs mt-1">Trabajemos juntos, lo haremos realidad</p>
        </div>
        <div>
          <a
            href="#contact"
            className=" text-nowrap px-2 py-2 border-[1px] text-sm border-primary bg-primary rounded-full"
          >
            Contactame
          </a>
        </div>
      </div>

      <div className="mt-20">
        <VelocityScroll
          className="text-xl font-bold w-56  text-primary tracking-wide   "
          text="Podemos programarlo! "
        />
      </div>
    </section>
  );
};

export default CallToAction;
