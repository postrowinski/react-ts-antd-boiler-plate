import { Action } from './actionTypes';
import { exampleAction, exampleFetchAction } from './exampleAction';
import { changeLocale, Locale } from './localeAction';
import { ThunkDispatch } from 'redux-thunk';

export interface Actions {
    changeLocale: (locale: Locale) => Action<Locale>;
    exampleAction: (example: number) => Action<number>;
    exampleFetchAction: () => (dispatch: ThunkDispatch<{}, {}, any>) => Promise<any>
}

export const actions: Actions = {
    changeLocale,
    exampleAction,
    exampleFetchAction
}