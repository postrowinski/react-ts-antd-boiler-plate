import * as React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC<{}> = (): JSX.Element => (
    <ul>
        <li>
            <Link to='/'>
                Home
            </Link>
        </li>
        <li>
            <Link to='/contact/'>
                Contact
            </Link>
        </li>
    </ul>
);

export default Menu;
