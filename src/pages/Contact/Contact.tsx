import * as React from "react";
import { useIntl } from 'react-intl';

const Contact: React.FC<{}> = (): JSX.Element => {
    const { formatMessage } = useIntl();
    return (
        <div>
            {formatMessage({id: 'nav.contact'})}
        </div>
    );
};

export default Contact;
