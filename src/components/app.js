import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


export default class App extends Component {
state = { images: [] }



onSearchSubmit = (term) => {
 axios.get('https://api.unsplash.com/search/photos', {
    params: { query: term },
    headers: {
      Authorization: 
        'Client-ID APIKEYGOESHERE'
    }
  }).then((response) => {
    this.setState({ images: response.data.results });
  })
}


  render() {
    return (
      <div>
        <SearchBar label='Type For Some Dope Pics' onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}
