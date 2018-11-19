import React from "react";
import "./CharacterCard.css";

const CharCard = props =>(
    <div className = "card" >
        <div className = "img-container" >
            <img src = {props.image} alt = {props.name} height = "150px" width = "auto" key = {props.id}/>
        </div>
    </div>
);

export default CharCard;