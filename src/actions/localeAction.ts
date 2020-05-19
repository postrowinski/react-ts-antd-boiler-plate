import { Action, ActionType } from './actionTypes';

export declare type Locale = 'pl' | 'en';

export interface LocaleActions {
    changeLocale(locale: Locale): Action<Locale>;
}

function changeLocale(locale: Locale): Action<Locale> {
    return {
        type: ActionType.CHANGE_LOCALE,
        payload: locale
    }
}

export const localeActions: LocaleActions = {
    changeLocale
}