import neel from './champ.jpeg';
import logo from "./fantasy.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
          <h4>fANTasy </h4>
          <img src={logo} style={{width: 50, height: 50, margin: 5 }} alt="logo"/>
          <h4> football</h4>
        </div>
        <h2>
          2021-2022 champ: Pee Piggins
        </h2>
        <img src={neel} className="App-logo" alt="neel" />
        <h5>
          Runner Up: Tyler Stock
        </h5>
        <p> FMVP: Sun Gawd </p>
      </header>
    </div>
  );
}

export default App;
