import React, { Fragment, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import styles from "./Crucials.module.css";

export default function Crucials({ timerCommand }) {
  const [Hdata, setHData] = useState("");
  const [Mdata, setMData] = useState("");
  let data = [];
  const handleSubmit = (e) => {
    e.preventDefault();
    timerStart();
    // or you can send to backend
  };
  useEffect(() => {
    if (Hdata !== "" && Mdata === "") {
      setMData("0");
    }
  }, [Hdata]);
  function timerStart() {
    //For Testing Purpose

    console.log(Mdata, Hdata);
    if (Hdata === 0 && Mdata === 0) {
      console.log("Minimum Timer Initiated");
      setHData((minH) => (minH = 0));
      setMData((minM) => (minM = 15));
    }

    //Validation of Minute and Hour Data
    if (Mdata === "" || Hdata === "" || Mdata < 0 || Hdata < 0) {
      alert("Please enter valid values into the Minutes and Hours field");
      setHData("");
      setMData("");
      return;
    }
    data[0] = 0;
    data[1] = Mdata || "0";
    data[2] = Hdata || "0";
    setHData("");
    setMData("");
    timerCommand(data);
    //console.log(Hdata);
  }

  return (
    <Fragment>
      <form>
        <Input
          type="number"
          value={Hdata}
          onChange={(e) => setHData(e.target.value)}
          id="outlined-basic"
          placeholder="Hours(H)"
        ></Input>
        <Input
          type="number"
          id="outlined-basic"
          value={Mdata}
          onChange={(e) => setMData(e.target.value)}
          placeholder="Minutes(M)"
        ></Input>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          onClick={handleSubmit}
        >
          {" "}
          Start Timer
        </Button>
      </form>
    </Fragment>
  );
}
