import React, { useState } from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ToDoCard from "../../components/ToDoCard";
import ConfirmationModal from "../../components/ConfirmationModal";
import "./style.css";

const ToDoList = () => {
    const [isAdd, setIsAdd] = useState(false);
    const [toDoList, setToDoList] = useState([])
    const [title, setTitle] = useState("")
    const [isValid, setIsValid] = useState(true)
    const [modalShow, setModalShow] = useState(false)

    const addToDo = () => {
        if (title.length > 100){
            setIsValid(false)
        } else{
            setToDoList([...toDoList, {"title":title, isDone:false}])
            setIsAdd(false)
            setIsValid(true)
            setTitle("")
        }
    } 
    
    const removeTitle = (idx) => {
        const temp = [...toDoList]
        temp.splice(idx, 1)
        setToDoList(temp);
    }

    const checkToDo = (idx) => {
        const temp = [...toDoList]
        temp[idx].isDone = true
        setToDoList(temp);
    } 

    const clearToDoList = () => {
        setToDoList([])
        setModalShow(false)
    }

    const cancleAdd = () => {
        setIsAdd(false) 
        setIsValid(true)
    }

    return(
        <div className="container">
            <Row  className="mb-4">
                <Col md={8} className="d-flex"><h2 className="fw-bold">Things you should doing today...</h2></Col>
                <Col md={4} className="d-flex justify-content-end">
                    {isAdd?
                        <></>:
                        <Button variant="primary" className="mx-3" onClick={() => setIsAdd(true)}>Add New</Button> 
                    }
                     <Button variant="outline-danger clear" onClick={() => setModalShow(true)}>Clear</Button>
                </Col>
            </Row>

            {/* Form for adding to-do title */}
            {isAdd?
                <Row className="mt-4">
                    <Col md={9}>
                        <Form>
                            <Form.Group >
                                <Form.Control placeholder="Add new to-do title..." className="input"  onChange={(e) => {
                                    setTitle(e.target.value);
                                }}/>
                                {isValid?<></>:
                                    <Form.Text className="invalid">
                                        Title must be shorter than or equal to 100 characters
                                    </Form.Text>
                                }
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={3} className="d-flex justify-content-end pb-4">
                        <Button variant="outline-primary mx-3" onClick={() => cancleAdd()}>Cancle</Button>
                        <Button variant="primary" type="submit" onClick={() => addToDo()}>Create</Button>
                    </Col>
                </Row>
            :<></>
            }

            <Row className="mt-2 px-2">
                {toDoList.length === 0?
                    <Card className="px-4">
                        <Card.Body className="empty">Nothing to-do yet.</Card.Body>
                    </Card>:
                   <></>
                }
               {toDoList.map((todo, idx) => {
                    if (todo.isDone !== true){
                        return <ToDoCard title={todo.title} isDone={todo.isDone} removeToDo={() => removeTitle(idx)} 
                                checkToDo={() => checkToDo(idx)} key={idx}/>
                    }
               })}
                {toDoList.map((todo, idx) => {
                    if (todo.isDone)
                        return <ToDoCard title={todo.title} isDone={todo.isDone}  key={idx}/>
               })}
            </Row>
            <ConfirmationModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                clearToDoList={() => clearToDoList()}
            />
        </div>
    )
}
export default ToDoList;