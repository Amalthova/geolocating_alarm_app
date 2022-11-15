import { useState, useEffect, useId } from 'react';
import axios from 'axios';
import '../styles/App.css';
import Inputform from "./Inputform";

function App() {
  const [alarms, setAlarms] = useState([]);
  const [dateNow, setDate] = useState(new Date());

  const alarmList = alarms.map(oneAlarm => {
    return <p>{ oneAlarm.alarm_name }</p>
  })
  
  // const createNewAlarm = () => {
  // }

  useEffect(() => {
    //Create clock that updates
    const currentDateAndTime = setInterval(() => {
      setDate(new Date()); 
    }, 1 * 1000);
    return () => {
      clearInterval(currentDateAndTime);
    };

  }, [])

  async function getAlarms() {
    const retrievedAlarms = await axios.get('/api/alarms');
    setAlarms(retrievedAlarms.data);
  }

  return (
    <div>
      <h1>yeeee</h1>
      { alarmList }
      <p>{`${ dateNow }`}</p>
      <h1>hello there</h1>
    <Inputform></Inputform>
    </div>
  );
}

export default App;
