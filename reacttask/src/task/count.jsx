import { useState } from "react";

const Count=()=>{
    const [add,setAdd]=useState(1)
    const countNum =()=>{
setAdd(add + 1)
    }
    const DecreaseNum =()=>{
        setAdd(add - 1)
            }
    return(
        <>
        <div>
            <h1>count by clicking add numbers button</h1>
            <button onClick={()=>{countNum()}}>
                add number +
            </button>
            <button onClick={()=>{DecreaseNum()}}>
                add number -
            </button>
            <h1>{add}</h1>
        </div>
        </>
    )
}
export default Count;