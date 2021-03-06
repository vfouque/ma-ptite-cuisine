import Receipe from "./components/Receipe/Receipe";
import {RECEIPES} from './utils/data'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Receipe data={RECEIPES[0]}/>
    </div>
  );
}

export default App;
