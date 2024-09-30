import { useEffect,useState } from "react";
 function ExuseEffect(){
    const [count,setCount]=useState(0)
    const [value,setValue]=useState(0)
    const[record,setRecord]=useState([])
    // useEffect(()=>{
    //     console.log(useEffect)
    // })
    // useEffect(()=>{
    //     console.log("value")
    // },[value])
   useEffect(()=>{
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>setRecord(json),[])
   })
    return (
        <>
        {/* <button onClick={()=>{
            setCount(count+1)
        }}>Count</button>`
        <p>{count}</p>

        <button onClick={()=>{
            setValue(value+1)
        }}> value</button>
        <p>{value}</p> */}
        {
            record.length>0 &&
            record.map((item)=>{
                return(
                    <p>
                        {item.title}
                    </p>
                )
            }
            )
        }
        </>
    )
 }
 export default ExuseEffect