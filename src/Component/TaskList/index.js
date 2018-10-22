import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { taskStore } from '../../Store/index';
import './index.css'
import Task from "../Task";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

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
                <div>

                </div>
                {taskStore.taskList
                    .map((item,i)=>{
                        return(
                            <div key={i}>
                                <div className='task'>
                                    <Task taskId={item.id} item={item} type="list"/>
                                </div>
                            </div>
                        )
                    }).reverse()}
            </div>
        )
    }
}

export default TaskList;