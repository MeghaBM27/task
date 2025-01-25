const DisplayArray=()=>{
    const array=[{name:"megha",id:1},
        {name:"sujatha",id:2},
        {name:"yukta",id:3},
    ]
    return(
<>
<div>
    <h1>display array using map</h1>
    <ul>
        {array.map((items)=>{
            return(
                <li key={items.id}>
                    {items.name}
                </li>
            )
        })}
    </ul>
</div>
</>
    )
}
export default DisplayArray;