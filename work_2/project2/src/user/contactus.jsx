import { Button, Stack } from "@mui/material";
import { useState } from "react";
import axios from 'axios'

export default  function Contactus(){
    const [user,setUser]=useState({})
    const changeValue=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const  emailChecking=(eml)=>{
        //code
           return true
    }
    const handleSubmit=(e)=>{
        let check=false;
        e.preventDefault()
        const url="http://localhost:9000/userpost";
       
        axios.post(url,user)
        .then((res)=>{
         alert(res.data)
        })
        .catch(err=>console.log(err))

    }
    return(
        <>
        <form onSubmit={handleSubmit}>
                  <div>
                    <label> name</label>
                    <input onChange={changeValue} type="text" name="username" placeholder="Name"/>
                </div>
                <div>
                    <label>Email</label>
                    <input onChange={changeValue} type="text" name="email" placeholder="Name"/>
                </div>
                <div>
                    <label>Contact Number</label>
                    <input onChange={changeValue} type="text" name="mobile" placeholder="Name"/>
                </div>
                <div>
                    <textarea onBlur={changeValue} name="message" rows="4" cols="25"></textarea>
                </div>
                <div>
                    <Button  type="submit" variant="outlined">
                        Submit
                    </Button>
                </div>


     
        </form>
        </>
    )
}