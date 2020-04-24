import * as React from 'react';
import { connect, ConnectedComponent } from 'react-redux';
import { Button } from 'antd';
import { changeLocal, Local } from '../../actions/localAction';
import { useIntl } from 'react-intl';

interface State {
    local: Local;
}

interface Props extends State {
    changeLocal?: (local: Local) => void;
}

const ChangeLanguageBody: React.FC<Props> = (props: Props): JSX.Element => {
    const { formatMessage } = useIntl()
    return (
        <>
            {props.local === 'pl' ?
                <Button type='primary' onClick={(): void => props.changeLocal!('en')}>
                    {formatMessage({id: 'local.english'})}
                </Button> :
                <Button type='primary' onClick={(): void => props.changeLocal!('pl')}>
                    {formatMessage({id: 'local.polish'})}
                </Button>
            }
        </>
    );
}

function mapStateToProps(state: State): State {
    return { local: state.local }
}

declare type ChangeLanguageType = ConnectedComponent<React.FC<Props>, Pick<Props, never>>;
export const ChangeLanguage: ChangeLanguageType = connect(
    mapStateToProps,
    { changeLocal }
)(ChangeLanguageBody);