import { observable, action} from 'mobx';
import stores from "./index";

export default class LogIn{
    @observable admin = false;
    @observable authUser = {};

    @action auth(user){
        const {taskStore} = stores;
        let flagChange = false;
        !user.username ? alert("Username is require") : !user.password ? alert("Password is reaquire") : flagChange = true;
        if (flagChange && user.username === "admin" && user.password === '123') {
            this.admin = true;
            taskStore.openForm("login_form");
            document.getElementById("login_form").reset()
        }   else {
            this.admin = false;
            taskStore.openForm("login_form");
            document.getElementById("login_form").reset()
        }
        return flagChange;
    }
}