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
import {initialState, taskReducer, getPageImage, disableCreateButton} from './handlers';
import PageTaskForm from './components/TaskForm';
import Image from '../../Image';

const TasksPage = ({taskItems, taskActions}) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);
    const [pageImage, setImage] = useState(undefined);

    useEffect(() => {
        getPageImage(`https://source.unsplash.com/random/800x600/?mars`, setImage)
    }, [])
    
    return (
        <PageContainer>
            <Image
                imageUrl={pageImage}
            />

            <PageContent>
                <PageLeftSidePanel>
                    App task stats here
                </PageLeftSidePanel>

                <PageTaskFormWrapper>
                    <PageTaskForm
                        task={state}
                        formActions={{
                            onSubmit: (event) => event.preventDefault(),
                            updateTitle: event => dispatch({type: 'TITLE', payload: event.target.value}),
                            updateDescription: event => dispatch({type: 'DESCRIPTION', payload: event.target.value}),
                            updateCreatedBy: event => dispatch({type: 'CREATED_BY', payload: event.target.value}),
                            updateAssignedTo: event => dispatch({type: 'ASSIGNED_TO', payload: event.target.value}),
                            disableCreateButton: disableCreateButton(state),
                            createTask: () => {
                                taskActions.createTask(state);
                                dispatch({type: 'CLEAR_FORM'})
                            }
                        }}
                    />
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