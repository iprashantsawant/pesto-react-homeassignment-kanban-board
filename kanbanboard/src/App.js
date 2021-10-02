
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Board from './components/board'
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default class App extends React.Component {
  tasks=[{
          "id":1,
          "description":"GST Filling Flow",
          "assignee":"James",
          "duedate":"12/12/2021",
          "taskstate":"Planned"
        },
        {
          "id":2,
          "description":"ITR Filling Flow",
          "assignee":"Jenny",
          "duedate":"12/12/2021",
          "taskstate":"Planned"
        },
        {
          "id":3,
          "description":"Metrics Dashboard",
          "assignee":"Jane",
          "duedate":"12/12/2021",
          "taskstate":"Started"
        },
        {
          "id":4,
          "description":"Error Dashboard",
          "assignee":"James",
          "duedate":"12/12/2021",
          "taskstate":"Started"
        },
        {
          "id":5,
          "description":"Error Dashboard",
          "assignee":"Jenny",
          "duedate":"12/12/2021",
          "taskstate":"Started"
        },
        {
          "id":6,
          "description":"Analytics Dashboard",
          "assignee":"James",
          "duedate":"12/12/2021",
          "taskstate":"Done"
        }
      ];
  constructor(){
    super();
    localStorage.setItem("tasks",JSON.stringify(this.tasks));
  }
  render(){
    return (<div>
            <Board />
            <ToastContainer />
            </div>);
  }

}
