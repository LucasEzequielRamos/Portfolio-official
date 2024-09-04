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
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lucas-ramos-5b4aa1246/"
          >
            <IconBrandLinkedin size={40} stroke={1.5} />
          </a>
          <a
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=lucaseramos13@gmail.com&su=Asunto&body=Mensaje"
          >
            <IconBrandGmail size={40} stroke={1.5} />
          </a>
          <a target="_blank" href="https://t.me/Lucas_Ezequiel_Ramos">
            <IconBrandTelegram size={40} stroke={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
