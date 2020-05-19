export interface Action<T> {
    type: ActionType;
    payload?: T
}

export enum ActionType {
    EXAMPLE = 'EXAMPLE',
    FETCH_EXAMPLE = 'FETCH_EXAMPLE',
    CHANGE_LOCALE = 'CHANGE_LOCALE'
}