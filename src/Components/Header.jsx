const Header = () => {
  return (
    <nav className="flex flex-row justify-between items-center p-6">
      <div>
        LOGO
      </div>
      <div className="text-lg text-black font-semibold flex space-x-4">
        <p>Sobre mí</p>
        <p>Proyectos</p>
        <p>Contacto</p>
      </div>
    </nav>
  )
}

export default Header;