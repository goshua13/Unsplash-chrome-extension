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
        'Client-ID c6f7a7d7555b18aeb1d528c59411975887851f751ce6e995926c552987540c3a'
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
