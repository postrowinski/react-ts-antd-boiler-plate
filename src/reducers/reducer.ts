import { exampleFetchAction } from './../actions/exampleAction';
import { combineReducers, Reducer } from 'redux';
import { exampleReducer } from './exampleReducer';
import { localeReducer } from './localeReducer';
import { Locale } from '../actions/localeAction';
import { ThunkDispatch } from 'redux-thunk';
export interface RootState {
    example: number;
    exampleFetch: (dispatch: ThunkDispatch<{}, {}, any>) => Promise<any>
    locale: Locale;
}

export const reducer: Reducer<RootState> = combineReducers({
    example: exampleReducer,
    exampleFetch: exampleFetchAction,
    locale: localeReducer
});