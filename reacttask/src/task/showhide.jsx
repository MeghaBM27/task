import { useState } from "react";

const ShowHide=()=>{
    const [show,setShow]=useState(true)
    return(
<>
<div>
    <h1>Show/Hide Element on Screen</h1>
    <button onClick={()=>{setShow(!show)}}>show or hide below word</button>
    {show?"show":"hide"}
  {show &&  <p>hi im megha</p>}
</div>
</>
    )
}
export default ShowHide;