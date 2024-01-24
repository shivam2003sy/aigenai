import React from "react";
import ankitaImage from "../Card/ankita.jpg"; 
import "./Card.css";

const Card = ({item})=>{
    return(
        <div className="card">
        {/* <img src={item.image} alt="ssa"/> */}
        <img src={ankitaImage} alt="Ankita" />
        <div>
            {/* <Link to={`/product/${item.product}`}>{item.name}</Link> */}
            {/* <span>{`price : Rs ${item.price}`}</span>
            <p onClick={()=>deleteCartItem(item.product)}>Remove</p> */}
            <p>
                tittle name
            </p>
        </div>
    </div>
    )
}

export default Card;