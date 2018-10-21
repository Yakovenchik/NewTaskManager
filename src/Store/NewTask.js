import { observable, action} from 'mobx';
import {taskStore} from "./index";
import axios from 'axios';

export default class TaskStore{
    @observable taskList=[];
    @observable newTask = {};
    @observable adding = false;
    @observable currentPage = 0;

    @action addTask(elem){
            let form = new FormData();
            form.append("username", elem.username);
            form.append("email", elem.email);
            form.append("text", elem.text);
            form.append("image", elem.image);
        const createInit = {
            crossDomain: true,
            method: 'POST',
            mimeType: "multipart/form-data",
            contentType: false,
            processData: false,
            data: form,
            dataType: "json"
        };
        console.log(createInit.data.getAll("image"));
        console.log(form.getAll("text"));
        let address = 'https://uxcandy.com/~shapoval/test-task-backend/create?developer=Aleksandr';
        fetch(address, createInit)
            .then(response=>
                response.json()
            )
            .then(response=>{
                console.log(response);
                }
            )
            .catch(error=>{
                console.log(error)
            });
        fetch('https://uxcandy.com/~shapoval/test-task-backend/?developer=Aleksandr')
            .then(response=>
                response.json()
            )
            .then(res =>
                taskStore.taskList = JSON.parse(res.message.tasks))
            .catch(error=>{
                console.log(error);
            });
        this.openAdding();
    }

    @action openPreview() {
        if (document.getElementById("Preview").style.display === 'none') {
            document.getElementById("Preview").style.display = 'block';
        } else {
            document.getElementById("Preview").style.display = 'none';
        }
    }

    @action openAdding() {
        taskStore.adding = !taskStore.adding;
        if (document.getElementById("add_task").style.display === 'none') {
            document.getElementById("add_task").style.display = 'block';
        } else {
            document.getElementById("add_task").style.display = 'none';
        }
    }

    @action removeTask(i){
        this.taskList.splice(i, 1);
    }

}