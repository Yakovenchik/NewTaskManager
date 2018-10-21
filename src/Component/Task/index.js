import {observer} from "mobx-react";
import {Component} from "react";
import {taskStore} from "../../Store";
import {Button, Label, Media} from "reactstrap";
import React from "react";

@observer
class Task extends Component {
    render(){
        const {item} = this.props;
        return(
            <div className="content">
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
                {this.props.type === "preview" ?
                    <Button onClick={() => taskStore.openPreview()}>Close Preview</Button> :
                    null
                }
            </div>
        )
    }
}

export default Task;