import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import List from "./list";

export default class Board extends React.Component{
    
    constructor(props){
        super(props);
        this.state={ 
                        tasks:JSON.parse(localStorage.getItem("tasks","[]")),
                        users: ["Jenny", "James" , "Jane"],
                        taskStates:["Planned","Started","Done"]
                   };
    }
    render(){
        return (
        <Container>
            
            <Stack direction="horizontal" gap={2} >
                <div className="bg-light "><h6 className="mb-0">Task Board</h6></div>
                <div className="bg-light  ms-auto">Members : 
                        <img src="../img/user.png" alt="Jenny" className="MembersIcon"></img>
                        <img src="../img/user.png" alt="James" className="MembersIcon"></img>
                        <img src="../img/user.png" alt="Jane" className="MembersIcon"></img>

                </div>
            </Stack>
            <Row>
                {this.state.taskStates.map((state,index)=>{
                   return <Col key={"c"+index} lg="4" md="4" sm="6" xs="12"> 
                                <h6  key={"h"+index} className="ml-2">{state}</h6>
                                <List key={index} 
                                        tasks={this.state.tasks.filter((element)=>{ return element.taskstate===state})} 
                                        from={state} users={this.state.users} 
                                        taskstates={this.state.taskStates}  
                                        onAddTask={(task)=>this.addTask(task)}
                                        onEditTask={(task)=>this.editTask(task)}
                                        />
                          </Col>;
                })
                }
            </Row>
            
        </Container>);
    }

    addTask(task){
        let tasks=this.state.tasks;
        task.id=tasks.length+1;
        tasks.push(task);
        this.setState({tasks:tasks});
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }
    editTask(task){
        let tasks=this.state.tasks;
        let taskIndex=this.state.tasks.findIndex((t) => { return t.id===task.id});
        tasks[taskIndex]=task;
        this.setState({tasks:tasks});
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }
}