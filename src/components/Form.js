import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className='container card card-body mb-4 p-4 border border-dark'>
        <h1 className='display-4 text-center'>
          <i className='fas fa-music' />
          Search For A song
        </h1>
        <p className='lead text-center'>Get the lyrics for any song</p>
        <form onSubmit={this.props.getSong}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg mb-2'
              placeholder='Song Title...'
              name='songName'
            />
            <button className='btn btn-dark btn-block mb-5'>
              Get Track Lyrics
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
