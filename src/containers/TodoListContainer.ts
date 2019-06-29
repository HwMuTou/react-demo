import {RootState} from "../reducers/RootReducer";
import {connect} from "react-redux";
import {Dispatch} from "react";
import {Todo, TodoList, TodoListState} from "../components/todo/TodoList";
import {addTodo, doneTodo, reTodo} from "../actions/TodoAction";
import {IAction} from "redux-actions-helper";

const mapStateToProps = (state: RootState): TodoListState => {
    return state.todoList
};

const mapDispatchToProps = function (dispatch: Dispatch<IAction<Todo>>) {
    return {
        doneTodo: (todo: Todo) => dispatch(doneTodo(todo)),
        addTodo: (todo: Todo) => dispatch(addTodo(todo)),
        reTodo: (todo: Todo) => dispatch(reTodo(todo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);