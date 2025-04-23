import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Developers</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll align-items-start">
            <li className="nav-item active">
              <a className="dropdown-item" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="dropdown-item" href="#">Acerca de</a>
            </li>
            <li className="nav-item">
              <a className="dropdown-item" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;