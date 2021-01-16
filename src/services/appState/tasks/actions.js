import { createAction } from '@reduxjs/toolkit'

export const viewTask = createAction('VIEW_TASK');

export const createTask = createAction('CREATE_TASK');

export const updateTask = createAction('UPDATE_TASK');

export const deleteTask = createAction('DELETE_TASK');

export const assignTask = createAction('ASSIGN_TASK');