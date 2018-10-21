import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {taskStore} from '../../Store/index';
import Task from '../Task';
import './index.css';
import { Input, Button, Label, Form, FormGroup } from 'reactstrap';


@observer
class CreatingTask extends Component {

    sendTask(newTask){
        taskStore.addTask(newTask);
    }

    getImage(e){
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            taskStore.newTask.image = file;
            taskStore.newTask.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }

    render(){
        return(
            <div className='headerTask'>
                <h1>Tasks</h1>
                <Button onClick={()=>taskStore.openAdding()}>
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
                        <Button onClick={()=>taskStore.openPreview()}>
                            Preview
                        </Button>
                        <Button onClick={()=>{
                            this.sendTask(taskStore.newTask);
                        }}>
                            New Task
                        </Button>
                        <Button onClick={()=>taskStore.openAdding()}>
                           Close Adding
                        </Button>
                    </FormGroup>
                </Form>
                <div className='preview' id="Preview" style={{display: 'none'}}>
                    <Task type="preview" />
                </div>
            </div>
        )
    }
}
export default CreatingTask;