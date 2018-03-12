import React from 'react';
import ReactDOM from 'react-dom';
import Opportunities from './routes/Opportunities';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component = {Opportunities} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
