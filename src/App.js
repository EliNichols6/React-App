import logo from './logo.svg';
import './App.css';
import Container from './Container.js';
import ApiCall from './ApiCall';

function App() {
  return (
    <div className="App">
          <Container myValue="1"/>
      <header className="App-header">
          <ApiCall />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>

  );
}

export default App;
