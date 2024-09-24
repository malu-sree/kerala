import { Button } from "react-bootstrap"
import {useNavigate} from 'react-router-dom'

function Aboutpage(){
    const nav=useNavigate()
    return(
        <>
        <h1> About</h1>
        <p> 
            About page working
            <Button variant="danger" onClick={()=>nav("/")}>Back</Button>
        </p>
        </>
    )
}
export default Aboutpage  