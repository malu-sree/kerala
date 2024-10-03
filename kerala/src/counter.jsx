
import { memo } from "react"
function Counter({increment}){
    return(
        <>
        <button onClick={()=>{increment()}}>INC</button>
        </>
    )
}

export default memo(Counter)