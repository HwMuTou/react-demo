import CounterReducer from "./CounterReducer";
import {StateType} from "typesafe-actions";

export const RootReducer = {
    counter: CounterReducer
};

export type RootState = StateType<typeof RootReducer>;