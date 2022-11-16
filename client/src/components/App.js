import { useState, useEffect, useRef, useId } from 'react';
import axios from 'axios';
import '../styles/App.css';
import Inputform from "./Inputform";
import Alarmtracker from "./Alarmtracker"

function App() {
  const [alarms, setAlarms] = useState([]);
  const [dateNow, setDate] = useState(new Date());

  const alarmList = alarms.map(oneAlarm => {
    return <p>{ oneAlarm.alarm_name }</p>
  })
  


  useState(() => {

    async function getAlarms() {
      const retrievedAlarms = await axios.get('/api/alarms');
      setAlarms(retrievedAlarms.data);
    }

    //Create clock that updates
    const currentDateAndTime = setInterval(() => {
      setDate(new Date()); 
    }, 1 * 1000);
    return () => {
      clearInterval(currentDateAndTime);
    };
  }, [])

  return (
    <div>
      <h1>yeeee</h1>
      { alarmList }
      <p>{`${ dateNow }`}</p>
      <h1>hello there</h1>
      <Alarmtracker></Alarmtracker>
      <Inputform></Inputform>
    </div>
  );
}

export default App;
