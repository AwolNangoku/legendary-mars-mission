import React from 'react';
import {TaskItemForm} from './styled';

const TaskForm = ({onSubmit, children}) => (
    <TaskItemForm
        onSubmit={onSubmit}
    >
        {children}
    </TaskItemForm>
);

export default TaskForm;

