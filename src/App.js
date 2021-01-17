import React, { Component } from 'react'
import SearchField from './components/SearchField'
import GifCard from './components/GifCard'
import './App.css';


class App extends Component {

  // constructor 
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  // display trending GIFs when component mounts
  componentDidMount = () => {
    let url='http://api.giphy.com/v1/gifs/trending?api_key=HlCrEXQnEe17192XoPZwBfFJW942fIFx';
    fetch(url)
    .then(response => response.json())
    .then(response => {
      this.setState({ data: response.data});
    })
    .catch(err => console.log(err));
  }

  // update state from SearchField component
  getData = newData => {
    this.setState({ data: newData });
  }

  // render App component
  render() {
    return (
      <div className='container'>

        <div className='searchField'>
          <SearchField update={this.getData} />
        </div>

        <div className='cards'>
          {this.state.data.map((item, index) => (
            <GifCard key={index} url={item.images.original.url} />
          ))}
        </div>

      </div>
    )
  }
}

export default App;

