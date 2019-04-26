import React, { Component } from 'react';
import './Nav.css';
import { Link } from '@reach/router';
import * as api from '../../api';
import capitalise from '../../utils/capitalise';

class Nav extends Component {
  state = {
    data: {
      topics: [],
      articles: []
    },
    selectedTopic: '',
    loading: true
  };
  render() {
    const { topics, articles } = this.state.data;
    const { selectedTopic } = this.state;

    const topicMenu = topics.map(topic => {
      return (
        <tr>
          <td>
            <Link to={`topics/${topic.slug}`} onClick={this.setTopic}>
              {capitalise(topic.slug)}
            </Link>
          </td>
        </tr>
      );
    });

    let articleMenuTitle = 'Articles';
    let showArticles = articles;
    if (selectedTopic !== 'All') {
      showArticles = articles.filter(
        article => article.topic === selectedTopic.toLowerCase()
      );
      articleMenuTitle = `${selectedTopic}\nArticles`;
    }

    const articleMenu = showArticles.map(article => {
      return (
        <tr className="article-row">
          <td>
            <Link
              to={`articles/${article.article_id}`}
              className="article-link"
            >
              {article.title}
            </Link>
          </td>
          <td>{article.votes}</td>
        </tr>
      );
    });

    return (
      <main className="nav">
        <table align="center" className="nav-menu flex-center">
          <thead>
            <tr>
              <th>Topics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to={'/'} onClick={this.setTopic}>
                  All
                </Link>
              </td>
            </tr>
            {topicMenu}
          </tbody>
        </table>
        <table align="center" className="nav-table flex-top-center">
          <thead>
            <tr>
              <th colSpan="2">{articleMenuTitle}</th>
            </tr>
          </thead>
          <tbody className="nav-list">{articleMenu}</tbody>
        </table>
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
      selectedTopic: 'All',
      loading: false
    });
  };

  setTopic = event => {
    this.setState({
      selectedTopic: event.target.innerText
    });
  };
}

export default Nav;
