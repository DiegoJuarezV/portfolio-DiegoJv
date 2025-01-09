import { Carousel, Typography, Button } from "@material-tailwind/react";
import { DialogSizes } from "./InfoModal";
import { details } from "../utils/detailProject";
 
export function CarouselWithContent() {
  const { title, body } = details;

  return (
    <>
    <h1 id="infoProjects" className="text-2xl lg:text-4xl font-black text-center mt-16">Información detallada sobre proyectos</h1>
    <Carousel className="rounded-xl h-96 w-3/4 mt-7 mb-5 mx-auto">
      <div className="relative h-full w-full">
        <img
          src="/imagenInfoProyect1.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Administrador de Odontólogos
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-4 lg:12 opacity-80 text-base lg:text-xl"
            >
              Proyecto hecho durante la materia de FrontEnd III, dentro de la cursada del certificado Certified Tech Developer.
            </Typography>
            <div className="flex justify-center">
              <DialogSizes title={title[0]} body={body[0]} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="/ControlGastos.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Control de gastos
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-4 lg:12 opacity-80 text-base lg:text-xl"
            >
              Proyecto para el registro de un presupuesto y administración de distintos gastos, donde puedes registrar, eliminar o editar conforme a tus necesidades. 
            </Typography>
            <div className="flex justify-center">
              <DialogSizes title={title[1]} body={body[1]} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="/Guitarras.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Tienda de Guitarras
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-4 lg:12 opacity-80 text-base lg:text-xl"
            >
              Catalogo de instrumentos; guitarras donde puedes seleccionarlas para agregarlas a un carrito de compras, donde podrás agregar más o menos instrumentos en esa sección. 
            </Typography>
            <div className="flex justify-center">
              <DialogSizes title={title[2]} body={body[2]} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="/veterinaria.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Registro de veterinaria
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-4 lg:12 opacity-80 text-base lg:text-xl"
            >
              Proyecto que mediante un formulario registra pacientes, en este caso mascotas o animales para tener un control adecuado sobre la condición y cantidad de mascotas ingresadas, asi como eliminar, editar o agregar nuevos pacientes. 
            </Typography>
            <div className="flex justify-center">
              <DialogSizes title={title[3]} body={body[3]} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="/calorias.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Control de calorias
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-4 lg:12 opacity-80 text-base lg:text-xl"
            >
              Este contador registra lo que has consumido a lo largo de un periodo de tiempo, además de lo que has quemado en actividades fisicas para tener un balance adecuado y verificar lo que necesitas en ese momento. 
            </Typography>
            <div className="flex justify-center">
              <DialogSizes title={title[4]} body={body[4]} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="/consumo.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Mostrador de productos y consumo
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-4 lg:12 opacity-80 text-base lg:text-xl"
            >
              La finalidad es mostrar el menú de comida ofrecida en un establecimiento donde podrás visualizar el total de la compra, agregar propina y eliminar lo agregado si asi lo deseas.
            </Typography>
            <div className="flex justify-center">
              <DialogSizes title={title[5]} body={body[5]} />
            </div>
          </div>
        </div>
      </div>
    </Carousel>
    </>
  );
}