import * as React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from "./Menu";
import Routing from "./Routing";

const Navigation: React.FC<{}> = (): JSX.Element => (
    <Router>
        <>
            <Menu />
            <Routing />
        </>
    </Router>
);

export default Navigation;
