import { ExampleActions, exampleActions } from './exampleAction';
import { LocaleActions, localeActions } from './localeAction';

export interface Actions {
    exampleActions: ExampleActions;
    localeActions: LocaleActions;
}

export const actions: Actions = {
    exampleActions,
    localeActions
}