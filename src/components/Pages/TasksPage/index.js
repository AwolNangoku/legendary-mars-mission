import React, {useReducer, useEffect, useState} from 'react';
import {
    PageContainer,
    PageLeftSidePanel,
    PageContent,
    PageRightPanel,
    PageTaskFormWrapper,
    TaskItems,
    ItemContainer,
    TaskItemTitle,
    TaskItemDelete,
    TaskItemView, TaskTitleWrapper, TaskItemTitleLabel
} from './styled';
import FormField from '../../Form/FormField';
import {initialState, taskReducer, getPageImage} from './handlers';
import TaskForm from "../../Form/TaskForm";
import FormButton from "../../Form/FormButton";

const TasksPage = ({taskItems, taskActions}) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);
    const [pageImage, setImage] = useState(undefined);

    useEffect(() => {
        getPageImage(`https://source.unsplash.com/random/800x600/?mars`, setImage)
    }, [])

    return (
        <PageContainer>
            {pageImage ? (
                <img src={pageImage} alt='img not available' />
            ) : <p>Loading image...</p>}

            <PageContent>
                <PageLeftSidePanel>
                    App task stats here
                </PageLeftSidePanel>

                <PageTaskFormWrapper>
                    <TaskForm
                        onSubmit={(event) => event.preventDefault()}
                    >
                        <FormField
                            label='Title'
                            type='text'
                            id='title'
                            value={state.title}
                            onChange={event => dispatch({type: 'TITLE', payload: event.target.value})}
                        />

                        <FormField
                            label='Description'
                            type='text'
                            id='description'
                            value={state.description}
                            onChange={event => dispatch({type: 'DESCRIPTION', payload: event.target.value})}
                        />

                        <FormField
                            label='Created by'
                            type='text'
                            id='createdBy'
                            value={state.createdBy}
                            onChange={event => dispatch({type: 'CREATED_BY', payload: event.target.value})}
                        />

                        <FormField
                            label='Assigned to'
                            type='text'
                            id='assignedTo'
                            value={state.assignedTo}
                            onChange={event => dispatch({type: 'ASSIGNED_TO', payload: event.target.value})}
                        />

                        <FormButton
                            title='Create Task'
                            onClick={() => taskActions.createTask(state)}
                        />
                    </TaskForm>
                </PageTaskFormWrapper>

                <PageRightPanel>
                    <TaskItems>
                        {taskItems.tasks.map((item => (
                            <ItemContainer>
                                <TaskTitleWrapper>
                                    <TaskItemTitleLabel>Title:</TaskItemTitleLabel>
                                    <TaskItemTitle>{item.title}</TaskItemTitle>
                                </TaskTitleWrapper>

                                <TaskItemDelete onClick={() => taskActions.deleteTask(item.title)}>Delete task</TaskItemDelete>
                                <TaskItemView onClick={() => taskActions.viewTask(item.title)}>View Task</TaskItemView>
                            </ItemContainer>
                        )))}
                    </TaskItems>
                </PageRightPanel>
            </PageContent>
        </PageContainer>
    )
}

export default TasksPage;