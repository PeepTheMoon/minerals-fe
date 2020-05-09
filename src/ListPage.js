import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom';
import './App.css';

//heroku site link
//https://safe-bastion-92853.herokuapp.com/minerals

export default class ListPage extends Component {

state = { minerals: [] }

componentDidMount = async () => {
        const fetchedData = await request.get(`http://localhost:3000/minerals`);

        console.log(fetchedData);

        this.setState({ minerals: fetchedData.body })  
      }

    render() {
        return (
            <ul>
            Mineral List:
            {   
                this.state.minerals.map((mineral)=> {
                    return <li className="mineral-object" key={mineral.id}>
                    <Link to={ `mineral/${mineral.id}` }>
                        <h2>{mineral.name}</h2>
                    </Link>
                    <p>Vibrational Frequency: {mineral.vibrates_to}</p>
                    <p>Rarity: {mineral.rarity
                        ? 'It is rare.'
                        : 'It easy to find.'}
                    </p>
                    <p>Associated Signs: {mineral.associated_signs}</p>
                    <p>Chakra: {mineral.chakra}</p>
                    </li> 
                })
            }
            </ul>
        )
    }
}
