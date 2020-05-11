import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.mineral.name}</p>
                
            </div>
        )
    }
}
