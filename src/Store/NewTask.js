import { observable, action} from 'mobx';
import {taskStore} from "./index";

export default class TaskStore{
    @observable taskList=[];
    @observable newTask = {};
    @observable adding = false;
    @observable currentPage = 0;
    @observable totalCount = 0;

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
            body: form,
            dataType: "json"
        };

        let address = 'https://uxcandy.com/~shapoval/test-task-backend/create?developer=Aleksandr';
        fetch(address, createInit)
            .catch(error=>{
                console.log(error)
            });
        fetch('https://uxcandy.com/~shapoval/test-task-backend/?developer=Aleksandr')
            .then(response=>
                response.json()
            )
            .then(res => {
                    this.taskList = res.message.tasks;
                    this.totalCount = res.message.total_task_count;
                }
            )
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
}