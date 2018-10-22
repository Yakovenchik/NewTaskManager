import React, {Component} from 'react';
import TaskList from '../Component/TaskList';
import CreatingTask from '../Component/CreatingTask';
import LogIn from '../Component/LogIn';
import Modify from "../Component/Modify";
import {inject} from 'mobx-react';

@inject('stores')
class MainPage extends Component{
    componentDidMount(){
        const {taskStore} = this.props.stores;
        taskStore.receiveList()
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
export default MainPage;