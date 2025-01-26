import { useState } from "react";

export const DisplayButton = () => {
    const [display,setDisplay]=useState("");
    const [showInput,setShowInput]=useState("");
    const displaybtn =(e)=>{
setDisplay(e.target.value);
console.log(e.target.value)
    }
const onclickhandler=()=>{
    setShowInput(display)

}
console.log(showInput,"jhgjgj")
  return (
    <div>
        <h1>display button if input has character</h1>
        <input type="text"  onChange={(e)=>{displaybtn(e)}} />
       
        <button disabled={display.length < 1} onClick={()=>{onclickhandler()}}>submit </button>
   <p>{showInput}</p>
      
     
    </div>
  )
}
export default DisplayButton;
