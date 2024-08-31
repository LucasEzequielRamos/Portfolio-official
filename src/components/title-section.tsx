const TitleSection = ({ title }: { title: string }) => {
  return (
    <header className="flex items-center">
      <span className="w-1/12 h-1 bg-secondary flex"></span>
      <div className="w-10/12 p-2 rounded-lg mx-auto bg-secondary">
        <h2 className="text-3xl text-center tracking-wide font-bold ">
          {title}
        </h2>
      </div>
      <span className="w-1/12 h-1 bg-secondary flex"></span>
    </header>
  );
};

export default TitleSection;
