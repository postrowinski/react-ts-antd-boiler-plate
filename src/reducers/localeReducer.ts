import { Action, ActionType } from '../actions/actionTypes';
import * as _ from 'lodash';
import { Locale } from '../actions/localeAction';
const localeStorageLanguageKey: 'lang' = 'lang'
const getLanguage: Locale | null = localStorage.getItem(localeStorageLanguageKey) as Locale | null;
const defaultLocal: Locale = _.isNil(getLanguage) ? 'pl' : getLanguage;

export function localeReducer(locale: Locale = defaultLocal, action: Action<Locale>): Locale {
    switch(action.type) {
        case ActionType.CHANGE_LOCALE: {
            localStorage.setItem(localeStorageLanguageKey, action.payload!)
            return action.payload!;
        }
        default: {
            return locale;
        }
    }
}