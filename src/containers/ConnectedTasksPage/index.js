import { connect } from 'react-redux'
import TasksPage from '../../components/Pages/TasksPage';
import {getAllTaskItems} from './selectors';
import {assignTask, createTask, deleteTask, updateTask, viewTask} from "../../services/appState/tasks/actions";

const mapStateToProps = (state => ({
    taskItems: getAllTaskItems(state),
}));

const mapDispatchToProps = (dispatch => ({
    taskActions: {
        createTask: task => dispatch(createTask(task)),
        deleteTask: title => dispatch(deleteTask(title)),
        viewTask: title => dispatch(viewTask(title)),
        updateTask: updatedTask => dispatch(updateTask(updatedTask)),
        assignTask: assignInfo => dispatch(assignTask(assignInfo))
    }
}));

const ConnectedTasksPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksPage);

export default ConnectedTasksPage;