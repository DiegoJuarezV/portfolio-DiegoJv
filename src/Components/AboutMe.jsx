import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faServer, faTools } from '@fortawesome/free-solid-svg-icons'
import { Badge, Button } from '@material-tailwind/react'

const AboutMe = () => {
  return (
    <section className="flex flex-col">
      <div className="mt-10 w-full flex justify-center">
        <img 
          src="/desarrollador-ejemplo.svg" 
          alt="logo de perfil"
          className="h-24 rounded-full"  
        />
      </div>
      <div className="text-center mt-10 w-full">
        <h1 className="text-black text-xl md:text-4xl font-bold uppercase mb-4">Bienvenidos a mi sitio web</h1>
        <h3 className="text-base md:text-xl font-bold">Portafolio de proyectos de desarrollo web</h3>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <img 
          src="/hero-inferior.svg" 
          alt="imagen de programación"
          className="w-full md:w-3/4 h-[18rem]" 
        />
      </div>
      <div className="bg-cyan-900 h-72 flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl text-white font-bold mb-5">Sobre mí</h1>
        <h1 className="text-white w-3/4 md:h-1/2 text-center text-sm md:text-xl">
          Soy Diego Juárez, Ingeniero Industrial y actualmente busco una oportunidad como 
          Desarrollador Web, tanto backend como en frontend, cuento con conociemientos en React, Tailwind, 
          Typescript y en backend en tecnologías como Spring Boot, Spring Security y Bases de Datos como MySQL, 
          y siempre busco aprender tecnologías nuevas.
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row m-10 space-y-4 lg:space-y-0 lg:space-x-4 text-center h-auto 
        px-4 w-full mx-auto">
        <div className="flex items-center justify-center hover:bg-black hover:text-white flex-col border 
          border-black rounded-lg p-4 w-full lg:w-1/3">
          <FontAwesomeIcon icon={faLaptop} className='text-4xl mb-4 text-cyan-800' /> 
          <div className="mb-4">
            <h1 className="text-xl font-bold mb-4">Desarrollo FrontEnd</h1>
            <p>
              Manejo JavasScript, Libreria de React, TypeScrip, que ayudan a generar sitios web dinámicos y escalables
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge color="blue">
              <Button className='bg-cyan-800 hover:bg-cyan-900 cursor-auto text-[7px] lg:text-[9px]'>
                React
              </Button>
            </Badge>
            <Badge color="blue">
              <Button className='cursor-auto hover:bg-cyan-900 text-[7px] lg:text-[9px]'>Tailwind</Button>
            </Badge>
            <Badge color="blue">
              <Button className='bg-cyan-800 hover:bg-cyan-900 cursor-auto text-[7px] lg:text-[9px]'>
                TypeScript
              </Button>
            </Badge>
          </div>
        </div>
        <div className="flex items-center justify-center hover:bg-black hover:text-white flex-col 
          border border-black rounded-lg p-4 w-full lg:w-1/3">
          <FontAwesomeIcon icon={faServer} className='text-4xl mb-4 text-cyan-800' />
          <div className="mb-4">
            <h1 className="text-xl font-bold mb-4">Desarrollo BackEnd</h1>
            <p>
              Desarrollo de parte del backend para aplicaciones web funcionales, API REST y manejo de Bases de Datos
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Badge color="blue">
              <Button className='bg-cyan-800 hover:bg-cyan-900 cursor-auto text-[7px] lg:text-[9px]'>
                Spring Boot
              </Button>
            </Badge>
            <Badge color="blue">
              <Button className='cursor-auto hover:bg-cyan-900 text-[7px] lg:text-[9px]'>
                Spring Security
              </Button>
            </Badge>
            <Badge color="blue">
              <Button className='bg-cyan-800 hover:bg-cyan-900 cursor-auto text-[7px] lg:text-[9px]'>
                MySql
              </Button>
            </Badge>
          </div>         
        </div>
        <div className="flex items-center justify-center hover:bg-black hover:text-white flex-col 
          border border-black rounded-lg p-4 w-full lg:w-1/3">
          <FontAwesomeIcon icon={faTools} className='text-4xl mb-4 text-cyan-800' />
          <div className="mb-4">
            <h1 className="text-xl font-bold mb-4">Herramientas</h1>
            <p>
              Manejo de herramientas para desarrolladores como Git, GitHub y teconologías como AWS y Docker
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Badge color="blue">
              <Button className='bg-cyan-800 hover:bg-cyan-900 cursor-auto text-[7px] lg:text-[9px]'>
                AWS
              </Button>
            </Badge>
            <Badge color="blue">
              <Button className='cursor-auto hover:bg-cyan-900 text-[7px] lg:text-[9px]'>Git</Button>
            </Badge>
            <Badge color="blue">
              <Button className='bg-cyan-800 hover:bg-cyan-900 cursor-auto text-[7px] lg:text-[9px]'>
                Docker
              </Button>
            </Badge>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default AboutMe;