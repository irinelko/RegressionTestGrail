import logo from './ss-w.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Snapshot
          Irinel Tapalaga
        </p>
        <a
          className="LinkedIN-link"
          href="https://www.linkedin.com/in/irinel-tapalaga/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIN
        </a>
        <a
          className="Git-link"
          href="https://github.com/irinelko/RegressionTestGrail"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default App;
