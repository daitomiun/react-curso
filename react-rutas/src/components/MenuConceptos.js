import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Menu con enlaces html (no recomendado)</span>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">contacto</a>
        </li>
        <li>
          <span>componente link</span>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">contacto</Link>
          <Link to="/no-existe">Error 404</Link>
        </li>
        <li>
          <span>componente Navlink</span>
          {/* <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/acerca" activeClassName="active">
            Acerca
          </NavLink>
          <NavLink to="/contacto" activeClassName="active">
            Contacto
          </NavLink> */}

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? " active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/acerca"
            className={({ isActive }) => (isActive ? " active" : "")}
          >
            Acerca
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? " active" : "")}
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <span>parametros:</span>
          <Link to="/usuario/jonmircha">jonmircha</Link>
          <Link to="/usuario/kenai">kenai</Link>
        </li>
        <li>
          <span>parametros de consulta:</span>
          <Link to="/productos">productos</Link>
        </li>
        <li>
          <span>redirecciones:</span>
          <Link to="/about">About</Link>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <span>rutas anidadas:</span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>rutas privadas</span>
          <Link to="/login">login</Link>
          <Link to="/dashboard">dashboard</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
