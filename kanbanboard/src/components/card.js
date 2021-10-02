import React from "react";
import { Modal,Button,Form } from "react-bootstrap";
import { toast } from "react-toastify";
export default class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={show:false,
                    task:this.props.task
        };
        this.editTask=this.editTask.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }
   
    render(){
        
        return (<div className="TaskCard" >
                    
                    <p className="description">{this.props.task.description}</p>
                    <p className="deudate">{this.props.task.duedate}</p>
                    <p className="user"><img src="../img/user.png" alt="Jenny" className="MembersIcon"></img>{this.props.task.assignee}</p>
                    <Button variant="link" onClick={this.editTask} >Edit</Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Edit Task</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                            <Form.Label>Task Description</Form.Label>
                                <textarea onChange={(event)=>this.setTaskDescirption(event.target.value)} value={this.state.task.description} className="form-control" name="description" placeholder="Task description"></textarea>
                                
                                <Form.Label>Task Due Date</Form.Label>
                                <input onChange={(event)=>this.setDuedate(event.target.value)} value={this.state.task.duedate} className="form-control" name="deudate" placeholder="duedate"></input>
                                
                                <Form.Label>Assignee</Form.Label>
                                <select className="select" onChange={(event)=>this.setAssignee(event.target.value)} value={this.state.task.assignee}>
                                    <option selected value="">Select an option</option>
                                    {this.props.users.map((element,index)=>{
                                    return <option key={index} value={element}>{element}</option>
                                    })}
                                </select>
                            
                                <Form.Label>Task State</Form.Label>
                                <select  className="select" onChange={(event)=>this.settaskState(event.target.value)} value={this.state.task.taskstate}>
                                    <option selected value="">Select an option</option>
                                    {this.props.taskstates.map((element,index)=>{
                                    return  <option key={index} value={element}>{element}</option>
                                    })}
                                </select>
                            </Form>

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>);
    }

    editTask(){
        this.setState({show:true});
    }
    handleClose(){
        this.setState({show:false});
    }
    handleSubmit(){
        
        if(this.state.task.handleClosetaskDescirption!=='' && this.state.task.handleCloseduedate!=='' && this.state.task.handleCloseassignee!=='' && this.state.task.handleClosetaskState!==''){
            this.props.onEditTask(this.state.task);
            this.setState({show:false});
            toast("Task Added successfully",{type:"success"});
        }
        else
            toast("Please fill all details",{type:"warning"});
    }
    setTaskDescirption(value){
        let task=this.state.task;
        task.description=value;
        this.setState({task:task});
    }

    setDuedate(value){
        let task=this.state.task;
        task.duedate=value;
        this.setState({task:task});
    }

    setAssignee(value){
        let task=this.state.task;
        task.assignee=value;
        this.setState({task:task});
    }

    settaskState(value){
        let task=this.state.task;
        task.taskstate=value;
        this.setState({task:task});
    }
    
    
}