import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './Container/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import stores from './Store';
import {Provider} from "mobx-react";

const root = document.getElementById('root');
ReactDOM.render(
    <Provider stores = {stores}>
        <MainPage />
    </Provider>
    , root);

