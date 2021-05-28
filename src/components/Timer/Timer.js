import React from 'react';
import styles from 'css';

var time="0";

function startTimer(duration, display) {
    var timing = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt (timing / 60, 10);
        seconds = parseInt (timing % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display = minutes + ":" + seconds;
        //console.log(display);
        timing--;
    }, 1000);
}

startTimer(180,time);

const Timer = () => (
  <div className={styles.Timer}>
    <h1>{time}</h1>
  </div>
);

Timer.propTypes = {};

Timer.defaultProps = {};

export default Timer;
