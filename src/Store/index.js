import TaskStore from "./Task";
import LogIn from "./LogIn"

const taskStore = new TaskStore();
const logIn = new LogIn();

const stores = {
    taskStore,
    logIn
};

export default stores;