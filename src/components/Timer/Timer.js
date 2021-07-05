import React from "react";
export default function App() {
  const [Stimer, setSTimer] = React.useState(5);
  const[Mtimer, setMTimer] = React.useState(0);
  const[Htimer, setHTimer] = React.useState(0);

  const id =React.useRef(null);
  const clear=()=>{
  window.clearInterval(id.current)
}
  React.useEffect(()=>{
     id.current=window.setInterval(()=>{
      setSTimer((time)=>time-1)
    },1000)
    return ()=>clear();
  },[]) //Seconds Tick Down Mechanism

  React.useEffect(()=>{
    // Hours to minutes drop
    if(Mtimer === 0 && Htimer !== 0 && Stimer === 0){ 
      setMTimer((Ntime) => Ntime+60)
      setHTimer((Htime) => Htime -1)
    }
    // Minutes to Seconds Drop
    else if(Stimer === 0 && Mtimer !== 0){ 
      setSTimer((time) => time+59)
      setMTimer((Mtime) => Mtime -1)
    }
    //Timer Complete Event
    else if(Stimer === 0){
      console.log("COMPLETE")  
      clear(); 
    }
  },[Stimer, Mtimer, Htimer])


  return (
    <div className="App">

     <div>{Htimer}:{Mtimer}:{Stimer} </div>

    </div>
  );
}