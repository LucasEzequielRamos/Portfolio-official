import {
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandTelegram,
} from "@tabler/icons-react";

const Contact = () => {
  return (
    <section id="contact" className="mt-20 mb-5 w-11/12 lg:w-8/12 mx-auto">
      <div className="mt-5 flex justify-between items-center py-2 gap-4">
        <h2 className="text-2xl font-bold">Contacto</h2>
        <div className="flex items-center justify-center gap-5 text-primary [&>a]:border-[2px] [&>a]:border-primary [&>a]:rounded-full [&>a]:p-2 [&>a:hover]:scale-105 [&>a:hover]:bg-primary [&>a:hover]:text-font  [&>a]:duration-300 ">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lucas-ramos-5b4aa1246/"
          >
            <IconBrandLinkedin size={30} stroke={1.5} />
          </a>
          <a
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=lucaseramos13@gmail.com&su=Asunto&body=Mensaje"
          >
            <IconBrandGmail size={30} stroke={1.5} />
          </a>
          <a target="_blank" href="https://t.me/Lucas_Ezequiel_Ramos">
            <IconBrandTelegram size={30} stroke={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
