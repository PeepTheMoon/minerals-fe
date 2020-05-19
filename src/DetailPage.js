import React, { Component } from 'react';
import request from 'superagent';
import ListItem from './ListItem.js';
import './App.css';


export default class DetailPage extends Component {

    state = {
        mineral: {},
        name: '',
        vibrates_to: 0,
        associated_signs: '',
        chakra: '',
        rarity: false
    }
    
    componentDidMount = async () => {
        const fetchedData = await request.get(`http://localhost:3000/mineral/${this.props.match.params.id}`);
        console.log(fetchedData.body);

        this.setState({ mineral: fetchedData.body });
    }

    handleEditSubmit = async (e) => {
         e.preventDefault();
         const editMineral = await request.put('http://localhost:3000/minerals/:id', {
            name: this.state.name,
            vibrates_to: this.state.vibrates_to,
            rarity: this.state.rarity,
            associated_signs: this.state.associated_signs,
            chakra: this.state.chakra
         })
         console.log(editMineral);
     }

     handleEditChange = (e) => {
         this.setState({ associated_signs: e.target.value });
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
                <form>
                    <label> Edit Associated Signs
                    <input onChange={this.handleEditChange} value={this.state.associated_signs} name="edit-signs"></input>
                    <button>Submit</button>
                    </label>
                </form>
                <button> DELETE MINERAL </button>

            </div>
        )
    }
}
// this.props.history.push('/')