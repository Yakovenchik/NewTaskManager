import {observer, inject} from "mobx-react";
import React, {Component} from "react";
import {Button, Label, Media} from "reactstrap";
import './index.css';

@inject('stores')
@observer
class Task extends Component {
    openForm(id) {
        if (document.getElementById(id).style.display === 'none') {
            document.getElementById(id).style.display = 'block';
        } else {
            document.getElementById(id).style.display = 'none';
        }
    }
    render(){
        const {taskStore, logIn} = this.props.stores;
        const {item} = this.props;
        return(
            <div className="content">
                {item.status === 10 ? <div className="complete">COMPLETED</div>:null}
                <Label>Id: {item.id}</Label>
                <div>
                    <Label>Name: </Label>
                    <p>{item.username}</p>
                </div>
                <div>
                    <Label>Email: </Label>
                    <p>{item.email}</p>
                </div>
                <div>
                    <Label>Task: </Label>
                    <p>{item.text}</p>
                </div>
                {this.props.type === "preview" ?
                    <Media alt={item.id} src={item.imagePreview}/>
                    :
                    <Media alt={item.id} src={item.image_path}/>}
                <br/>
                {this.props.type !== "preview" && logIn.admin ?
                    <Button onClick={() => {this.openForm("modify"); taskStore.modifyTask(item)}}>Change Content</Button> :
                    null
                }
                {this.props.type === "preview" ?
                    <Button onClick={() => this.openForm("preview")}>Close Preview</Button> :
                    null
                }
            </div>
        )
    }
}

export default Task;