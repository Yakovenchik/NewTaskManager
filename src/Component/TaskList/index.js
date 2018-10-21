import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { taskStore } from '../../Store/index';
import './index.css'
import Task from "../Task";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

@observer
class TaskList extends Component {
    handleClick(e, index) {
        e.preventDefault();
        taskStore.currentPage = index;
    }
    render(){
        let pageSize = 3;
        let pagesCount = Math.ceil(taskStore.taskList.length / pageSize);
        return(
            <div>
                <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled={taskStore.currentPage <= 0}>
                        <PaginationLink
                            onClick={e => this.handleClick(e, taskStore.currentPage - 1)}
                            previous
                            href="#"
                        />
                    </PaginationItem>

                    {[...Array(pagesCount)].map((page, i) =>
                        <PaginationItem active={i === taskStore.currentPage} key={i}>
                            <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    )}

                    <PaginationItem disabled={taskStore.currentPage >= pagesCount - 1}>
                        <PaginationLink
                            onClick={e => this.handleClick(e, taskStore.currentPage + 1)}
                            next
                            href="#"
                        />
                    </PaginationItem>
                </Pagination>
                {taskStore.taskList
                    .slice(
                        taskStore.currentPage * pageSize,
                        (taskStore.currentPage + 1) * pageSize
                    )
                    .map((item,i)=>{
                        return(
                            <div key={i}>
                                <div className='task'>
                                    <Task taskId={item.id} type="list"/>
                                </div>
                            </div>
                        )
                    }).reverse()}
            </div>
        )
    }
}

export default TaskList;