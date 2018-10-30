import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./index.css";
import {observer, inject} from 'mobx-react';

@inject('stores')
@observer
class LogIn extends Component {
    openForm(id) {
        if (document.getElementById(id).style.display === 'none') {
            document.getElementById(id).style.display = 'block';
        } else {
            document.getElementById(id).style.display = 'none';
        }
    }
    render() {
        const {logIn} = this.props.stores;
        return (
            <div>
                <Button onClick={()=>this.openForm("login_form")}>
                    LogIn
                </Button>
                <Form className="login_form" inline style={{display: 'none'}} id="login_form">
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="Username" className="mr-sm-2">Username:</Label>
                        <Input id="Username" placeholder="Username" name = "username"
                               onChange={(e)=>logIn.authUser.username=e.target.value}
                        />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="Password" className="mr-sm-2">Password:</Label>
                        <Input type="password" name="password" id="Password" placeholder="******"
                               onChange={(e)=>logIn.authUser.password=e.target.value}
                        />
                    </FormGroup>
                    <div className="button_group">
                        <Button onClick={()=>{logIn.auth(logIn.authUser); this.openForm("login_form")}}
                        >LogIn</Button>
                        <Button onClick={()=>{this.openForm("login_form")}}>Close</Button>
                    </div>
                </Form>
            </div>
        );
    }
}
export default LogIn;