import {StateType} from "typesafe-actions";
import {RootReducer} from "./RootReducer";

export type RootState = StateType<typeof RootReducer>;