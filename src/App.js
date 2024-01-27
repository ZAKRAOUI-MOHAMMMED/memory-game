import { useSelector } from "react-redux";
import "./App.css";
import FirstPage from "./components/FirstPage";
import LosePage from "./components/LosePage";
import WinPage from "./components/WinPage";
import GamePage from "./components/GamePage";

function App() {
  const state = useSelector((e) => e.data);
  console.log(state);
  return (
    <div className="App">
      {state.isPlaying === false ? (
        <FirstPage />
      ) : state.finished === true ? (
        <LosePage />
      ) : state.win === true ? (
        <WinPage />
      ) : (
        <GamePage />
      )}
    </div>
  );
}

export default App;
