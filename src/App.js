import img from './champ.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <h3>
          fANTasy football 2021-2022 champ: Pee Piggins
        </h3>
        <h5>
          Runner Up: Tyler Stock
        </h5>
        <p> FMVP: Sun Gawd </p>
      </header>
    </div>
  );
}

export default App;
