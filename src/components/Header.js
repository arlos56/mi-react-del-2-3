import Menu from './Menu';

function Header() {
  return (
    <header style={{ background: '#333', color: '#fff', padding: '1rem' }}>
      <h1>Mi Sitio React</h1>
      <Menu />
    </header>
  );
}

export default Header;
