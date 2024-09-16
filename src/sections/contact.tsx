import {
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandTelegram,
} from "@tabler/icons-react";

const Contact = () => {
  return (
    <section id="contact" className="mt-20 mb-10 w-11/12 lg:w-8/12 mx-auto">
      <div className="mt-5 flex flex-col justify-between items-center py-2 gap-10">
        <h2 className="text-2xl lg:text-3xl font-bold">Contacto</h2>
        <div className="flex items-center justify-center gap-5 text-primary [&>a]:border-[2px] [&>a]:border-primary [&>a]:rounded-full [&>a]:p-2 [&>a:hover]:scale-105 [&>a:hover]:bg-primary [&>a:hover]:text-font  [&>a]:duration-300 [&>a>svg]:lg:size-12 ">
          <a
            href="https://www.linkedin.com/in/lucas-ramos-5b4aa1246/"
            target="_blank"
            aria-label="Link to my linkedin"
          >
            <IconBrandLinkedin size={30} stroke={1.5} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=lucaseramos13@gmail.com&su=Asunto&body=Mensaje"
            target="_blank"
            aria-label="Link to my github"
          >
            <IconBrandGmail size={30} stroke={1.5} />
          </a>
          <a
          href="https://t.me/Lucas_Ezequiel_Ramos"
            target="_blank"
            aria-label="Link to my telegram chat"
          >
            <IconBrandTelegram viewBox="1 0 24 24" size={30} stroke={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
