// 定义增加 state 类型常量
import {createAction} from "redux-actions-helper";
import {Action} from "redux";

export const INCREMENT= "INCREMENT";
export const DECREMENT= "DECREMENT";

// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export interface ModifyAction extends Action {
}

// 增加 state 次数的方法
export const increment = createAction<ModifyAction>(INCREMENT);

// 减少 state 次数的方法
export const decrement = createAction(DECREMENT);