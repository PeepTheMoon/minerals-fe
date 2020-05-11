import React, { Component } from 'react';
import request from 'superagent';
import ListItem from './ListItem.js';
import './App.css';


export default class DetailPage extends Component {

    state = { mineral: {} }

    componentDidMount = async () => {
        const fetchedData = await request.get(`http://localhost:3000/mineral/${this.props.match.params.id}`);
        console.log(fetchedData.body);

        this.setState({ mineral: fetchedData.body[0] });
    }

    render() {
        
        return (
            <div>
                Dem Deets:
                <section className="mineral-object">
                    { 
                        this.state.mineral
                        ? <ListItem className="mineral-info" mineral={this.state.mineral} />
                        : 'Loading Mineral Information...' 
                    }
                </section>
            </div>
        )
    }
}
