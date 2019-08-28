import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Songs extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.props.songs.map(song => (
            <div className='col-md-6' key={song.track.track_id}>
              <div className='card mb-4 shadow-sm'>
                <div className='card-body'>
                  <h5>{song.track.artist_name}</h5>
                  <br />
                  <strong>Track: </strong>
                  {song.track.track_name}
                  <br />
                  <strong>Album: </strong>
                  {song.track.album_name}
                  <Link
                    to={{
                      pathname: `/song/${song.track.track_id}`,
                      state: { id: song.track.track_id }
                    }}
                    className='btn btn-dark btn-block mt-2'
                  >
                    View Lyrics
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Songs;
