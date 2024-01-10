import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2022 Mi Empresa. Todos los derechos reservados.</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Acerca de</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
