import React, { Component } from 'react';
import request from 'superagent';
import ListItem from './ListItem.js';
import './App.css';

export default class DetailPage extends Component {

    state = { mineral: {} }

    componentDidMount = async () => {
        const fetchedData = await request.get(`http://localhost:3000/mineral/${this.props.match.params.id}`);

        this.setState({ mineral: fetchedData.body });
    }

    render() {
        
        return (
            <div>
                Dem Deets:
                <section>
                {/* remove stringify when ListItem is all hooked up */}
                    { 
                        this.state.mineral
                        ? JSON.stringify(this.state.mineral)
                        : 'Loading Mineral Information...' 
                    }
                    <ListItem mineral={this.state.mineral} />
                </section>
            </div>
        )
    }
}
