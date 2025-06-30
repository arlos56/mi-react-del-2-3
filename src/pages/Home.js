import Section from '../components/Section';
import logo from '../logo.svg';

function Home() {
  return (
    <div>
      <Section title="Bienvenido" content="Esta es la página principal." />
      <img src={logo} alt="Logo React" width="150" />
      <br />
      <a href="/about"><button>Ir a Acerca</button></a>
    </div>
  );
}

export default Home;
