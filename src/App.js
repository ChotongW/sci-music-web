import "./App.css";
import { useState } from "react";
import Homepage from "./components/Homepage";
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>{count} timesLet's start</button>;
}

function App() {
  return (
    <div>
      <Homepage />
      <MyButton />
    </div>
  );
}

export default App;
