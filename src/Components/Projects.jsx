import '@fortawesome/fontawesome-free/css/all.css'
import { projectLink, projectName } from '../utils/dataProject';

const Projects = () => {
  return (
    <section>
      <h1 className="font-black text-3xl text-center m-6">Proyectos creados</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 m-6 gap-4">
        {projectName.map((name, i) => (
          <div
            key={i}
            className="relative group flex flex-col items-center rounded-lg border border-cyan-900 
              overflow-hidden"
          >
            <div className="group-hover:opacity-0 transition-opacity duration-300 flex flex-col items-center">
              <img className="w-full" src={`/proyecto${i + 1}.png`} alt={`imagen de proyecto ${i + 1}`} />
              <p className="m-4 text-black font-semibold text-2xl">{name}</p>
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 
              group-hover:opacity-100 transition-opacity duration-300 bg-cyan-900">
              <p className='text-2xl text-white font-bold m-4'>{name}</p>
              <div className="flex space-x-6 text-white">
                <a 
                  href={projectLink.githubLink[i]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Repositorio de ${name}`}
                >
                  <i className="fab fa-github text-5xl hover:text-gray-300 transition-colors"></i>
                </a>

                <a 
                  href={projectLink.deployLink[i]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Despliegue de ${name}`}
                >
                  <i className="fas fa-laptop text-5xl hover:text-gray-300 transition-colors"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
