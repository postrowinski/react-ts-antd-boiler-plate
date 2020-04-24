import { Action, ActionType } from '../actions/actionTypes';

export function exampleReducer(state: number = 0, action: Action<number>): number {
    switch(action.type) {
        case ActionType.EXAMPLE: {
            return action.payload!;
        }
        default: {
            return state;
        }
    }
}