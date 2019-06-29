// 定义增加 state 类型常量
import {createAction} from "redux-actions-helper";

export const ON_VALUE_CHANGE= "ON_VALUE_CHANGE";

// 增加 state 次数的方法
export const onValueChange = createAction<number>(ON_VALUE_CHANGE);

