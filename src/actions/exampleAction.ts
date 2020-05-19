import { Action, ActionType } from './actionTypes';
import jsonPlaceholder from '../api/jsonPlaceholder';
import { AxiosResponse } from 'axios';
import { ThunkDispatch } from 'redux-thunk';

export interface ExampleActions {
    exampleAction: (example: number) => Action<number>;
    exampleFetchAction: () => (dispatch: ThunkDispatch<{}, {}, any>) => Promise<any>
}

function exampleAction(example: number): Action<number> {
    return {
        type: ActionType.EXAMPLE,
        payload: example
    }
}

function exampleFetchAction(): (dispatch: ThunkDispatch<{}, {}, any>) => Promise<any> {
    return async function(dispatch: ThunkDispatch<{}, {}, any>): Promise<any> {
        const response: AxiosResponse<any[]> = await jsonPlaceholder.get('/posts');
        dispatch({
            type: ActionType.FETCH_EXAMPLE,
            payload: response.data
        })
    }
}

export const exampleActions: ExampleActions = {
    exampleFetchAction,
    exampleAction
}