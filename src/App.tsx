import 'antd/dist/antd.less';
import 'babel-polyfill';
import * as React from "react";
import { hot } from 'react-hot-loader/root';
import './assets/scss/variables.scss';
import Navigation from './components/Navigation/Navigation';

const App: React.FC<{}> = (): JSX.Element => <Navigation />;

export default hot(App);
