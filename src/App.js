import "./App.css";
import PathFindingVisualizer from "./components/PathFindingVisualizer/PathFindingVisualizer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PathFindingVisualizer></PathFindingVisualizer>
    </div>
  );
}

export default App;
