import {observer} from "mobx-react";
import {Component} from "react";
import {taskStore} from "../../Store";
import {Button, Label, Media} from "reactstrap";
import React from "react";

@observer
class Task extends Component {
    render(){
        return(
            <div className="content">
                <div>
                    <Label>Name: </Label>
                    <p>{taskStore.newTask.username}</p>
                </div>
                <div>
                    <Label>Email: </Label>
                    <p>{taskStore.newTask.email}</p>
                </div>
                <div>
                    <Label>Task: </Label>
                    <p>{taskStore.newTask.task}</p>
                </div>
                {taskStore.newTask.imagePreview ? <Media alt={taskStore.newTask.image} src={taskStore.newTask.imagePreview}/> : null}
                <br/>
                {this.props.type === "preview" ?
                    <Button onClick={() => taskStore.openPreview()}>Close Preview</Button> :
                    <Button onClick={() => taskStore.removeTask(this.props.taskId)}>Remove Task</Button>
                }
            </div>
        )
    }
}

export default Task;