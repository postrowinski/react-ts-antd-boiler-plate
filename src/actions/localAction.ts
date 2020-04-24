import { Action, ActionType } from './actionTypes';

export declare type Local = 'pl' | 'en';

export function changeLocal(local: Local): Action<Local> {
    return {
        type: ActionType.CHANGE_LOCAL,
        payload: local
    }
}