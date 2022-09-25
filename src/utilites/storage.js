import React from "react";
const Cosmetics=(props)=>{
    console.log(props.Cosmetics);
    const{name,price,gender}=props.Cosmetics;
    const handlepurchase=id=>{
        console.log(id);

    }
    console withParam=(id)=>handlepurchase(id)
    return(
        <div>
            <h2>name:{name}</h2>
            <p>_id:{_id}price:${price}</p>
            <p><small>gender:${gender}</small></p>
            <button onClick={()=>handlepurchase(_id)}>purchase</button>
            <button onClick={()=>handleRemove(_id)}>remove</button>
        </div>
    
    )

}
export default Cosmetics;