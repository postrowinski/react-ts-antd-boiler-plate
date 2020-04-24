import 'antd/dist/antd.less';
import 'babel-polyfill';
import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import './assets/scss/app.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/reducer';
import { Intl } from './components/Intl/Intl';

const store: Store = createStore(reducer, applyMiddleware(thunk));

const App: React.FC<{}> = (): JSX.Element => {
    return (
        <Provider store={store}>
            <Intl />
        </Provider>
    )
};

export default hot(App);
