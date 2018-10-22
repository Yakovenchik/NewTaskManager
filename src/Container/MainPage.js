import React, {Component} from 'react';
import TaskList from '../Component/TaskList';
import CreatingTask from '../Component/CreatingTask';
import LogIn from '../Component/LogIn';
import {taskStore} from "../Store";
import Modify from "../Component/Modify";

export default class MainPage extends Component{
    componentDidMount(){
        taskStore.receiveList('https://uxcandy.com/~shapoval/test-task-backend/?developer=Aleksandr')
    }

    render(){
        return(
            <div>
                <LogIn/>
                <CreatingTask />
                <TaskList />
                <Modify/>
            </div>
        )
    }
}