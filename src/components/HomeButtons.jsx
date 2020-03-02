import React from "react";
import {Button} from "react-bootstrap";

function HomeButtons(props){
    
    return(
        <div className = "buttons">
                <Button size = "lg" variant = "warning">{props.info}</Button>
        </div>
    )
}

export default HomeButtons;