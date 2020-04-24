import * as React from "react";
import { Route } from 'react-router';
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";

const Menu: React.FC<{}> = (): JSX.Element => (
    <>
        <Route exact path='/' component={Home} />
        <Route path='/contact/' component={Contact} />
    </>
);

export default Menu;
