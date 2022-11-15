
import { useState, useEffect, useId } from 'react';
import axios from 'axios';



export default function Inputform({ props }) {
  const id = useId();
  const [ alarmName, setAlarmName] = useState('');
  const [ alarmTime, setAlarmTime]= useState('');

  async function createNewAlarm() {
    console.log(alarmName);
    console.log(alarmTime);
    console.log("CREATE AN ALARM");
  }

  return (
    <div>
      <form className="newAlarmForm">
        <input className="" type="text" placeholder="Alarm Name" value={ alarmName } onChange={e => setAlarmName(e.target.value)} ></input>
        <input className="" type="time" placeholder="Alarm Time" value={ alarmTime } onChange={e => setAlarmTime(e.target.value)} ></input>
        <button className="" onClick={console.log(createNewAlarm())}> Create Alarm </button>

      </form>
    </div>
  )
}