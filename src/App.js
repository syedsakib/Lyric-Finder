import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Songs from './components/Songs';
import axios from 'axios';

const API_KEY = 'f6a904e4bb0e20692941a962f39f4986';

class App extends Component {
  state = {
    songs: []
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${API_KEY}`
      )
      .then(res => {
        this.setState({ songs: res.data.message.body.track_list });
        //console.log(this.state.lyrics);
      })
      .catch(err => console.log(err));
  }

  getSong = async e => {
    e.preventDefault();
    const songName = e.target.elements.songName.value;
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${songName}&page_size=10&page=1&s_track_rating=desc&apikey=${API_KEY}`
    );
    const data = await api_call.json();
    //console.log(data.message.body.track_list);
    this.setState({
      songs: data.message.body.track_list
    });
    //console.log(this.state.songs);
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <Form getSong={this.getSong} />
        <Songs songs={this.state.songs} />
      </div>
    );
  }
}

export default App;
