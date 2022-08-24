import logo from './logo.svg';
import './App.css';
import Seat from "./view/Seat.js"
import GamePlay from './view/GamePlay';

function App() {
 console.log("app init")
  return (
    <div className="App">
     <GamePlay/>
    </div>
  );
}

export default App;
