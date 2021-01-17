import React, { Component } from 'react'

class SearchField extends Component {

    // constructor
    constructor(props) {
        super(props);

        this.state = {
            userInput: "",
            data: []
        }
    }

    getUserInput = event => {
        this.setState({ userInput: event.target.value});
    }

    getRegular = (event) => {
        let url = `http://api.giphy.com/v1/gifs/search?q=${event.target.value}&api_key=HlCrEXQnEe17192XoPZwBfFJW942fIFx`
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.setState({ data: response.data});
            this.props.update(response.data);
        })
        .catch(err => console.log(err));
    }

    getTrending = () => {
        let url = 'http://api.giphy.com/v1/gifs/trending?api_key=HlCrEXQnEe17192XoPZwBfFJW942fIFx'
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.props.update(response.data);
        })
        .catch(err => console.log(err));
    }

    getRandom = () => {
        let url = 'http://api.giphy.com/v1/gifs/random?api_key=HlCrEXQnEe17192XoPZwBfFJW942fIFx'
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.setState({ data: response.data });
            this.props.update([response.data]);
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className='container'>

                <div className='searchBar'>
                    <input type='text' placeholder='Find GIFs...' onChange={this.getUserInput} />
                </div>

                <div className='buttons'>
                    <button onClick={this.getRegular} value={this.state.userInput}>Search</button>
                    <button onClick={this.getTrending}>Trending</button>
                    <button onClick={this.getRandom}>Random</button>
                </div>
  
            </div>
        )
    }
}

export default SearchField;
