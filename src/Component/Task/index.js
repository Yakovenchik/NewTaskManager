import {observer} from "mobx-react";
import React, {Component} from "react";
import {taskStore, logIn} from "../../Store";
import {Button, Label, Media} from "reactstrap";


@observer
class Task extends Component {
    render(){
        const {item} = this.props;
        return(
            <div className="content">
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
                    <Button onClick={() => {taskStore.modifyTask(item)}}>Change Content</Button> :
                    null
                }
                {this.props.type === "preview" ?
                    <Button onClick={() => taskStore.openForm("preview")}>Close Preview</Button> :
                    null
                }
            </div>
        )
    }
}

export default Task;