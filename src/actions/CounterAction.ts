// 定义增加 state 类型常量
import {createAction, IAnyAction} from "redux-actions-helper";

export const ON_VALUE_CHANGE= "ON_VALUE_CHANGE";

// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export interface CounterAction extends IAnyAction {
}

// 增加 state 次数的方法
export const onValueChange = createAction<CounterAction>(ON_VALUE_CHANGE);

