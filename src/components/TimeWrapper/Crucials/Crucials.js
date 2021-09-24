import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import styles from "./Crucials.module.css";
import Timer from "./Timer/Timer";
export default function Crucials() {

    let HData = 0, MData = 0;
    const [data, setData] = useState({Hour: 0, Min: 0});
    function timerStart(){
        if(HData === 0 && MData === 0){
            console.log("Minimum Timer Initiated");
            HData = 0;
            MData = 15;
        }
        setData({Hour: HData, Min: MData});
    }


    return (<div>
        <div><Timer timedata={data}/></div>
        <Button variant="contained" color="primary" onClick={timerStart}> Start Timer</Button>
        <form className={styles.HTM} onSubmit={timerStart}>
            <Input type="number" onChange={(e) => HData = e.target.value} id="outlined-basic" placeholder="Hours(H)" ></Input>
            <Input type="number" id="outlined-basic"  onChange={e => MData = e.target.value} placeholder="Minutes(M)" ></Input>
        </form>
    </div>

    )

}

