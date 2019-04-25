import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import { Content, Topiccontent, Footer, Header, Home, Login, Nav } from './components';
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
        <Nav />
        <Router>
          <Topiccontent path="/articles?topic=:topic" />
          <Content path="/articles/:article_id" topics={topics} articles={articles} />
        </Router>
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
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('submitted', event.target.username.value);
  };
}

export default App;
