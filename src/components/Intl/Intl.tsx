import * as React from 'react';
import { IntlProvider } from 'react-intl';
import Navigation from '../Navigation/Navigation';
import { connect, ConnectedComponent } from 'react-redux';
import { ChangeLanguage } from '../ChangeLanguage/ChangeLanguage';
import { Local } from '../../actions/localAction';

export const localeData: any = {
    "en": require( "../../locales/messages_en.json"),
    "pl": require( "../../locales/messages_pl.json")
};

interface State {
    local: Local;
}

// tslint:disable-next-line
interface Props extends State {}

const IntlBody: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <IntlProvider locale={props.local} messages={localeData[props.local]}>
            <ChangeLanguage />
            <Navigation />
        </IntlProvider>
    )
}

function mapStateToProps(state: State): State {
    return { local: state.local };
}

declare type IntlType = ConnectedComponent<React.FC<Props>, Pick<Props, never>>;
export const Intl: IntlType = connect(mapStateToProps)(IntlBody);