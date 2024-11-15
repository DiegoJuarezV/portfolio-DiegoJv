import { Badge, Button } from '@material-tailwind/react'

const AboutMe = () => {
  return (
    <section className="flex flex-col">
      <div className="mt-10">
        <img 
          src="/desarrollador-ejemplo.svg" 
          alt="logo de perfil"
          className="h-24 rounded-full mx-auto"  
        />
      </div>
      <div className="text-center mt-10">
        <h1 className="text-black text-4xl font-bold uppercase mb-4">Bienvenidos a mi sitio web</h1>
        <h3 className="text-xl font-bold">Portfolio de proyectos de desarrollo web</h3>
      </div>
      <div className=" mt-10">
        <img 
          src="/hero-inferior.svg" 
          alt="imagen de programación"
          className="w-3/4 mx-auto h-[18rem]" 
        />
      </div>
      <div className="bg-cyan-900 h-72 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white font-bold mb-5">Sobre mí</h1>
        <h1 className="text-white font-bold w-1/2 text-center text-lg">
        Soy Diego Juárez, Ingeniero Industrial titulado y actualmente busco una oportunidad como Desarrollador Web, tanto backend como en frontend, cuento con conociemientos como React, Tailwind, Typescript y en backend en tecnologías como Spring Boot, Spring Security y Bases de Datos como MySQL, constantemente me actualizo en los distintos frameworks y busco aprender tecnologías nuevas.
        </h1>
      </div>

      <div className="flex flex-row m-10 space-x-4 text-center h-64">
        <div className="flex items-center justify-center flex-col border border-black rounded-lg p-4">
          <i className=""></i> 
          <div className="mb-4">
            <h1 className="text-xl text-black font-bold mb-4">Desarrollo FrontEnd</h1>
            <p>
              Manejo JavasScript, Libreria de React, TypeScrip, que ayudan a generar sitios web dinámicos y escalables
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge color="blue">
              <Button className='cursor-auto hover:bg-cyan-900'>JavaScript</Button>
            </Badge>
            <Badge color="blue">
              <Button className='bg-cyan-800 hover:bg-cyan-900 cursor-auto'>React</Button>
            </Badge>
            <Badge color="blue">
              <Button className='cursor-auto hover:bg-cyan-900'>Tailwind</Button>
            </Badge>
            <Badge color="blue">
              <Button className='bg-cyan-800 hover:bg-cyan-900 cursor-auto'>TypeScript</Button>
            </Badge>
        </div>
          
        </div>
        <div className="flex items-center justify-center flex-col border border-black rounded-lg p-4">
          <i className=""></i>
          <div className="mb-4">
            <h1 className="text-xl text-black font-bold mb-4">Desarrollo BackEnd</h1>
            <p>
              Manejo JavasScript, Libreria de React, TypeScrip, que ayudan a generar sitios web dinámicos y escalables
            </p>
          </div>
          <div>Badges</div>         
        </div>
        <div className="flex items-center justify-center flex-col border border-black rounded-lg p-4">
          <i className=""></i>
          <div className="mb-4">
            <h1 className="text-xl text-black font-bold mb-4">Desarrollo FrontEnd</h1>
            <p>
              Manejo JavasScript, Libreria de React, TypeScrip, que ayudan a generar sitios web dinámicos y escalables
            </p>
          </div>
          <div>Badges</div>
        </div>
      </div>  
    </section>
  )
}

export default AboutMe;