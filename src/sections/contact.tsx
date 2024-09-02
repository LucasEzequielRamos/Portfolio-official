import {
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandTelegram,
} from "@tabler/icons-react";

const Contact = () => {
  return (
    <section id="contact" className="mt-20 w-11/12 mx-auto">
      <h2 className="text-2xl font-bold">Contacto</h2>
      <div className="mt-5 flex flex-col py-2 gap-4">
        <h3 className="">
          Puedes contactarme por cualquiera de estas plataformas
        </h3>
        <div className="flex items-center justify-center gap-5 text-primary [&>a]:border-[2px] [&>a]:border-primary [&>a]:rounded-full [&>a]:p-2 ">
          <a href="#">
            <IconBrandLinkedin size={40} stroke={1.5} />
          </a>
          <a href="#">
            <IconBrandGmail size={40} stroke={1.5} />
          </a>
          <a href="#">
            <IconBrandTelegram size={40} stroke={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
