import { ThunkDispatch } from "redux-thunk";

export interface IDispatchable {
    type: string,
    payload?: any
}

export interface IAction {
    (dispatch: ThunkDispatch<{}, {}, any>): any
}