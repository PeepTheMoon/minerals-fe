import React, { Component } from 'react';
import './App.css';

export default class AdminPage extends Component {
    render() {
        return (
            <div>
                <header>
                New Mineral Entry form
                </header>
                <form>
                    <label>
                    Mineral name: 
                    <input name="name"/>
                    </label>

                    <label>
                    Vibrates to: 
                    <input name="vibrates_to"/>
                    </label>

                    <label>
                    Rarity: 
                    <input name="rarity"/>
                    </label>

                    <label>
                    Associated Signs: 
                    <input name="associated_signs"/>
                    </label>

                    <label>
                    Chakra: 
                    <input name="chakra"/>
                    </label>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
