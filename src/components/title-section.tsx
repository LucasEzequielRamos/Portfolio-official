const TitleSection = ({ title }: { title: string }) => {
  return (
    <header className="flex items-center">
      <span className="w-1/12 h-1 md:h-2 bg-secondary flex"></span>
      <div className="w-10/12 p-2 md:p-3 rounded-lg mx-auto bg-secondary">
        <h2 className="text-3xl md:text-4xl 2xl:text-5xl text-center tracking-wide font-bold ">
          {title}
        </h2>
      </div>
      <span className="w-1/12 h-1 md:h-2 bg-secondary flex"></span>
    </header>
  );
};

export default TitleSection;
