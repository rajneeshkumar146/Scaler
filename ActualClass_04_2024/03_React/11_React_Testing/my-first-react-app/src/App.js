
import './App.css'; import Counter from './Components/Counter';
import InputCounter from './Components/CounterInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <InputCounter></InputCounter>
      </main>
    </div>
  );
}

export default App;
