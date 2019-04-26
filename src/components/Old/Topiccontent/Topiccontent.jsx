import React, { Component } from 'react';
import './Topiccontent.css';
import Subitem from './Subitem/Subitem';
import * as api from '../../../api'

// select topic-specific articles
class Topiccontent extends Component {
  state = {
    topic: 'All',
    articles: [],
    loading: true
  };
  render() {
    const { articles } = this.state;
    const subElements = articles.map(subItem => {
      return (
        <Subitem
          id={subItem.article_id}
          heading={`${subItem.title}`}
          body={subItem.body}
          votes={subItem.votes}
        />
      );
    });
    return (
      <main className="content">
        <h3 className="topiccont-head flex-center">Articles</h3>
        <div className="topiccont-list">{subElements}</div>
      </main>
    );
  }

  componentDidMount = async () => {
    const topic = this.props.location.search.slice(7);
    const articles = await api.getArticlesByTopic(topic);
    this.setState({
      topic,
      articles,
      loading: false
    });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { topic } = this.state
    if (prevState.topic !== topic) {
      const articles = await api.getArticlesByTopic(topic);
      await this.setState({
        articles,
        loading: false
      });
    }
  };
}

export default Topiccontent;
