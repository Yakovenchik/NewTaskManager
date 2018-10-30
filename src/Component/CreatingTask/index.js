import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Task from '../Task';
import './index.css';
import { Input, Button, Label, Form, FormGroup } from 'reactstrap';

@inject('stores')
@observer
class CreatingTask extends Component {

    sendTask(newTask){
        const taskStore = this.props.stores.taskStore;
        taskStore.addTask(newTask);
    }

    openForm(id) {
        if (document.getElementById(id).style.display === 'none') {
            document.getElementById(id).style.display = 'block';
        } else {
            document.getElementById(id).style.display = 'none';
        }
    }

    getImage(e){
        const { taskStore } = this.props.stores;
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            taskStore.newTask.image = file;
            taskStore.newTask.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }

    render(){
        const { taskStore } = this.props.stores;
        return(
            <div className='headerTask'>
                <h1>Tasks</h1>
                <Button onClick={()=>this.openForm("add_task")}>
                    {!taskStore.adding ? 'Add New Task' : 'Close Adding'}
                </Button>
                <Form className='add_task'  id = "add_task" style={{display: 'none'}} >
                    <FormGroup check>
                    <Label> Name: </Label>
                        <Input placeholder='Name...' onChange={(e)=>taskStore.newTask.username=e.target.value}  required/>
                    </FormGroup>
                   <FormGroup check>
                        <Label> Email: </Label>
                        <Input type="email" name="email" placeholder='Email...' onChange={(e)=>taskStore.newTask.email=e.target.value}  required/>
                    </FormGroup>
                    <FormGroup check>
                        <Label> Task: </Label>
                        <Input type="text" placeholder='Description...' onChange={(e)=>taskStore.newTask.text=e.target.value}  required/>
                    </FormGroup>
                   <FormGroup check>
                        <Label> Image: </Label>
                        <Input type="file" onChange={(e)=>this.getImage(e)}/>
                    </FormGroup>
                    <FormGroup className='button_group'>
                        <Button onClick={()=>this.openForm("preview")}>
                            Preview
                        </Button>
                        <Button onClick={()=>{
                            this.sendTask(taskStore.newTask); this.openForm("add_task")
                        }}>
                            New Task
                        </Button>
                        <Button onClick={()=>this.openForm("add_task")}>
                           Close Adding
                        </Button>
                    </FormGroup>
                </Form>
                <div className='preview' id="preview" style={{display: 'none'}}>
                    <Task item={taskStore.newTask} type="preview" />
                </div>
            </div>
        )
    }
}
export default CreatingTask;