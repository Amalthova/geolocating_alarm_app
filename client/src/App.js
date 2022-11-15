import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [alarms, setAlarms] = useState([]);
  const [dateNow, setDate] = useState(new Date());

  const alarmList = alarms.map(oneAlarm => {
    return <p>{ oneAlarm.alarm_name }</p>
  })
  
  
  useEffect(() => {
    //Create clock that updates
    const currentDateAndTime = setInterval(() => {
      setDate(new Date()); 
    }, 1 * 1000);
    return () => {
      clearInterval(currentDateAndTime);
    };
      // let timeInMilliseconds = Date.now()
      // let minute = 1000 * 60;
      // let hour = minute * 60;
      // let day = hour * 24;
      // let year = day * 365 //Leap years????
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
      <p>{`${ dateNow }`}</p>
      
      <form className="newAlarmForm">
        
        <input className="" type="text" placeholder="Alarm Name" ></input>
        <button className="dayOptions" onClick={(event) => {event.preventDefault(); this.setState({value: "Monday:True"}) }}>
          Alarm Every Sunday{/* {this.state.value} */}
        </button>
        <button className="dayOptions" onClick={(event) => {event.preventDefault(); this.setState({value: "Monday:True"}) }}>
          Alarm Every Monday{/* {this.state.value} */}
        </button>
        <input className="" type="time" placeholder="Alarm Time" ></input>
       
        <button> Create Alarm </button>

      </form>
    </div>
  );
}

export default App;
