import React from "react";
import styles from './Timer.module.scss';
export default function Timer(timedata) {
  let Seconds = 0;
  let Minutes = timedata.data.Min;
  let Hours = timedata.data.Hour;
  const [Stimer, setSTimer] = React.useState(Seconds);
  const [Mtimer, setMTimer] = React.useState(Minutes);
  const [Htimer, setHTimer] = React.useState(Hours);

  const id = React.useRef(true);
  const clear = () => {
    window.clearInterval(id.current)
  }


  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setSTimer((time) => time - 1)
    }, 1000)
    return ()=>clear();
  }, [timedata]) //Seconds Tick Down Mechanism 

  React.useEffect(() => {
    //OVERFLOW prevention
    if (Htimer > 60 || Mtimer > 60 || Stimer > 60) {
      setSTimer((Stime) => Stime = 59)
      setMTimer((Mtime) => Mtime = 59)
      setHTimer((Htime) => Htime = 60)

    }
    // Hours to minutes drop
    else if (Mtimer === 0 && Htimer !== 0 && Stimer === 0) {
      setMTimer((Mtime) => Mtime + 59)
      setHTimer((Htime) => Htime - 1)
    }
    // Minutes to Seconds Drop
    else if (Stimer === 0 && Mtimer !== 0) {
      setSTimer((Stime) => Stime + 59)
      setMTimer((Mtime) => Mtime - 1)
    }
    //Timer Complete Event
    else if (Stimer === 0) {
      console.log("COMPLETE")
      clear()
    }
  }, [Stimer, Mtimer, Htimer])

  

  return (
    <div id = "Clock"  className={styles.timerstyle}>
      <h1 style={{ fontSize: 125 }}>
        {Htimer}:{Mtimer}:{Stimer}
      </h1>
    </div>
  );
}