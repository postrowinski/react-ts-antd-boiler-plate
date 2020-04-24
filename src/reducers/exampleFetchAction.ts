import { ActionType, Action } from './../actions/actionTypes';

export default (users: any[] = [], action: Action<any>): any[] => {
    switch(action.type) {
        case ActionType.FETCH_EXAMPLE: {
            return [...users, action.payload];
        }
        default: {
            return users;
        }
    }
}