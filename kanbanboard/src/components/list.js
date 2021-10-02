import React from "react";
import Card from "./card";
import AddUpdateTask from "./addupdatetask";

export default class List extends React.Component{
    render(){
        
        return (<div className="TaskList" >
            {this.props.tasks.map((task,index)=>{
                return <Card key={index} task={task} from={this.props.from}
                            users={this.props.users} 
                            taskstates={this.props.taskstates} 
                            onEditTask={this.props.onEditTask}/>
            })}
            <AddUpdateTask  from={this.props.from} 
                            users={this.props.users} 
                            taskstates={this.props.taskstates} 
                            onAddTask={this.props.onAddTask} 
                            
                            />
            
        </div>);
    }
}