import { Route, Routes } from "react-router-dom";
import "./App.css";
import Primera from "./components/primera";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Primera} />
      </Routes>
    </div>
  );
}

export default App;
