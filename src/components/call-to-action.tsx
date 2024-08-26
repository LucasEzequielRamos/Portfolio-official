const CallToAction = () => {
  return (
    <section className="mt-20 w-11/12 mx-auto">
      <div className="flex gap-3 h-20 justify-center items-center bg-secondary p-2 rounded-3xl border border-primary">
        <div className="">
          <h2 className="text-lg">Tienes algun proyecto en mente?</h2>
          <p className="text-xs mt-1">Trabajemos juntos, lo haremos realidad</p>
        </div>
        <div>
          <a
            href="#contact"
            className="py-2 px-2 border-[1px] text-sm border-primary bg-primary rounded-full"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
