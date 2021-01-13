import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <section className="nav-main">
        <ul className="sec-menu-left">
          <li>
            <a href="https://www.facebook.com/lanacion" target="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/LANACION" target="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/lanacioncom/"
              target="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="http://servicios.lanacion.com.ar/herramientas/rss/ayuda"
              target="noreferrer"
            >
              <i className="fas fa-rss"></i>
            </a>
          </li>
        </ul>

        <ul className="sec-menu">
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Logo_La_Naci%C3%B3n.svg/1280px-Logo_La_Naci%C3%B3n.svg.png"
              alt="logo"
              className="log-nac"
            />
          </li>
        </ul>

        <ul className="sec-menu-right">
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=app.lanacion.activity&hl=es_419"
              target="noreferrer"
            >
              <i className="fab fa-google-play"></i>
            </a>
          </li>
          <li>
            <a
              href="https://apps.apple.com/ar/app/la-nacion/id410689702"
              target="noreferrer"
            >
              <i className="fab fa-app-store"></i>
            </a>
          </li>
        </ul>
      </section>

      <section className="nav-main">
        <ul className="sec-menu-left-2">
          <li>
            <a
              href="http://especiales.lanacion.com.ar/varios/mapa-sitio/index.html"
              target="noreferrer"
            >
              {" "}
              Mapa del sitio
            </a>
          </li>
          <li>
            <a
              href="https://www.contacto.lanacion.com.ar/ayuda"
              target="noreferrer"
            >
              {" "}
              Ayuda
            </a>
          </li>
          <li>
            <a
              href="https://www.contacto.lanacion.com.ar/tyc"
              target="noreferrer"
            >
              {" "}
              Términos y condiciones
            </a>
          </li>
          <li>
            <a href="https://www.lanacion.in/#/" target="noreferrer">
              {" "}
              ¿Cómo anunciar?
            </a>
          </li>
          <li>
            <a
              href="https://suscripciones.lanacion.com.ar/suscribirme/"
              target="noreferrer"
            >
              {" "}
              Suscribirse al diario impreso
            </a>
          </li>
        </ul>

        <ul className="sec-menu-right-2">
          <li>
            <a
              href="https://policies.google.com/terms?hl=es-419"
              target="noreferrer"
            >
              {" "}
              Condiciones
            </a>
          </li>
          <li>
            <a
              href="https://policies.google.com/privacy?hl=es-419"
              target="noreferrer"
            >
              {" "}
              Privacidad
            </a>
          </li>
        </ul>
      </section>

      <section className="nav-main">
        <ul className="sec-menu-right-2">
          <li>
            <p>Copyright 2019 SA LA NACION | Todos los derechos reservados</p>
          </li>
        </ul>
        <ul className="sec-menu-left-2">
          <li>
            <p>Miembro de GDA. Grupo de Diarios América</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
