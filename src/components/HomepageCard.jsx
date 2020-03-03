import React from "react";
import {Card, Button} from "react-bootstrap";

function HomepageCard(props){
    
    return(
        <div className = "cards">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.info}</Card.Text>
                    <Button variant="warning">{props.action}</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default HomepageCard;