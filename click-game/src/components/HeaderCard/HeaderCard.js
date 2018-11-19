import React from 'react';
import  "./HeaderCard.css";

const HeaderCard = props =>(
<header id = "header">
    <div className = "title">{props.children}
        <span id = "headProp" className = "scores">
            Score: {props.score}  HighScore: {props.highScore}
        </span>
    </div>
</header>

); 

export default HeaderCard;