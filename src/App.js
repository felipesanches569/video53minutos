//componentes del metodo de trabajo jsx
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//importar componentes
import Micomponente from './components/Micomponente';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Curso de reate con hola mundo JUAN.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section className='componentes'>
        <Micomponente />
      </section>
      </header>
     
      
    </div>

  );
}

export default App;
