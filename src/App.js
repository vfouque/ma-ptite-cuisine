import Receipe from "./components/Receipe/Receipe";
import { RECEIPES } from "./utils/data";
import "./App.css";
import SearchBarre from "./components/Header/SearchBarre/SearchBarre";

function App() {
  return (
    <div className="App">
      <SearchBarre />
      {RECEIPES.map((receipe, index) => (
        <Receipe key={index} data={receipe} />
      ))}
    </div>
  );
}

export default App;
