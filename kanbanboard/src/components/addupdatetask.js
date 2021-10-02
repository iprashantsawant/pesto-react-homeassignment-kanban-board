import React, { useState } from "react";
import { Modal,Button,Form } from "react-bootstrap";
import { toast } from "react-toastify";

 let AppUpdateTask=(props)=>{
    const [show, setShow] = useState(false);
    const [taskDescirption, setTaskDescirption] = React.useState('');
    const [duedate, setDuedate] = React.useState('');
    const [assignee, setAssignee] = React.useState('');
    const [taskState, settaskState] = React.useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => {
                                setShow(true);
                                setTaskDescirption('');
                                setDuedate('');
                                setAssignee('');
                                settaskState('');
                            };
    const handleSubmit=() => {
        // console.log(taskDescirption,duedate,assignee,taskState);
        if(taskDescirption!=='' && duedate!=='' && assignee!=='' && taskState!==''){
            let task={
                id:0,
                description:taskDescirption,
                duedate:duedate,
                assignee:assignee,
                taskstate:taskState
            };
            props.onAddTask(task);
            setShow(false);
            toast("Task Added successfully",{type:"success"});
        }
        else
            toast("Please fill all details",{type:"warning"});
    }

    return (<div>
                <div className="text-center">
                    <Button variant="primary" onClick={handleShow}>
                        Add Another task
                    </Button>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                        <Form.Label>Task Description</Form.Label>
                            <textarea onChange={(event)=>setTaskDescirption(event.target.value)} value={taskDescirption} className="form-control" name="description" placeholder="Task description"></textarea>
                            
                            <Form.Label>Task Due Date</Form.Label>
                            <input onChange={(event)=>setDuedate(event.target.value)} value={duedate} className="form-control" name="deudate" placeholder="duedate"></input>
                            
                            <Form.Label>Assignee</Form.Label>
                            <select className="select" onChange={(event)=>setAssignee(event.target.value)} value={assignee}>
                                <option selected value="">Select an option</option>
                                {props.users.map((element,index)=>{
                                return <option key={index} value={element}>{element}</option>
                                })}
                            </select>
                        
                            <Form.Label>Task State</Form.Label>
                            <select  className="select" onChange={(event)=>settaskState(event.target.value)} value={taskState}>
                                <option selected value="">Select an option</option>
                                {props.taskstates.map((element,index)=>{
                                return  <option key={index} value={element}>{element}</option>
                                })}
                            </select>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>);

}

export default AppUpdateTask;