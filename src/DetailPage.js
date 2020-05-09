import React, { Component } from 'react';
import request from 'superagent';
import './App.css';

export default class DetailPage extends Component {

    state = { mineral: {} }

    componentDidMount = async () => {
        const fetchedData = await request.get(`http://localhost:3000/mineral/${this.props.match.params.id}`);

        console.log(fetchedData.body);
        this.setState({ mineral: fetchedData.body });
    }
    render() {
        
        return (
            <div>
                Dem Deets:
                <section>
                    { JSON.stringify(this.state.mineral) }
                </section>
            </div>
        )
    }
}
