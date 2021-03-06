import Receipe from "./components/Receipe/Receipe";
import { RECEIPES } from "./utils/data";
import "./App.css";

function App() {
  return (
    <div className="App">
      {RECEIPES.map((receipe, index) => (
        <Receipe key={index} data={receipe} />
      ))}
    </div>
  );
}

export default App;
