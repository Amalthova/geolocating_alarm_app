import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [alarms, setAlarms] = useState([]);
  const alarmList = alarms.map(oneAlarm => {
    return <p>{ oneAlarm.alarm_name }</p>
  })
  
  
  useEffect(() => {
    // fetch(alarms)
    getAlarms();
  }, [])

  async function newAlarm() {

  }

  async function getAlarms() {
    const retrievedAlarms = await axios.get('/api/alarms');
    setAlarms(retrievedAlarms.data);
  }
  return (
    <div>
      <h1>yeeee</h1>
      { alarmList }
    </div>
  );
}

export default App;
