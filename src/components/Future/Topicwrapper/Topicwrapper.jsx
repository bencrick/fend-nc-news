import React, { Component } from 'react';
import './Topicwrapper.css';
import * as api from '../../api';
import Itemlist from '../Itemlist/Itemlist';

// select topic-specific articles
class Topicwrapper extends Component {
  state = {
    topic: '',
    articles: [],
    loading: true
  };
  render() {
    const { topic, topics, articles } = this.state;
    return (
      <main className="topicwrapper">
        <h3 className="topicwrapper-head">{topic}</h3>
        <div className="topicwrapper-body">
          {topics.filter(t => t.slug === topic)[0].description}
        </div>
        <div className="topicwrapper-list">
          <Itemlist items={articles} />
        </div>
      </main>
    );
  }

  componentDidMount = async () => {
    const topic = this.props.topic;
    const articles = await api.getArticlesByTopic(topic);
    this.setState({
      topic,
      articles,
      loading: false
    });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { topic } = this.state;
    if (prevState.topic !== topic) {
      const articles = await api.getArticlesByTopic(topic);
      await this.setState({
        articles,
        loading: false
      });
    }
  };
}

export default Topicwrapper;
