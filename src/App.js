import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import {
  Articlewrapper,
  Topicwrapper,
  Footer,
  Header,
  Home,
  Login,
  Nav,
  Allarticlewrapper,
  Errorwrapper
} from './components';

import * as api from './api';

// https://bc-nc-news.herokuapp.com/api

class App extends Component {
  state = {
    data: {
      topics: [],
      articles: []
    },
    loading: true,
    user: false
  };
  render() {
    const { topics, articles } = this.state.data;
    const { user } = this.state
    return (
      <main className="App">
        <Home />
        <Header />
        <Login logIn={this.logIn} logOut={this.logOut} user={this.state.user} />
        <Nav />
        <Router className="Router">
          <Topicwrapper
            path="/topics/:topic"
            topics={topics}
            articles={articles}
            user={user}
          />
          <Articlewrapper path="/articles/:article_id" user={user} />
          <Allarticlewrapper path="/" articles={articles} user={user} />
          <Errorwrapper default />
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

  logIn = async event => {
    event.preventDefault();
    const user = await api.getUserByUsername(event.target.username.value);
    await this.setState({
      user
    });
  };

  logOut = () => {
    this.setState({
      user: false
    });
  };
}

export default App;
