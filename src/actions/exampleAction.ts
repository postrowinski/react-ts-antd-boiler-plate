import { Action, ActionType } from './actionTypes';
import jsonPlaceholder from '../api/jsonPlaceholder';
import { AxiosResponse } from 'axios';
import { ThunkDispatch } from 'redux-thunk';

export function exampleAction(example: number): Action<number> {
    return {
        type: ActionType.EXAMPLE,
        payload: example
    }
}

export function exampleFetchAction(): (dispatch: ThunkDispatch<{}, {}, any>) => Promise<any> {
    return async function(dispatch: ThunkDispatch<{}, {}, any>): Promise<any> {
        const response: AxiosResponse<any[]> = await jsonPlaceholder.get('/posts');
        dispatch({
            type: ActionType.FETCH_EXAMPLE,
            payload: response.data
        })
    }
}