import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { taskStore } from '../../Store/index';
import './index.css'
import Task from "../Task";
import { Pagination, PaginationItem, PaginationLink, Button, Label, FormGroup, Form } from 'reactstrap';

@observer
class TaskList extends Component {
    handleClick(index) {
        taskStore.currentPage = index;
        const address = 'https://uxcandy.com/~shapoval/test-task-backend/?developer=Aleksandr&page='+(taskStore.currentPage+1);
        taskStore.receiveList(address);
    }
    render(){
        const pageSize = 3;
        const pagesCount = Math.ceil(taskStore.totalCount / pageSize);
        return(
            <div>
                <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled={taskStore.currentPage <= 0}>
                        <PaginationLink
                            onClick={() => this.handleClick( taskStore.currentPage - 1)}
                            previous
                            href="#"
                        />
                    </PaginationItem>

                    {[...Array(pagesCount)].map((page, i) =>
                        <PaginationItem active={i === taskStore.currentPage} key={i}>
                            <PaginationLink onClick={() => this.handleClick(i)} href="#">
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    )}

                    <PaginationItem disabled={taskStore.currentPage >= pagesCount - 1}>
                        <PaginationLink
                            onClick={() => this.handleClick( taskStore.currentPage + 1)}
                            next
                            href="#"
                        />
                    </PaginationItem>
                </Pagination>
                <br/>
                <Form>
                    <FormGroup>
                        <Label>Sort type: {taskStore.sort.field}</Label> <br/>
                        <Button onClick={()=>{taskStore.sort.field = "id";taskStore.receiveList()}}
                        >Id </Button>
                        <Button onClick={()=>{taskStore.sort.field = "email";taskStore.receiveList()}}
                        >Email </Button>
                        <Button onClick={()=>{taskStore.sort.field = "username";taskStore.receiveList()}}
                        >Username </Button>
                        <Button onClick={()=>{taskStore.sort.field = "status";taskStore.receiveList()}}
                        >Status </Button>
                    </FormGroup> <br/>
                    <FormGroup>
                        <Label>Sort direction: {taskStore.sort.direction}</Label> <br/>
                        <Button onClick={()=>{taskStore.sort.direction = "asc";taskStore.receiveList()}}
                        >ASC </Button>
                        <Button onClick={()=>{taskStore.sort.direction = "desc";taskStore.receiveList()}}
                        >DESC </Button>
                    </FormGroup>
                </Form>
                {taskStore.taskList
                    .map((item,i)=>{
                        return(
                            <div key={i}>
                                <div className='task'>
                                    <Task taskId={item.id} item={item} type="list"/>
                                </div>
                            </div>
                        )
                    })}
            </div>
        )
    }
}

export default TaskList;