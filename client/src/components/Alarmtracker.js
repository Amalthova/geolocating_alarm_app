// import e from "express";
import {useState, useEffect} from "react";
import api from '../index.js';

export default function AlarmTracker() {
  let alarmList = [
    {
      "id": "1",
      "alarm_name": "Greenwich",
      "alarm_days": "null",
      "alarm_time": "00:00:00",
      "alarm_latitude": "51.48257660",
      "alarm_longitude": "-0.00765890",
      "alarm_status": "false"
    },    
    {
      id: 2,
      alarm_name: "CC",
      alarm_days: null,
      alarm_time: "09:15:00",
      alarm_latitude: 35.6579296, 
      alarm_longitude: 139.7276436,
      alarm_status: true
    }
  ];
  
  // const [dateNow, setDateNow] = useState();
  // const [nextAlarm, setNextAlarm] = useState();
  const [currentLatitude, setCurrentLatitude] = useState();
  const [currentLongitude, setCurrentLongitude] = useState();

  const checkLocation = async () => {
      navigator.geolocation.getCurrentPosition( await function(position) {
        setCurrentLatitude(position.coords.latitude);
        setCurrentLongitude(position.coords.longitude);
    })
  }

  const alarmGetter = () => {
    api.get('/api/alarms', {
      responseType: "json",
    })
    .then(function (response) {
      alarmList = response;
    })
  }

  const compareLocation = () => {
    if (alarmList[1].alarm_latitude - currentLatitude > 0.0000001 || alarmList[1].alarm_longitude - currentLongitude > 0.0000001) {
      alarmList[1].alarm_status = false;

      // api.put("/api/alarms/", {
      //   alarm_status
      // })

    } else {
      alarmList[1].alarm_status = true;
    }
  }

  useEffect(() => {
    const interval = setInterval( async () => {
      await alarmGetter();
      await checkLocation();
      await compareLocation();
      await console.log(alarmList);
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  // const alarmDisplay = async () => {
    
  //   await alarmGetter();

  //   for (let i = 0; i < alarmList.length; i++) {
  //     return (
  //       <div>
  //         <h4>{`Name: ${alarmList[i].alarm_name}`}</h4>
  //         <div>{`Time: ${alarmList[i].alarm_time}`}</div>
  //         <div>{`Latitude: ${alarmList[i].alarm_latitude}`}</div>
  //         <div>{`Longitude: ${alarmList[i].alarm_longitude}`}</div>
  //         <div>{`Status: ${alarmList[i].alarm_status}`}</div>
  //       </div>
  //     )
  //   }
  // }

  // setInterval(alarmGetter)

  return (
    <div>Hello from alarm tracker
      <div id="alarm"></div>

      {/* {alarmDisplay} */}

      <div>
        {alarmList.map((entry)=>
          <ul>
            <h4>{`Name:  ${entry.alarm_name}`}</h4>
            <div>{`Time: ${entry.alarm_time}`}</div>
            <div>{`Latitude: ${entry.alarm_latitude}`}</div>
            <div>{`Longitude: ${entry.alarm_longitude}`}</div>
            <div>{`Status: ${entry.alarm_status}`}</div>
          </ul>
        )}
      </div>
    </div>
  )
};
