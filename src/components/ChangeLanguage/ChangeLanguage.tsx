import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { Locale } from '../../actions/localeAction';
import { useIntl } from 'react-intl';
import { Dispatch } from 'redux';
import { Action } from '../../actions/actionTypes';
import { RootState } from '../../reducers/reducer';
import { actions } from '../../actions/actions';

export const ChangeLanguage: React.FC<{}> = (): JSX.Element => {
    const { formatMessage } = useIntl();
    const dispatch: Dispatch = useDispatch();
    const { changeLocale } = actions.localeActions;
    const locale: Locale = useSelector<RootState, Locale>((state: RootState): Locale => state.locale);

    return (
        <>
            {locale === 'pl' ?
                <Button type='primary' onClick={(): Action<Locale> => dispatch(changeLocale('en'))}>
                    {formatMessage({id: 'local.english'})}
                </Button> :
                <Button type='primary' onClick={(): Action<Locale> => dispatch(changeLocale('pl'))}>
                    {formatMessage({id: 'local.polish'})}
                </Button>
            }
        </>
    );
}