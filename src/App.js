import React, { Component } from 'react';
import ListPage from './ListPage.js';
import DetailPage from './DetailPage.js';
import './App.css';

import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    // Link,
    // useParams
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
                    </Switch>
                </Router>
            

            </div>
        )
    }
}
