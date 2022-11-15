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

  class Board extends react.component {
    renderSquare(i) {
      return <Square value={i} />
    }
  }

  return (
    <div>
      <h1>yeeee</h1>
      { alarmList }
      <p>{`${ dateNow }`}</p>
      <form>
        <input/>
        <button className="square" onClick={function() { console.log('click'); }}>
          {this.props.value}
        </button>
        <button> Monday </button>
      </form>
    </div>
  );
}

export default App;
