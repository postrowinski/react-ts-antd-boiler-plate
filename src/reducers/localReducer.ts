import { Action, ActionType } from '../actions/actionTypes';
import * as _ from 'lodash';
const localStorageLanguageKey: 'lang' = 'lang'
const getLanguage: string | null = localStorage.getItem(localStorageLanguageKey);
const defaultLocal: string = _.isNil(getLanguage) ? 'pl' : getLanguage;

export function localReducer(local: string = defaultLocal, action: Action<string>): string {
    switch(action.type) {
        case ActionType.CHANGE_LOCAL: {
            localStorage.setItem(localStorageLanguageKey, action.payload!)
            return action.payload!;
        }
        default: {
            return local;
        }
    }
}