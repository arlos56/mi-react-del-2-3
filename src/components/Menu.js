import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <Link to="/">Inicio</Link> | 
      <Link to="/about">Acerca</Link> | 
      <Link to="/contact">Contacto</Link> | 
      <Link to="/users">Usuarios</Link>
    </nav>
  );
}

export default Menu;
