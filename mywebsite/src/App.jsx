import { useState } from "react";
import { Header } from "./Header";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="div">
      <Header />
    </div>
  );
}

export default App;
