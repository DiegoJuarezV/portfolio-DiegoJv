import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <div id='contact' className="relative bg-blue-gray-500 mt-24 py-9 flex flex-col items-center gap-6 
      text-white text-center">
      <div className="w-full lg:w-1/2 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        flex flex-row gap-4 bg-gray-900 h-24 rounded-xl p-4 items-center justify-center">
        <h3 className="text-lg font-bold">Hablemos</h3>
        <p>Estaré entusiasmado de formar parte de tu proyecto</p>
        <a
          href="mailto:diegojve27@gmail.com"
          className="border border-white rounded-lg p-2 flex items-center gap-2 
            hover:bg-gray-800 transition-colors"
          aria-label="Enviar correo"
        >
          <span>Contacto</span>
          <i className="fas fa-envelope text-base"></i>
        </a>
      </div>
      <p className="w-1/2 mt-16 font-bold">
        Portafolio de proyectos 
      </p>
      <div className="flex gap-6">
        <a
          href="https://github.com/DiegoJuarezV"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link de Github"
        >
          <i className="fab fa-github text-3xl hover:text-gray-300 transition-colors"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/diego-ju%C3%A1rez-dev-ing/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link de LinkedIn"
        >
          <i className="fab fa-linkedin text-3xl hover:text-gray-300 transition-colors"></i>
        </a>
        <a
          href="mailto:diegojve27@gmail.com"
          aria-label="Enviar correo"
        >
          <i className="fas fa-envelope text-3xl hover:text-gray-300 transition-colors"></i>
        </a>
      </div>
      <p className="text-sm">Creado por Diego Juárez (2024) &#169;</p>
    </div>
  );
};

export default Footer;
