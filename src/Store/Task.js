import { observable, action} from 'mobx';
import md5 from 'md5';

export default class TaskStore{
    @observable taskList=[];
    @observable newTask = {};
    @observable adding = false;
    @observable currentPage = 0;
    @observable totalCount = 0;
    @observable changeTask = {};
    @observable sort = {
        direction: '',
        field: ''
    };

    @action addTask(elem){
        const form = new FormData();
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

        const address = 'https://uxcandy.com/~shapoval/test-task-backend/create?developer=Aleksandr';
        fetch(address, createInit)
            .then(res => res.json())
            .then(res => {
                if (res.status === "ok") {
                    document.getElementById("add_task").reset();
                    this.openForm("add_task")
                }   else    {
                    alert(JSON.stringify(res.message));
                }})
            .catch(error=>{
                console.log(error)
            });
        this.receiveList();
    }

    @action modifyTask(item){
        this.changeTask = {
            status: item.status,
            text: item.text,
            id: item.id
        };
        this.openForm("modify");
    }
    @action change(){
        const form = new FormData();
        form.append("text", encodeURIComponent(this.changeTask.text));
        form.append("status", this.changeTask.status);
        form.append("token", "beejee");
        const params_string = "status="+this.changeTask.status+"&text="+form.get("text")+"&token=beejee";
        form.append("signature", md5(params_string));
        const createInit = {
            crossDomain: true,
            method: 'POST',
            mimeType: "multipart/form-data",
            contentType: false,
            processData: false,
            body: form,
            dataType: "json"
        };
        const address = 'https://uxcandy.com/~shapoval/test-task-backend/edit/'+this.changeTask.id+'?developer=Aleksandr';
        fetch(address, createInit)
            .then(res => res.json())
            .then(res => {
                if (res.status !== "ok") {
                    alert(JSON.stringify(res));
                }})
            .catch(error=>{
                console.log(error)
            });
        this.receiveList();
    }

    @action openForm(id) {
        if (document.getElementById(id).style.display === 'none') {
            document.getElementById(id).style.display = 'block';
        } else {
            document.getElementById(id).style.display = 'none';
        }
    }

    @action receiveList(address = 'https://uxcandy.com/~shapoval/test-task-backend/?developer=Aleksandr'){
        fetch(address+'&sort_field='+this.sort.field+'&sort_direction='+this.sort.direction)
            .then(response=>
                response.json()
            )
            .then(res=>{
                this.taskList = res.message.tasks;
                this.totalCount = res.message.total_task_count;
            })
            .catch(error=>{
                console.log(error);
            });
    }
}