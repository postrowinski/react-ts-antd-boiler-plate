import { exampleFetchAction } from './../actions/exampleAction';
import { combineReducers, Reducer } from 'redux';
import { exampleReducer } from './exampleReducer';
import { localReducer } from './localReducer';

export const reducer: Reducer = combineReducers({
    example: exampleReducer,
    exampleFetch: exampleFetchAction,
    local: localReducer
});