import React, {Component} from 'react';
import TaskList from '../Component/TaskList';
import CreatingTask from '../Component/CreatingTask';
import {taskStore} from "../Store";

export default class MainPage extends Component{
    componentDidMount(){
        fetch('https://uxcandy.com/~shapoval/test-task-backend/?developer=Aleksandr')
            .then(response=>
                response.json()
            )
            .then(res=>{
                taskStore.taskList = JSON.parse(res.message.tasks)
            })
            .catch(error=>{
                console.log(error);
            });
    }

    render(){
        return(
            <div>
                <CreatingTask />
                <TaskList />
            </div>
        )
    }
}