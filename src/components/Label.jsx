import React from "react";


function Label(props){
    return(
        <div className = "label-container"> 
            <p>{props.info}</p>
        </div>
    )
}

export default Label;