import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StrictMode } from 'react';

import Home from './screens/home';
import Register from './screens/auth/register'
import Login from './screens/auth/login'
import Notes from './screens/notes/index'
import UserEdit from './screens/users/edit'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/notes' component={Notes} />
            <Route exact path='/users/edit' component={UserEdit} />
        </Switch>
    </BrowserRouter>
)

export default Routes;