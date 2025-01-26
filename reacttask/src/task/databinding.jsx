import { useState } from "react";

const DataBinding=()=>{

    const [data,setData]=useState("dimple") ;//two way data binding
const OnChangeHandler=(e)=>{
setData(e.target.value)
console.log(e.target.value)
}
    return(
        <>
        <div>
            <h1>data binding</h1>
            <input type="text" value={data}  onChange={(e)=>{OnChangeHandler(e)}}/><br/>
        {data}
        </div>
        </>
    )
}
export default DataBinding;