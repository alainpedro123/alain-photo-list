import React, { Component } from 'react';
import PhotoList from './components/PhotoList';
import http from './services/httpService';
import config from './config.json';

class App extends Component {
  state = {
    list: []
  }

  async componentDidMount() {
    const { data: users } = await http.get(config.url);
    this.setState({ list: users })
  }

  render() {
    const { list } = this.state;
    return !list.length ? <h1>Loading...</h1> :
      (
        <div className="app">
          <h1 className="header">React based List of Photos</h1>
          <PhotoList list={list} />
        </div>
      )
  }
}

export default App;

