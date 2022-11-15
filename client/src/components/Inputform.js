
import { useState, useEffect, useRef, useId } from 'react';
import axios from 'axios';



export default function Inputform(props) {
  // const {
  //   alarmNameString,
  //   alarmTimeDate,
  //   alarmDaysString,
  //   alarmLatitudeDecimal,
  //   alarmLongitudeDecimal,
  //   alarmStatusBoolean
  // } = props;

  const id = useId();
  const [alarmNameString, setAlarmName] = useState();
  const [alarmDaysString, setAlarmDays] = useState(); //THe choice of days to repeat

  const [alarmTimeDate, setAlarmTime] = useState(); //Time

  const [alarmLatitudeDecimal, setAlarmLatitude] = useState();
  const [alarmLongitudeDecimal, setAlarmLongitude] = useState();
  const [alarmStatusBoolean, setAlarmStatus] = useState();
  const inputChange = ()=>{
    
  }
  
  async function createNewAlarm() {

    console.log(alarmNameString);
    console.log(alarmTimeDate);
    
    console.log("This is being triggered and something broke if you see it more than once");

    await axios.post('/api/alarms', {
      alarm_name: alarmNameString,
      alarm_days: alarmDaysString,
      alarm_time: alarmTimeDate,
      alarm_latitude: alarmLatitudeDecimal,
      alarm_longitude: alarmLongitudeDecimal,
      alarm_status: alarmStatusBoolean
    })
    .then(res => {console.log(res)});


  }

  return (
    <div>
      <form className="newAlarmForm">
        <input className="" type="text" placeholder="Alarm Name" value={ alarmNameString } onChange={(e) => setAlarmName(e.target.value)}></input>
        <input className="" type="time" placeholder="Alarm Time" value={ alarmTimeDate } onChange={(e) => setAlarmTime(e.target.value)}></input>
        <input name="" className="" type="checkbox" placeholder='monday'></input>
        <button className="" type="button" onClick={createNewAlarm}> Create Alarm </button>

      </form>
    </div>
  )
}