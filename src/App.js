import React, { Component } from 'react';
import ListPage from './ListPage.js';
import DetailPage from './DetailPage.js';
import AdminPage from './AdminPage.js';
import AboutMe from './AboutMe.js';
import './App.css';

import {
    BrowserRouter as Router, 
    Route, 
    Switch
} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/mineral/:id" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                        <Route 
                            path="/admin" 
                            exact
                            render={(routerProps) => <AdminPage {...routerProps} />} 
                        />
                        <Route 
                            path="/aboutme" 
                            exact
                            render={(routerProps) => <AboutMe {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            

            </div>
        )
    }
}
