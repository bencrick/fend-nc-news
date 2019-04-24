import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import { Content, Footer, Header, Home, Login, Nav } from './components';
import { topics, articles } from './data';
import * as api from './api';

// https://bc-nc-news.herokuapp.com/api

class App extends Component {
  state = {
    data: {},
    loading: true,
    path: '/'
  };
  render() {
    const { topics, articles } = this.state.data;
    return (
      <main className="App">
        <Home />
        <Header />
        <Login handleSubmit={this.handleSubmit} />
        <Nav topics={topics} articles={articles} setContent={this.setContent} />
        <Content path={this.state.path} topics={topics} articles={articles} />
        <Footer />
      </main>
    );
  }

  componentDidMount = async () => {
    const topics = await api.getTopics();
    const articles = await api.getArticles();
    await this.setState({
      data: {
        topics: topics,
        articles: articles
      },
      loading: false
    });
    console.log(this.state);
  };

  setContent = event => {
    const path = event.target.href.replace(/^http.*:\d+\//, '');
    this.setState({
      path
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('submitted', event.target.username.value);
  };
}

export default App;
