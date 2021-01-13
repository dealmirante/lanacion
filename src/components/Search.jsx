import React from "react";
import "../styles.css";

export const Search = () => {
  return (
    <div>
      <nav className="nav-main">
        <ul className="nav-menu-left">
          <li>
            <i className="fas fa-search"></i>
          </li>
        </ul>

        <ul className="nav-menu">
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Logo_La_Naci%C3%B3n.svg/1280px-Logo_La_Naci%C3%B3n.svg.png"
              alt="logo"
              className="logo-nacion"
            />
          </li>
        </ul>

        <ul className="nav-menu-right">
          <li>
            <button type="button" className="btn btn-warning">
              Suscribite
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-primary">
              Ingresar
            </button>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default Search;
