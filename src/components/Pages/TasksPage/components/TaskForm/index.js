import React from 'react';
import FormField from '../../../../Form/FormField';
import FormButton from '../../../../Form/FormButton';
import TaskForm from '../../../../Form/TaskForm';

const PageTaskForm = ({
    task: {
        title,
        description,
        createdBy,
        assignedTo,
    },
    formActions,
}) => (
    <TaskForm
        onSubmit={(event) => formActions.onSubmit(event)}
    >
        <FormField
            label='Title'
            type='text'
            id='title'
            value={title || ''}
            onChange={event => formActions.updateTitle(event)}
        />
        <FormField
            label='Description'
            type='text'
            id='description'
            value={description || ''}
            onChange={event => formActions.updateDescription(event)}
        />

        <FormField
            label='Created by'
            type='text'
            id='createdBy'
            value={createdBy || ''}
            onChange={event => formActions.updateCreatedBy(event)}
        />

        <FormField
            label='Assigned to'
            type='text'
            id='assignedTo'
            value={assignedTo || ''}
            onChange={event => formActions.updateAssignedTo(event)}
        />

        <FormButton
            title='Create Task'
            isDisabled={formActions.disableCreateButton}
            onClick={() => formActions.createTask({title, description, createdBy, assignedTo})}
        />

    </TaskForm>
);

export default PageTaskForm;