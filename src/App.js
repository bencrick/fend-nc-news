import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import { Content, Footer, Header, Home, Login, Nav } from './components';
import { topics, articles, comments } from './data';
import * as api from './api';

// https://bc-nc-news.herokuapp.com/api

class App extends Component {
  state = {
    data: {},
    loading: true,
    path: '/'
  };
  render() {
    const { topics, articles, comments, path } = this.state.data;
    return (
      <main className="App">
        <Home />
        <Header />
        <Login />
        <Nav topics={topics} articles={articles} setContent={this.setContent} />
        <Content
          path={path}
          topics={topics}
          articles={articles}
          comments={comments}
        />
        <Footer />
      </main>
    );
  }

  componentDidMount = () => {
    const data = {
      topics,
      articles,
      comments
    };
    this.setState({
      data,
      loading: false
    });
  };

  setContent = event => {
    const path = event.target.href.replace(/^http.*:\d+\//, '');
    this.setState({
      path
    });
  };
}

function capitalise(str) {
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1).toLowerCase()}`;
}

export default App;
