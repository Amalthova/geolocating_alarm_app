
import { useState, useEffect, useRef, useId } from 'react';
import axios from 'axios';



export default function Inputform(props) {
  const {
    alarmNameValue,
    alarmTimeValue,
    alarmDays,
    alarmLatitude,
    alarmLongitude,
    alarmStatus
  } = props;

  const id = useId();
  const [alarmName, setAlarmName] = useState([]);
  const [alarmTime, setAlarmTime] = useState([]);
  

  
  async function createNewAlarm() {

    console.log(alarmNameValue);
    console.log(alarmTimeValue);
    
    console.log("This is being triggered and something broke if you see it more than once");

    await axios.post('/api/alarms', {
      alarm_name: alarmNameValue,
      alarm_days: alarmDays,
      alarm_time: alarmTimeValue,
      alarm_latitude: alarmLatitude,
      alarm_longitude: alarmLongitude,
      alarm_status: alarmStatus
    })
    .then(res => {console.log(res)});


  }

  return (
    <div>
      <form className="newAlarmForm">
        <input className="" type="text" placeholder="Alarm Name" value={ alarmNameValue } onChange={(e) => setAlarmName(e.target.value)}></input>
        <input className="" type="time" placeholder="Alarm Time" value={ alarmTimeValue } onChange={(e) => setAlarmTime(e.target.value)}></input>
        <input name="" className="" type="checkbox" placeholder='monday'></input>
        <button className="" type="button" onClick={createNewAlarm()}> Create Alarm </button>

      </form>
    </div>
  )
}