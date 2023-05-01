import React, { Fragment } from 'react';
import "./App.scss";
import { Notification, Section } from 'rbx';
import Header from "./components/header";
import Home from "./screens/home";
import Routes from './routes';

const App = () => (
    <div>
        <Routes />
    </div>
)

export default App;