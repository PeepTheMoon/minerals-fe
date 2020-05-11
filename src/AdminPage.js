import React, { Component } from 'react';
import request from 'superagent';
import './App.css';

export default class AdminPage extends Component {

    state = {
        name: '',
        vibrates_to: 0,
        associated_signs: '',
        chakra: '',
        rarity: false
    }

     handleSubmit = async (e) => {
         e.preventDefault();
         const newMineral = await request.post('http://localhost:3000/minerals', {
            name: this.state.name,
            vibrates_to: this.state.vibrates_to,
            rarity: this.state.rarity,
            associated_signs: this.state.associated_signs,
            chakra: this.state.chakra
         })
         console.log(newMineral);
     }

     handleNameChange = (e) => {
         this.setState({ name: e.target.value });
     }

     handleVibrationChange = (e) => {
         this.setState({ vibrates_to: e.target.value });
     }

     handleSignChange = (e) => {
         this.setState({ associated_signs: e.target.value });
     }

     handleChakraChange = (e) => {
         this.setState({ chakra: e.target.value });
     }

     handleRareChange = (e) => {
         this.setState({ rarity: e.target.value });
     }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <header>
                    New Mineral Entry form:
                    </header>
                    <label>
                    Mineral name: 
                    <input onChange={this.handleNameChange} value={this.state.name} name="name"/>
                    </label>

                    <label>
                    Vibrates to: 
                    <input onChange={this.handleVibrationChange} value={this.state.vibrates_to} type="number" name="vibrates_to"/>
                    </label>

                    <label>
                    Associated Signs: 
                    <input onChange={this.handleSignChange} value={this.state.associated_signs} name="associated_signs"/>
                    </label>

                    <label>
                    Chakra: 
                    <input onChange={this.handleChakraChange} value={this.state.chakra} name="chakra"/>
                    </label>

                    <label>
                    Check if rare: 
                    <input onChange={this.handleRareChange} checked={this.state.rarity === 'false'} value="false" type="radio" name="rarity"/>
                    </label>

                    <label>
                    Check if not rare: 
                    <input onChange={this.handleRareChange} checked={true} value="true" type="radio" name="rarity"/>
                    </label>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
