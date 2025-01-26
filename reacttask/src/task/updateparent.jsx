import { useState } from "react"


const Updateparent = () => {
const[value,setValue]=useState("i need to update from my child")
    return (
        <>
      <h1>parent</h1>
<p style={{border:"2px solid red",width:"fit-content",padding:"5px"}}>{value}</p>
<Updatechild setValue={setValue}/>
        </>
    )
 

}
// eslint-disable-next-line react/prop-types
const Updatechild = ({setValue}) => {

    return (
        <>
           <h1>child</h1>
           <button onClick={()=>{setValue("parent state updated")}}>change parent value</button>
        </>
   
    )
  }

export {Updateparent,Updatechild}
