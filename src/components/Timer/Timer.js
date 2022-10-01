import React, { useEffect, useState } from "react";
import styles from "./Timer.module.scss";
import Crucials from "./Crucials/Crucials";

export default function Timer() {
  
  
  let Seconds = 0;
  let Minutes = 0;
  let Hours = 5;
  const [Stimer, setSTimer] = React.useState(Seconds);
  const [Mtimer, setMTimer] = React.useState(Minutes);
  const [Htimer, setHTimer] = React.useState(Hours);

  const [data, setData] = useState([]);

  const id = React.useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setSTimer((time) => time - 1);
    }, 1000);
 
    //NOTNEEDED return ()=>clear();
  }, []); //Seconds Tick Down Mechanism

  React.useEffect(() => {
    //OVERFLOW prevention
    if (Htimer > 60 || Mtimer > 60 || Stimer > 60) {
      setSTimer((Stime) => (Stime = 59));
      setMTimer((Mtime) => (Mtime = 59));
      setHTimer((Htime) => (Htime = 60));
    }
    // Hours to minutes drop
    else if (Mtimer === 0 && Htimer !== 0 && Stimer === 0) {
      setMTimer((Mtime) => Mtime + 60);
      setHTimer((Htime) => Htime - 1);
    }
    // Minutes to Seconds Drop
    else if (Stimer === 0 && Mtimer !== 0) {
      setSTimer((Stime) => Stime + 59);
      setMTimer((Mtime) => Mtime - 1);
    }
    //Timer Complete Event
    else if (Stimer === 0) {
      console.log("COMPLETE");
      // id.current = null;
      clear();
    }
  }, [Stimer, Mtimer, Htimer]);

  const timerCommand = (timedata) => {
    setData(timedata);
    setSTimer((s) => (s = +timedata[0]));
    setMTimer((s) => (s = +timedata[1]));
    setHTimer((s) => (s = +timedata[2]));
    if (id.current) {
      //clearing the timer if any exist
      clear();
      if (+timedata[0] !== 0 || +timedata[1] !== 0 || +timedata[2] !== 0)
        id.current = window.setInterval(() => {
          setSTimer((time) => time - 1);
        }, 1000);
    }
  };

  return (
    <div id="Clock" className={styles.timerstyle}>
      <h1 style={{ fontSize: 125 }}>
        {Htimer}:{Mtimer}:{Stimer}
      </h1>
      <div id="Controls" className={styles.crucials}>
        <Crucials timerCommand={timerCommand} />
      </div>
    </div>
  );
}
