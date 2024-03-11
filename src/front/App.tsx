import { useState } from "react";
import "./App.css";
import "./index.css";
import RecallBoard from "./component/recallBoard.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RecallBoard />
    </>
  );
}

export default App;
