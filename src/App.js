import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import { Content, Footer, Header, Home, Login, Nav } from './components';
import { topics, articles, comments } from './data';
import * as api from './api';

// https://bc-nc-news.herokuapp.com/api

class App extends Component {
  state = {
    data: {
      topics,
      articles,
      comments
    },
    loading: true
  };
  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <main className="App">
        <Home />
        <Header />
        <Login />
        <Nav />
        <Content />
        <Footer />
      </main>
    );
  }

  // componentDidMount = async () => {
  //   const data = [];
  //   this.setState({
  //     data,
  //     loading: false
  //   });
  // };
}

export default App;
