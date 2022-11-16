import { useState } from 'react';
import '../styles/App.css';
import Inputform from "./Inputform";
import Alarmtracker from "./Alarmtracker"

function App() {
  const [dateNow, setDate] = useState(new Date());

  useState(() => {

    //Create clock that updates
    const currentDateAndTime = setInterval(() => {
      setDate(new Date()); 
    }, 10 * 1000);
    return () => {
      clearInterval(currentDateAndTime);
    };
  }, [])

  return (
    <div>
      <h1>yeeee</h1>
      <p>{`${ dateNow }`}</p>
      <h1>hello there</h1>
      <Alarmtracker></Alarmtracker>
      <Inputform></Inputform>
    </div>
  );
}

export default App;
