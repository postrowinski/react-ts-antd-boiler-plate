import { Action, ActionType } from './actionTypes';

export declare type Locale = 'pl' | 'en';

export function changeLocale(locale: Locale): Action<Locale> {
    return {
        type: ActionType.CHANGE_LOCALE,
        payload: locale
    }
}