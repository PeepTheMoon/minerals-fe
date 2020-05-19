import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom';
import './App.css';

//heroku site link
//https://safe-bastion-92853.herokuapp.com/minerals

export default class ListPage extends Component {

state = { 
    minerals: [],
    colors: [],
    colorFilter: '' 
    }

componentDidMount = async () => {
        const fetchedData = await request.get(`http://localhost:3000/minerals`);
        const fetchedColorData = await request.get(`http://localhost:3000/colors`);

        this.setState({ 
            minerals: fetchedData.body, 
            colors: fetchedColorData.body 
            })  
      }

      handleChange = (e) => {
          this.setState({ colorFilter: e.target.value })
      }

    render() {
        return (
            <div>
                <select onChange={this.handleChange}>
                    <option value="">Show All Minerals</option>
                    {
                        this.state.colors.map(
                            color => <option value={color.color}>{color.color}</option>
                        )
                    }
                </select>
                Minerals List:
                {
                    this.state.minerals
                    .filter(mineral => {
                        if (!this.state.colorFilter) return true;
                        return mineral.color === this.state.colorFilter
                    })
                    .map(mineral => {
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
            </div>
        )
    }
}
