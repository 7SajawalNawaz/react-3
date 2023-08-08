import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Counter Example</h1>
      </header>
      <main>
        <Counter />
      </main>
    </div>
  );
}

export default App;
