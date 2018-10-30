import { observable, action} from 'mobx';

export default class LogIn{
    @observable admin = false;
    @observable authUser = {};

    @action auth(user){
        let flagChange = false;
        !user.username ? alert("Username is require") : !user.password ? alert("Password is reaquire") : flagChange = true;
        if (flagChange && user.username === "admin" && user.password === '123') {
            this.admin = true;
            document.getElementById("login_form").reset()
        }   else {
            this.admin = false;
            document.getElementById("login_form").reset()
        }
        return flagChange;
    }
}