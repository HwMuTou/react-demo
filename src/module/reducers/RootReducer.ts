import CounterReducer from "./CounterReducer";
import TodoReducer from "./TodoReducer";

export const RootReducer = {
    todo: TodoReducer,
    counter: CounterReducer
};

