import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
export default function Crucials({ timerCommand }) {

    let data = []

    function timerStart() {
        data[0] = 5;
        data[1] = 99;
        data[2] = 3;
        timerCommand(data)
    }


    return (<div>
        <Button variant="contained" color="primary" onClick={timerStart}> Start Timer</Button>
        <form className="HTM">
            <TextField id="outlined-basic" label = "Hours(H)" variant="outlined"></TextField>
            <TextField id="outlined-basic" label = "Minutes(M)" variant="outlined"></TextField>
        </form>
        </div>
        
        )

}

