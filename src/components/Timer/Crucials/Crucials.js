import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import styles from "./Crucials.module.css";
export default function Crucials({ timerCommand }) {

    const [Hdata, setHData] = useState(0);
    const [Mdata, setMData] = useState(0);
    let data = [];

    function timerStart(){
        if(Hdata === 0 && Mdata === 0){
            console.log("Minimum Timer Initiated");
            setHData((minH)=> minH = 0);
            setMData((minM)=> minM = 15);
        }
        data[0] = 0;
        data[1] = Mdata;
        data[2] = Hdata;
        timerCommand(data)
    }


    return (<div>
        <Button variant="contained" color="primary" onClick={timerStart}> Start Timer</Button>
        <form className={styles.HTM} onSubmit={timerStart}>
            <Input type="number" onChange={e => setHData(e.target.value) } id="outlined-basic" placeholder="Hours(H)" ></Input>
            <Input type="number" id="outlined-basic"  onChange={e => setMData(e.target.value)} placeholder="Minutes(M)" ></Input>
        </form>
    </div>

    )

}

