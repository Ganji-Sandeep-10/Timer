import { useState, useRef } from "react";

function App() {
  const [time, setTime] = useState<number>(0);
  const [flag, setFlag] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const help = () => {
    if (!flag) {
      // store the interval id in the ref (window.setInterval returns a number)
      timerRef.current = window.setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    setFlag((prev) => !prev);
  };

  return (
    <>
      <h3>Timer</h3>
      <h1>{time}</h1>
      <button onClick={help}>{flag ? "Stop" : "Start"}</button>
    </>
  );
}

export default App;
