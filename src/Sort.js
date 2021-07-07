import React, { Component } from 'react';

export default class Sort extends Component {

    state = {
        data: [],
        colorSelection: 'purple'
    }

    componentDidMount = async () => {
        const fetchedData = await request.get(`http://localhost:3000/minerals`);

        console.log(fetchedData);

        this.setState({ minerals: fetchedData.body })  
      }

     handleColorDropdown = (e) => {
        const value = e.target.value;
        this.setState({ colorSelection: value })
    }

    // handleChange= (e) => {
    //     const value = e.target.value;
    //     this.setState({ colorSelection: value });
    // }

    handleClick = async () => {
        //sends the value of the input to the api and waits for the returned data
        const fetchedData = await request.get(`http://localhost:3000/minerals${this.state.colorSelection}`);
        //sets the state to the returned data and to the body of the page
        console.log(fetchedData);
        this.setState({ data: fetchedData.body.results });
    }

    render() {
        return (
            <div>
                <div className="sort">
                    <label>Sort Minerals by Color:  </label>
                    <select onChange={this.handleColorDropdown}>
                        <option value="purple">Purple</option>
                        <option value="yellow">Yellow</option>
                        <option value="blue">Blue</option>
                        <option value="multi">Multi</option>
                    </select>
                    <button onClick={this.handleClick}>Search</button>
                </div>
            </div>
        )
    }
}
