import React, { Component } from 'react';
import request from 'superagent';

export default class ListPage extends Component {
    render() {
        return (
            <ul>
                <li className="minerals">
                    <h2>Name: {this.props.name}</h2>
                    <p>Vibrational Frequency: {this.props.vibrates_to}</p>
                    <p>Healing: {this.props.healing}</p>
                    <p>Associated Signs: {this.props.associated_signs}</p>
                    <p>Chakra: {this.props.chakra}</p>
                </li>
            </ul>
        )
    }
}
