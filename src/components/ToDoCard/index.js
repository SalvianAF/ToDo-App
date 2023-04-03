import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import { CheckCircleFill, DashCircle} from "react-bootstrap-icons";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css"

const ToDoCard = (props) => {

    return(
        <Card className={"mb-4 p-0 " +  (props.isDone ? 'disabled' : '')}>
            <Card.Body >
                <Row className="p-0 align-items-center">
                    <Col xs={1} className="check-container">
                        <h4 className="m-0">
                            {props.isDone?
                                <CheckCircleFill color="#059669"/>
                            :
                                <CheckCircleFill color="#F5F5F4" onClick={props.checkToDo}/>
                            }
                            
                        </h4>
                    </Col>
                    <Col className="d-flex" >
                        {props.title}
                    </Col>
                    <Col xs={1} className="d-flex justify-content-end">
                        <h4 className="m-0" onClick={props.removeToDo}><DashCircle color="#BE123C"/></h4>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )


}
export default ToDoCard;