import { useMemo, useState } from "react";
 function Usememoex(){
    const [number,setNumber]=useState(0)
    const [count,setCount]=useState(0)
    const [square,setSquare]=useState(0)
     const inCount=()=>{
        console.log("in count working")
        setCount(count+1)
        
     }
     const changeValue=(e)=>{
          setNumber(e.target.value)
     }

    //  function squarenumber(number){
    //     setNumber(e.target.value)
    //     let sq=Math.pow(Number(e.target.value),2)
    //     setSquare(sq)
    //     console.log('square', sq)

     //}
     const squareResult=useMemo(()=>{
       return squarenumber(number)
     },[number])

    return(
        <>
        <button onClick={inCount}> INC count</button>
        <div>output:{count}</div>
        <button>number</button>
        <input type="text" onChange={changeValue}/>
        <div>output:{squareResult}</div>
        <button>Square</button>
        </>
    )
 }

 function squarenumber(number){
    console.log("square")
    return Math.pow(Number(number),2)}
    
   
 export default Usememoex