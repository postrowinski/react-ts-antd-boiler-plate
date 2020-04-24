import * as React from "react";
import { useIntl } from "react-intl";
import { ExampleForm } from "../../components/ExampleForm/ExampleForm";

const Home: React.FC<{}> = (): JSX.Element => {
    const { formatMessage } = useIntl();
    return (
        <>
            <div>{formatMessage({id: 'nav.home'})}</div>
            <ExampleForm />
        </>
    )
}


export default Home;
