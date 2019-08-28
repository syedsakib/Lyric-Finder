import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = 'f6a904e4bb0e20692941a962f39f4986';

class Song extends Component {
  state = {
    tracks: {},
    lyrics: {}
  };

  componentDidMount() {
    const id = this.props.location.state.id;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${API_KEY}`
      )
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics });
        //console.log(this.state.lyrics);
        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${API_KEY}`
        );
      })
      .then(res => {
        this.setState({ tracks: res.data.message.body.track });
        console.log(this.state.tracks);
      })
      .catch(err => console.log(err));
  }

  render() {
    const { tracks, lyrics } = this.state;
    return (
      <div className='container'>
        <h1 className='text-center'>Song Details</h1>
        <div className='card mt-5'>
          <h5 className='card-header'>
            {tracks.track_name} by{' '}
            <span className='text-secondary'>{tracks.artist_name}</span>
          </h5>
          <div className='card-body'>
            <p className='card-text'>{lyrics.lyrics_body}</p>
          </div>
        </div>
        <ul className='list-group mt-3'>
          <li className='list-group-item'>
            <strong>Album ID: </strong>
            {tracks.album_id}
          </li>
          <li className='list-group-item'>
            <strong>Album Name: </strong>
            {tracks.album_name}
          </li>
          <li className='list-group-item'>
            <strong>EXPLICIT WORDS: </strong>
            {tracks.explicit === 0 ? 'Yes' : 'NO'}
          </li>
          <li className='list-group-item'>
            <strong>Track Rating: </strong>
            {tracks.track_rating}
          </li>
        </ul>

        <Link to='/' className='btn btn-outline-secondary btn-block mt-5'>
          GO BACK
        </Link>
      </div>
    );
  }
}
export default Song;
