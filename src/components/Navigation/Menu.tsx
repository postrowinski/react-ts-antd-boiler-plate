import * as React from "react";
import { Link } from "react-router-dom";
import { useIntl } from 'react-intl';

const Menu: React.FC<{}> = (): JSX.Element => {
    const { formatMessage } = useIntl();
    return (
        <ul>
            <li>
                <Link to='/'>
                    {formatMessage({id: 'nav.home'})}
                </Link>
            </li>
            <li>
                <Link to='/contact/'>
                    {formatMessage({id: 'nav.contact'})}
                </Link>
            </li>
        </ul>
    )
}

export default Menu;
