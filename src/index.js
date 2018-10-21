import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import MainPage from './Container/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ MainPage } />
        </Switch>
    </BrowserRouter>
    , root);

