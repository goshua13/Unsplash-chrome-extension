import React, { Component } from 'react'

class SearchBar extends Component {
    state = { term: ''}

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term)
    }

  render() {
    return (
      <div className='container'>
        <label className='display-1 ' style={{maxWidth: '40vw'}}>{this.props.label}</label>
          <form onSubmit={this.onFormSubmit}> 
            <input 
            className = 'form-control'
            placeholder="Enter text.."
            type='text'
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value})}
            />
            <div className='line'/>
          </form>
      </div>
    )
  }
}

export default SearchBar;
