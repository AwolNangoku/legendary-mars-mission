import { createSelector } from 'reselect';

const appTasks = state => state.tasks.items;

export const getAllTaskItems = createSelector(appTasks, (tasks) => ({tasks}))