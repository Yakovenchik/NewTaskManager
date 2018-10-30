import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { observer, inject } from 'mobx-react';
import './index.css';

@inject('stores')
@observer
class Modify extends Component {
    openForm(id) {
        if (document.getElementById(id).style.display === 'none') {
            document.getElementById(id).style.display = 'block';
        } else {
            document.getElementById(id).style.display = 'none';
        }
    }
    render() {
        const { taskStore } = this.props.stores;
        return (
            <Form className="modify" inline style={{display: 'none'}} id="modify">
                <Label for="text" className="mr-sm-2">Id: {taskStore.changeTask.id}</Label>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="text" className="mr-sm-2">Text:</Label>
                    <Input id="text" value={taskStore.changeTask.text} placeholder="text" name = "text"
                           onChange={(e)=>taskStore.changeTask.text=e.target.value}
                    />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="status" className="mr-sm-2">Status(10 is completed):</Label>
                    <Input name="status" type="number" id="status" value = {taskStore.changeTask.status}
                           onChange={(e)=>taskStore.changeTask.status = e.target.value}
                    />
                </FormGroup>
                <FormGroup className="button_group">
                    <Button onClick={()=>{taskStore.change(); this.openForm("modify")}}>Change</Button>
                    <Button onClick={()=>{this.openForm("modify")}}>Close</Button>
                </FormGroup>
            </Form>
        );
    }
}
export default Modify;