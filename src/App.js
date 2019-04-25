import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import {
  Content,
  Topiccontent,
  Footer,
  Header,
  Home,
  Login,
  Nav
} from './components';
import * as api from './api';

// https://bc-nc-news.herokuapp.com/api

class App extends Component {
  state = {
    data: {},
    loading: true,
    user: false
  };
  render() {
    const { topics, articles } = this.state.data;
    return (
      <main className="App">
        <Home />
        <Header />
        <Login logIn={this.logIn} logOut={this.logOut} user={this.state.user} />
        <Nav />
        <Router>
          <Topiccontent path="/topics/:topic" />
          <Content
            path="/articles/:article_id"
            topics={topics}
            articles={articles}
          />
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
