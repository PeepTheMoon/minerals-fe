import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        return (
            <div>
                <li>
                    <h2>{this.props.mineral.name}</h2>
                    <p>Vibrational Frequency: {this.props.mineral.vibrates_to}</p>
                    <p>Rarity: {this.props.mineral.rarity}</p>
                    <p>Associated Signs: {this.props.mineral.associated_signs}</p>
                    <p>Chakra: {this.props.mineral.chakra}</p>
                </li>

            </div>
        )
    }
}
