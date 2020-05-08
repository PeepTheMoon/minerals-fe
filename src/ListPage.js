import React, { Component } from 'react';
import request from 'superagent';

//heroku site link
//https://safe-bastion-92853.herokuapp.com/minerals

export default class ListPage extends Component {

state = {
    minerals: [],
    searchQuery: ''
}

async componentDidMount(){
        const searchParams = new URLSearchParams(window.location.search);
        const query = searchParams.get('search') || '';
        this.setState({ searchQuery: query });

        const response = await request.get(`http://localhost:3000/minerals`)

        this.setState({ minerals: response.body })  
      }

    render() {
        return (
            <ul>
            {
                this.state.minerals.map((mineral)=> {
                    return <li className="minerals">
                    <h2>{mineral.name}</h2>
                    <p>Vibrational Frequency: {mineral.vibrates_to}</p>
                    <p>Rarity: {mineral.rarity
                    ? 'It is rare.'
                    : 'It easy to find.'}
                    </p>
                    <p>Associated Signs: {mineral.associated_signs}</p>
                    <p>Chakra: {mineral.chakra}</p>
                    </li> })
                    }
            </ul>
        )
    }
}
