import React from "react";

export default function Crucials({timerCommand}){

    let data = []

    function timerStart(){
        data[0] = 5;
        data[1] = 4;
        data[2] = 3; 
        timerCommand(data)
    }
    
    
        return(<button onClick={timerStart}>Start Timer</button>)
    
    }
    
